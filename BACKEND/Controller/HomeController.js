import {Puppy} from "../Models/Puppy.js";
import {Seller} from "../Models/seller.js";

export const getHomeData =async(req,res)=>{
    try{
        const puppies =await Puppy.find();
        const seller=await Seller.findOne();

        res.status(200).json({
            success:true,puppies,seller,
        });
    }
    catch(error){
         res.status(500).json({
      success: false,
      message: error.message,
    });
    }
};

