import { StatusCodes } from "http-status-codes"
import {  loginUserService,registerUserService, allUserService}from "../services/user.service.js"
// export const firstController = async (req,res)=>{
//     const data=await userFirstService()
//     res.status(StatusCodes.OK).json({message: "first controller"})
// }
import {getUserProfileService} from "../services/user.service.js"
import { createUserSchema, loginUserSchema } from "../schemas/user.schemas.js";
export const loginUsercontroller = async (req,res,next) =>{
    // console.log(req)
    try{
        loginUserSchema.parse(req.body)
        const data = await loginUserService(req.body);
        res.status(StatusCodes.ACCEPTED).json(data);
    }
    catch(error){
        console.log(error)
        next(error)
    }
}
export const allUserController = async (req,res)=>{
    try{
    const usersData=await allUserService()
    res.status(StatusCodes.OK).json(Data)
    }catch(error){
        console.log(error)
        next(error)
    }
}
export const registerUserController = async (req,res,next)=>{
    try{
        createUserSchema.parse(req.body)
        const data = await registerUserService(req.body);
        res.status(StatusCodes.ACCEPTED).json(data)
    }
    catch(error){
        console.log(error)
        next(error)
    }
    // res.status(StatusCodes.OK).json({message: data})
}
// export const SignUpController = async (req, res, next) => {
//     try {
//       createUserSchema.parse(req.body);
//       const data = await SignUpService(req.body);
//       res.status(StatusCodes.ACCEPTED).json(data);
//     } catch (error) {
//       console.log(error);
//       next(error);
//     }
//   };
export const getUserProfile = async (req,res,next)=>{
    try{
        const data = await getUserProfileService(req.params.userId);
        res.status(StatusCodes.ACCEPTED).json(data)
    }
    catch(error){
        console.log(error)
        next(error)
    }
    // res.status(StatusCodes.OK).json({message: data})
}



