
import User from "../models/usermodel.js"



export const login =async (req,res)=>{
    try {

        const {email,password} =req.body;
        const user =await User.findone({email});



        if(!user || user.password !==password){
            return res.status(401).json({error: "invalid credentials"});
        }


        res.status(200).json({message: "login sucessfully", user})
        
    } catch (error) {
        res.status.json({
            error:"failed to login"
        });
        
    }
}

