import express from  "express";
import dotenv from "dotenv";
import dbConnect from "./dbConnection/index.js";
import router from "./routes/index.js"
import cors from  "cors"



const PORT =process.env.PORT || 8080



dotenv.config();
const app=express();

app.use(cors());
app.use(express.json());



dbConnect();


app.use("/api/login",router)


app.use("/uploads", express.static(path.join(__dirname, "uploads")));  


app.use("/api/documents",router);

app.listen(PORT,()=> console.log(`server running on port ${PORT}`))


