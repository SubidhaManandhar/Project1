import { prisma } from "../db/indexdb.js";


export const loginUserService=async (loginData)=>{
    // console.log(loginData)
    const username=loginData.name
    const email=loginData.email
    const password=loginData.password
    const gender=loginData.gender
    console.log("checking database for login");
    const user=await prisma.user.findUnique({where:{email}})
        if(!user){
            return {message:"no user found"};
        }
        const checkpass=user.password==password;
        const checkuser=user.name==username
        if(!checkpass || !username){
            return {message:"wrong password or name"}
        }
        else{
            return {message:"login success"};
        }
    }

export const allUserService=async()=>{
    return allUsers=await prisma.user.findMany()
}

export const registerUserService=async(registerData)=>{
    const res= await prisma.user.create({data:{
        fullName:registerData.fullName,
            email:registerData.email,
            password:registerData.password,
            gender:registerData.gender,

    },
    })
 return res;
 }
