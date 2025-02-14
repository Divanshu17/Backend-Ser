import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";

const registerUser = asyncHandler(async(req,res)=>{
    //get details of user from frontend
    //validation -not empty
    //check if user already exists: by username or email
    //cehck for images , avatar
    //if available upload them to cloudinary
    //create user object , create entry in database
    //remove password and refresh token feild from  resp
    //check for user creation 
    //return response  

    const {fullname , email ,username , password}=req.body
    console.log("Email:", email);


//validation
    if([fullname,email,username,password].some((feild)=>feild?.trim()==="")){
        throw new ApiError(400,"all feilds are required")
    }

//check if user already exist
    const existedUser=User.findOne({
        $or:[{ email },{ username }]
    })
    if(existedUser){
        throw new ApiError(409,"user already exist")
    }
})


export {registerUser}