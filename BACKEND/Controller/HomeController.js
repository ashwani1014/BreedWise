import {Puppy} from "../Models/Puppy.js";
import {Seller} from "../Models/seller.js";

export const getHomeData =async(req,res)=>{
    try{
        // Add pagination with default values
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        // Fetch puppies with pagination
        const puppies =await Puppy.find()
            .skip(skip)
            .limit(limit)
            .sort({ createdAt: -1 }); // Sort by newest first

        // Get total count for pagination info
        const total = await Puppy.countDocuments();

        const seller=await Seller.findOne();

        res.status(200).json({
            success:true,
            puppies,
            seller,
            pagination: {
                currentPage: page,
                totalPages: Math.ceil(total / limit),
                totalPuppies: total,
                limit
            }
        });
    }
    catch(error){
         res.status(500).json({
      success: false,
      message: error.message,
    });
    }
};

