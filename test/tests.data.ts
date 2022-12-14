import { BloggersDto } from '../src/features/public/blogs/dto/bloggers.dto';
import { NewPost } from '../src/features/public/posts/dto/create-post.dto';

export const bloggerCreate: BloggersDto = {
  name: 'hello blogger',
  websiteUrl: 'https://youtubadsfadsg.com',
  description: 'bla-bla',
};

export const expectBlogger = {
  id: expect.any(String),
  name: bloggerCreate.name,
  websiteUrl: bloggerCreate.websiteUrl,
};

export const wrongBlogger = {
  name: 1234,
  websiteUrl: 'blablablabla',
};

export const updateTestBlogger = {
  name: 'hello',
  websiteUrl: 'https://youtube.com',
};

export const postWithInvalidBloggerId = {
  title: 'new title',
  shortDescription: 'new short description',
  content: 'new content for post',
  bloggerId: 1234567,
};

export const createPostWithBloggerId: NewPost = {
  title: 'new title',
  shortDescription: 'new short description',
  content: 'new content',
};

export const authUserRegistration = {
  login: 'Hello pal',
  email: 'gerbeles210@mail.com',
  password: '1234567sadf',
};
export const authUserRegistration2 = {
  login: 'fast push',
  email: 'gerberAlex210@mail.com',
  password: '1234567sadf',
};
export const authUserRegistration3 = {
  login: 'evervest',
  email: 'userHuser210@mail.com',
  password: '1234567sadf',
};

export const authUserLogin = {
  login: 'Hello pal',
  password: '1234567sadf',
};
export const authUserLogin2 = {
  login: 'fast push',
  password: '1234567sadf',
};
export const authUserLogin3 = {
  login: 'evervest',
  password: '1234567sadf',
};

export const expectPostDataAfterAllLikeStatus = {
  addedAt: expect.any(String),
  id: expect.any(String),
  title: expect.any(String),
  bloggerId: expect.any(String),
  content: expect.any(String),
  bloggerName: expect.any(String),
  shortDescription: expect.any(String),
  extendedLikesInfo: {
    dislikesCount: 0,
    likesCount: 0,
    myStatus: 'None',
    newestLikes: expect.any(Array),
  },
};

export const expectPostDataWithUserLikeStatus = {
  addedAt: expect.any(String),
  id: expect.any(String),
  title: expect.any(String),
  bloggerId: expect.any(String),
  content: expect.any(String),
  bloggerName: expect.any(String),
  shortDescription: expect.any(String),
  extendedLikesInfo: {
    dislikesCount: 1,
    likesCount: 1,
    myStatus: 'Like',
    newestLikes: expect.any(Array),
  },
};

export const expectPostDataWithDislikeStatus = {
  addedAt: expect.any(String),
  id: expect.any(String),
  title: expect.any(String),
  bloggerId: expect.any(String),
  content: expect.any(String),
  bloggerName: expect.any(String),
  shortDescription: expect.any(String),
  extendedLikesInfo: {
    dislikesCount: 1,
    likesCount: 1,
    myStatus: 'Dislike',
    newestLikes: expect.any(Array),
  },
};

export const createInvalidUser = {
  login: 'Hello pal',
  email: 'oytuyrftygyhjokikvjgcfgvjk',
  password: '1234567sadf',
};

export const expectCommentDataAfterAllLikeStatus = {
  addedAt: expect.any(String),
  id: expect.any(String),
  content: expect.any(String),
  userId: expect.any(String),
  userLogin: expect.any(String),
  likesInfo: {
    dislikesCount: 1,
    likesCount: 1,
    myStatus: 'None',
  },
};

export const expectCommentDataWithUserLikeStatus = {
  addedAt: expect.any(String),
  id: expect.any(String),
  content: expect.any(String),
  userId: expect.any(String),
  userLogin: expect.any(String),
  likesInfo: {
    dislikesCount: 1,
    likesCount: 1,
    myStatus: 'Like',
  },
};

export const expectCommentDataWithUserDislikeStatus = {
  addedAt: expect.any(String),
  id: expect.any(String),
  content: expect.any(String),
  userId: expect.any(String),
  userLogin: expect.any(String),
  likesInfo: {
    dislikesCount: 1,
    likesCount: 1,
    myStatus: 'Dislike',
  },
};
