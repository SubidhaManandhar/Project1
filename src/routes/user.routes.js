import {Router} from "express"
import { StatusCodes} from "http-status-codes"
import { firstController, loginUsercontroller } from "../controllers/user.controller.js"
const userRouter = Router()

userRouter.get("/", firstController)
userRouter.post("/login", loginUsercontroller)
userRouter.get("/about", (req,res) =>{
    res.send("About birds")
})
export default userRouter

