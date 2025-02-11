import { prisma } from "../db/indexdb.js";

export const getPostService = async() =>{
    const posts = await prisma.post.findMany({include:{user:{omit:{password:true}}}});
    return posts;
};

export const createPostService = async (postData,userId) => {
    const posts = await prisma.post.create({
      data: {
        content: postData.content,
        userId: userId,
      },
    });
    return posts;
  };
  export const getPostByIdService = async (postId) => {
    const posts = await prisma.post.findUnique({ where: { id: postId },
    });
      if(!posts){
        throw new error("Not found", {cause:"NotFoundCustomError"})
      }
    return posts;
  };
  export const getPostByuserIdService = async (userId) => {
    const posts = await prisma.post.findMany({ where: { userId},
    });
      if(!posts){
        throw new error("User Not found", {cause:"UserNotFoundCustomError"})
      }
    return posts;
  };
 
  export const DeletePostByIdService = async (postId,loggedInUserId) => {
    const post = await prisma.post.findUnique({where: { id: postId }})
    if(!post){
      throw new Error("Not found", {cause:"NotFoundCustomError"})
    }
    if(post.userId==loggedInUserId){
      await prisma.post.delete({where: { id: postId }})
    }
    else{
      throw new Error("You cannot perform this aaction", {cause:"UnauthorizedError"})
    }
    return {message:"Post deleted successfully"};
  };

  export const UpdatePostService =async (postId,loggedInUserId,updateData) => {
    const post = await prisma.post.findUnique({where: { id: postId }})
    if(!post){
      throw new Error("Not found", {cause:"NotFoundCustomError"})
    }
  
    if(updateData.like){
      const data = await prisma.post.update({
        where:{id:postId},
        data:{
          likescount:post.likescount+1,
        }
      })
      return data
    }
    
    // if(updateData.content){
    //   post.content = updateData.content;
    // }
    if (post.userId !== loggedInUserId) {
      throw new Error("You cannot perform this action", {
        cause: "UnauthorizedError",
      });
    } else {
      const data = await prisma.post.update({
        where: { id: postId },
        data: {
          content: updateData.content,
          likescount: updateData.likeFlag ? post.likescount + 1 : post.likescount,
        },
      });
      return data;
    }
  };