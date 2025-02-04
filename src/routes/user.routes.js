import {Router} from "express"
import { StatusCodes} from "http-status-codes"
import { loginUsercontroller,allUserController, registerUserController, getUserProfile } from "../controllers/user.controller.js"
import { authMiddleware } from "../middleware/authMiddleware.js"

// api/users
const userRouter = Router()

//userRouter.get("/", firstController)
userRouter.post("/login",loginUsercontroller)
userRouter.post("/register",registerUserController)
userRouter.get("/allusers",allUserController)

userRouter.get("/:userId",authMiddleware,getUserProfile)

export default userRouter



