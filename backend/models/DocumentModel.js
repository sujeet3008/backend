import mongoose from "mongoose";


const documentSchema = new mongoose.Schema({

    title :{
        type :String,
        require :true,
    },

    Description:{
        type :String,
    },

    filePath: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },

    amount: {
        type: Number,
    },

    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    filePath:{
        type:String,
        required:true
    }
} ,{timestamps:true})

export default mongoose.model("document",documentSchema);