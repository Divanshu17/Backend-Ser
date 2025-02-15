import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

// Cloudinary Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) {
            throw new Error("File path is missing");
        }

        console.log("Uploading file to Cloudinary:", localFilePath);
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
        });

        // console.log("File uploaded successfully to Cloudinary:", response.secure_url);
        fs.unlinkSync(localFilePath)
        return response;
    } catch (error) {
        console.error("Cloudinary Upload Error:", error);

        // Safely remove temp file
        try  {
            if (fs.existsSync(localFilePath)) {
                fs.unlinkSync(localFilePath);
                console.log("Deleted temp file:", localFilePath);
            }
        } catch (unlinkError) {
            console.error("Failed to delete temp file:", unlinkError);
        }

        return null;
    }
};

export { uploadOnCloudinary };
