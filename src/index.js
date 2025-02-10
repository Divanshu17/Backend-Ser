// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import express from "express";
import connectDB from "./db/index.js";
import dotenv from 'dotenv';


dotenv.config({
    path:`./.env`
})









// const app = express()

// (async ()=>{
//     try {
//         // Connect to MongoDB
//       await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//       app.on("ERRor", (error)=>{
//         console.log("error: ", error);
//         throw error
//       })

//       app.listen(process.env.PORT,()=>{
//         console.log("server is running on port: ", process.env.PORT);
//       })
        
//     } catch (error) {
//         console.error("ERROR :",error);
        
//     }
// })()