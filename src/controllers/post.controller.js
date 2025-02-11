import { StatusCodes } from "http-status-codes"
import { getPostService,createPostService, getPostByIdService, getPostByuserIdService, DeletePostByIdService, UpdatePostService } from "../services/post.service.js";
import { createPostSchema, updatePostSchema } from "../schemas/post.schemas.js";
export const getAllPostsController = async (req,res,next)=>{
try{
    const posts = await getPostService();
    res.status(StatusCodes.OK).json(posts);
}catch(error){
    next(error)
}
};
export const createPostController = async (req, res, next) => {
    try {
      // console.log("sdfasdf",req.userId)
      createPostSchema.parse(req.body)
      const data = await createPostService(req.body,req.userId);
      res.status(StatusCodes.ACCEPTED).json(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
  export const getPostByIdController = async (req, res, next) => {
    try {
      const postId = req.params.postId;
      const data = await getPostByIdService(postId);
      res.status(StatusCodes.OK).json(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
  export const getPostByuserIdController = async (req, res, next) => {
    try {
      const userId = req.params.userId;
      const data = await getPostByuserIdService(userId);
      res.status(StatusCodes.OK).json(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
  
  export const DeletePostController = async (req, res, next) => {
    try {
      const postId = req.params.postId;
      const loggedInUserId = req.userId;
      const response = await DeletePostByIdService(postId,loggedInUserId);
      res.status(StatusCodes.ACCEPTED).json(response);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
  export const UpdatePostController = async (req, res, next) => {
    try {
      updatePostSchema.parse(req.body);
      const postId = req.params.postId;
      const loggedInUserId = req.userId;
      const updateData = req.body;
      const response = await UpdatePostService(postId,loggedInUserId,updateData);
      res.status(StatusCodes.ACCEPTED).json(response);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };