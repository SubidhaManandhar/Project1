import { StatusCodes } from "http-status-codes"
import {  loginUserService,registerUserService, allUserService}from "../services/user.service.js"
// export const firstController = async (req,res)=>{
//     const data=await userFirstService()
//     res.status(StatusCodes.OK).json({message: "first controller"})
// }
export const loginUsercontroller = async (req,res,next) =>{
    // console.log(req)
    try{
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
        const data = await registerUserService(req.body);
        res.status(StatusCodes.ACCEPTED).json(data)
    }
    catch(error){
        console.log(error)
        next(error)
    }
    // res.status(StatusCodes.OK).json({message: data})
}



