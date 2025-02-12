// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import express from "express";
import connectDB from "./db/index.js";
import dotenv from 'dotenv';
import { app } from "./app.js";


dotenv.config({
    path:`./.env`
})



connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running on port- ${process.env.PORT}`);
    })
})
.catch((err)=>{
   console.log("MongoDB cannection failed!!!!",err);
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