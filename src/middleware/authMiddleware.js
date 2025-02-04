 import jwt from "jsonwebtoken"
import { prisma } from "../db/indexdb.js";
import { StatusCodes } from "http-status-codes";
 export const authMiddleware = async (req,res,next) =>{
    const authHeader = req.headers.authorization;
    const authToken = authHeader?.split(" ")[1];
    if(!authToken){
        res.status((statusCodes.UNAUTHORIZED).json({message:"Invalid token"}))
    }
    console.log(authToken)

    try {
        const payload = jwt.verify(authToken,process.env.JWT_SECRET);
        console.log(payload)
        const userId = payload.sub
        const user= await prisma.user.findUnique({where: {id:userId}})
        if(!user){
            res.status((StatusCodes.UNAUTHORIZED).json({message:"Unauthorized"}))
        }
        res.userId = userId //data transfer from middleware
        next();
    } catch (error) {
        next(error)
    }
}