const mongoose =require("mongoose");



const userSchema = new mongoose.Model({

    email:{
        type:"string",
        required :true
    }

})
