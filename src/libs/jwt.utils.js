import jsonwebtoken from "jsonwebtoken"
export const generateJwtToken= (userId)=>{
    const payload = {
        sub: userId,
        issueAt: new Date()
    }
    const options = {
        expiresIn: "2h"
    };
    try{
        const token = jsonwebtoken.sign( payload,
            process.env.JWT_SECRET,options);
            return token;
    }catch(error){
        console.log(error)
        throw new Error("Internal server error");
    }
}