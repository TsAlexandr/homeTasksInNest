import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../classes/classes';
import { UsersDocument } from '../schemas/schemas.model';

@Injectable()
export class UsersRepository {
  constructor(@InjectModel('Users') private usersModel: Model<UsersDocument>) {}
  async getUsers(page: number, pageSize: number) {
    const user = await this.usersModel
      .find({}, { projection: { _id: 0, passwordHash: false } })
      .limit(pageSize)
      .skip((page - 1) * pageSize)
      .lean();
    const total = await this.usersModel.countDocuments({});
    const pages = Math.ceil(total / pageSize);

    return {
      pagesCount: pages,
      page: page,
      pageSize: pageSize,
      totalCount: total,
      items: user,
    };
  }

  async createUser(newUser: User): Promise<User> {
    const result = await this.usersModel.create(newUser);
    return newUser;
  }

  async findByLogin(login: string) {
    const user = await this.usersModel.findOne({
      'accountData.login': login,
    });
    return user;
  }

  async findById(id: string) {
    const user = await this.usersModel.findOne({ 'accountData.id': id });
    return user;
  }

  async delUser(id: string) {
    const result = await this.usersModel.deleteOne({
      'accountData.id': id,
    });
    return result.deletedCount === 1;
  }

  async findByEmail(email: string) {
    const user = await this.usersModel.findOne({
      'accountData.email': email,
    });
    return user;
  }

  async findByConfirmCode(code: string) {
    const user = await this.usersModel.findOne({
      'emailConfirm.confirmationCode': code,
    });
    return user;
  }

  async updateConfirm(id: string) {
    const result = await this.usersModel.updateOne(
      { 'accountData.id': id },
      { $set: { 'emailConfirm.isConfirmed': true } },
    );
    return result.modifiedCount === 1;
  }

  async updateConfirmationCode(id: string) {
    const updatedUser = await this.usersModel.findOneAndUpdate(
      { 'accountData.id': id },
      {
        $set: {
          'emailConfirm.confirmationCode': v4(),
        },
      },
      { returnDocument: 'after' },
    );
    return updatedUser;
  }

  async addToken(id: string, token: string) {
    const updatedUser = await this.usersModel.findOneAndUpdate(
      { 'accountData.id': id },
      {
        $push: {
          'accountData.unused': token.toString(),
        },
      },
      { returnDocument: 'after' },
    );
    return updatedUser;
  }
}
