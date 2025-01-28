import express from "express"
import 'dotenv/config'
import statusCodes from "http-status-codes"
import bodyParser from "body-parser"
import userRouter from "./routes/user.routes.js"
import { errorHandler } from "./libs/errorhandler.js"
// import { connectDb } from "./db/index.js"
const app = express()
const PORT =process.env.PORT

app.use(bodyParser.json())
app.get("/",(req,res)=>{
  res.status(statusCodes.OK).json({message:"Welcome to my app"})
})
app.get("/api/users",(req,res)=>{
  res.status(statusCodes.OK).json({message:"From users route"})
})
app.use("/api/users",userRouter)

 app.use(errorHandler)
 app.listen(PORT,(req,res)=>{
  console.log(`Server at port ${PORT}`)
 })
// console.log (process.env.PORT)
// app.listen(PORT, ()=>{
//   console.log(`Server at port ${PORT}`)
//   connectDb()
// })