import {Router} from "express"
import { createPostController, DeletePostController, getAllPostsController, getPostByIdController, getPostByuserIdController, UpdatePostController } from "../controllers/post.controller.js";

 import { authMiddleware } from "../middleware/authMiddleware.js"

// api/posts
const postRouter = Router()


postRouter.get("/", authMiddleware, getAllPostsController);
postRouter.post("/", authMiddleware, createPostController);
postRouter.get("/:postId", authMiddleware, getPostByIdController);
postRouter.get("/user/:userId", authMiddleware, getPostByuserIdController);
postRouter.delete("/:postId", authMiddleware,DeletePostController);
postRouter.patch("/:postId", authMiddleware,UpdatePostController);
export default postRouter



