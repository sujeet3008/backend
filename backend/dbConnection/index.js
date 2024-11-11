import mongoose, { connect } from "mongoose";
import dotenv from "dotenv"
dotenv.config();


const dbConnect = async()=>{
    try {
        const connection =await mongoose.connect(process.env.MONGO_URL);

        console.log("database connected Successfully");
    } catch (error) {
        console.log("error occured in connecting database" + error);
        process.exit(1);
    }
}


export default dbConnect;