import {Router} from "express"
import { StatusCodes} from "http-status-codes"
import { loginUsercontroller,allUserController, registerUserController } from "../controllers/user.controller.js"
const userRouter = Router()

//userRouter.get("/", firstController)
userRouter.post("/login",loginUsercontroller)
userRouter.post("/register",registerUserController)
userRouter.get("/allusers",allUserController)
export default userRouter



