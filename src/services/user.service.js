import { prisma } from "../db/indexdb.js";
import { hash } from "bcrypt";
import { generateJwtToken } from "../libs/jwt.utils.js";
import { checkPassword, generateHashForPassword } from "../libs/password.utility.js";



export const loginUserService=async (loginData)=>{
    const email=loginData.email
    const password=loginData.password
    console.log("checking database for login");
    const user=await prisma.user.findUnique({where:{email: email}})
    if(!user){
        throw new Error("Invalid credentials", { cause: "CustomError" });
    }

    const isPasswordSame = await checkPassword(password, user.password);
    if (!isPasswordSame) {
        throw new Error("Invalid credentials", { cause: "CustomError" });
    }
    const token = generateJwtToken(user.id);
    console.log(token)
    delete user.password;
     return {message:"login success",user, token};
 };

export const allUserService=async()=>{
    return await prisma.user.findMany()
}

export const registerUserService=async(registerData)=>{
    const hashedPassword = await generateHashForPassword(
        registerData.password
    )
    const res= await prisma.user.create({data:{
        fullName:registerData.fullName,
            email:registerData.email,
            password:hashedPassword,
            gender:registerData.gender,

    },
    omit: {
        password: true
    },
    })
    const token = generateJwtToken(res.id);
    console.log(token)
    
return {token,user:res};
 }
 export const getUserProfileService = async(userId)=>{
    const user= await prisma.user.findUnique({
        where: {
            id:userId,
        },
        omit: {password:true},
    })
    return {user}
 }
