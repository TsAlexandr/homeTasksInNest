import { Injectable } from '@nestjs/common';
import { PostsRepository } from './posts.repository';
import { PostsCon } from '../../common/types/classes/classes';
import { v4 } from 'uuid';
import { PostsRepositoryRAW } from '../../library/rawDb/postsRepositoryRAW';

@Injectable()
export class PostsService {
  constructor(private postsRepository: PostsRepository) {}

  async findAll(
    page: number,
    pageSize: number,
    userId: string,
    bloggerId: string | null,
    searchNameTerm: string,
  ) {
    return await this.postsRepository.getPosts(
      page,
      pageSize,
      userId,
      bloggerId,
      searchNameTerm,
    );
  }

  async findOne(id: string, userId: string) {
    const post = await this.postsRepository.getPostById(id, userId);
    return post;
  }

  async create(newPost: PostsCon) {
    const createPost = {
      addedAt: new Date(),
      id: v4(),
      title: newPost.title,
      shortDescription: newPost.shortDescription,
      content: newPost.content,
      bloggerId: newPost.bloggerId,
      bloggerName: newPost.bloggerName,
      extendedLikesInfo: {
        dislikesCount: 0,
        likesCount: 0,
        myStatus: 'None',
        newestLikes: [],
      },
      totalActions: [],
    };
    return await this.postsRepository.createPosts(createPost);
  }

  async update(updPost: PostsCon) {
    return await this.postsRepository.updatePost(updPost);
  }

  async remove(id: string) {
    return await this.postsRepository.deletePost(id);
  }

  async updateActions(
    postId: string,
    likeStatus: string,
    userId: string,
    login: string,
  ) {
    return await this.postsRepository.updateActions(
      postId,
      likeStatus,
      userId,
      login,
    );
  }
}