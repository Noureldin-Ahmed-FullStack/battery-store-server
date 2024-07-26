import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name:{
        type: String,
        trim:true,
        required:true,
        minLength:[2,'name is too short']
    },
    email:{
        type:String,
        required:true,

    },   
    profilePicture:{
        type:String,
        required: false,
        default: ""
    },
    password:String,
    Validated:{
        type:Boolean,
        default:false
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    },
    wishlist:[{type: mongoose.Types.ObjectId, ref:'product'}],
    addresses: [
        {
            street:String,
            phone: String,
            city: String,
        }
    ]
})
export const userModel =mongoose.model("user", schema)