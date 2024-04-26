import {Schema, model, models} from "mongoose";


const userSchema = new Schema({
    clerkId:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:[true, "email is required"],
        unique:true,
    },
    username:{
        type:String,
        required:[true, "username is required"],
        unique:true,
        trim:true,
    },
    firstname:{
        type:String,
        required:[true, "firstname is required"],
    },
    lastname:{
        type:String,
        required:[true, "lastname is required"],
    },
    photo:{
        type:String,
        required:[true, "image is required"],
    }
})


const User = models.User || model("User", userSchema);


export default User;