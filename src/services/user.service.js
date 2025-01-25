export const userFirstService = async (args) =>{
    console.log("Reached ")
    console.log("Doing work ")
    const someDataFromDatabase = "My data"
    return someDataFromDatabase;
}
export const loginUserService = async (loginData) =>{
    const email= loginData.email;
    const password = loginData.password
    console.log("Checking database for login")
    if(email=="hari@gamil.com"&&password=="test"){
        return {message: "Login successful"}
    }
else 
return{message:"Login failed!"}
}