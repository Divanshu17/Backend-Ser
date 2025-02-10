// import mongoose from "mongoose";
// import { DB_NAME } from "../constants.js";


// const connectDB = async () =>{
//     try {
//      const connnectionInstance=   await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//      console.log(`MongoDB connected: ${connnectionInstance.connection.host}`);
        
//     } catch (error) {
//         console.error("Mongo DB connection Error is-:",error)
//         throw(err)
//         process.exit(1)
        
//     }
// }

// export default connectDB;

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
    path: "./public/env"
});

console.log("connected MONGODB_URI:", process.env.MONGODB_URI); // Debugging
console.log("PORT:", process.env.PORT);

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB connected: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};

export default connectDB;
