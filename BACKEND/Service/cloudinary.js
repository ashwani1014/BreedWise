import { v2 as Clodinary } from "cloudinary"
import fs from 'fs';
import dotenv from "dotenv";
dotenv.config();

Clodinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});


const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        // upload file on cloudinary
        const response = await Clodinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        return response;
    } catch (error) {
        console.error("Cloudinary Upload Error:", error);
        if (fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath);
        }
        return null;
    }
}

const deleteFromCloudinary = async (imageUrl) => {
    try {
        if (!imageUrl) return;
        // Extract public ID from the Cloudinary URL
        const parts = imageUrl.split('/');
        const fileName = parts[parts.length - 1];
        const publicId = fileName.split('.')[0];
        
        await Clodinary.uploader.destroy(publicId);
    } catch (error) {
        console.error("Cloudinary Delete Error:", error);
    }
}

export { uploadOnCloudinary, deleteFromCloudinary };