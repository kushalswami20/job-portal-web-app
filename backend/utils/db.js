import mongoose from "mongoose";

const connectDB = async () => {
    try{
        await mongoose.connect("mongo localhost");
        console.log('mongo db connect')
    }
    catch(error){
        console.log('error')
    }
}
export default connectDB ;
