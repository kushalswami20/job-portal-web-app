import mongoose from "mongoose";

const userSchema= new mongoose.Schema({//check about schema
    fullname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique:true
    },
    phoneNumber:{
        type:Number,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required:true
    },
    role:{
        type: String,
        enum:['student','recruiter'],
        required:2
    },
    profile:{
        bio:{type:String},
        skills:[{type:String}],//why in two brackets
        resume:{type:String},//url to resume
        resumeOriginalName:{type:String},
        company:{type:mongoose.Schema.Types.ObjectId,ref:'Company'},
        profilePhoto:{
            type:String,
            default:""
        }
    }

},{timestamps:true});
const User =mongoose.model('User',userSchema);//check it

export default User;