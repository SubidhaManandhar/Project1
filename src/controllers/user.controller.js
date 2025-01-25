import { StatusCodes } from "http-status-codes"
import { userFirstService ,loginUserService} from "../services/user.service.js"
export const firstController = async (req,res) =>{
    const data = await userFirstService();
    res.status(StatusCodes.OK).json({message: data})
}
export const loginUsercontroller = async (req,res) =>{
    console.log(req)
    const data = await loginUserService(req.body);
    res.status(StatusCodes.ACCEPTED).json(data)
}