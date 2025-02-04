import {Router} from "express"
import { createPostController, getAllPostsController, getPostByIdController } from "../controllers/post.controller.js";
// import { StatusCodes} from "http-status-codes"
// import { loginUsercontroller,allUserController, registerUserController, getUserProfile } from "../controllers/user.controller.js"
// import { authMiddleware } from "../middleware/authMiddleware.js"

// api/users
const postRouter = Router()


postRouter.get("/", getAllPostsController);
postRouter.post("/", createPostController);
postRouter.post("/:postId", getPostByIdController);
// postRouter.post("/:postId", UpdatePostController);
// postRouter.post("/:postId", DeletePostController);
export default postRouter



