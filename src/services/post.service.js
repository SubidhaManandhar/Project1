import { prisma } from "../db/indexdb.js";

export const getPostService = async() =>{
    const posts = await prisma.post.findMany();
    return posts;
};

export const createPostService = async (user) => {
    const userAndPosts = await prisma.post.create({
      data: {
        content: user.content,
        authorId: user.authorId,
      },
    });
    return userAndPosts;
  };