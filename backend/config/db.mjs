import mongoose from "mongoose";

let connectDB = async() => {
  try {
    await mongoose.connect(process.env.MONGO_CONN);
    console.log("MongoDB Connected...")
    
  } catch (error) {
    console.log("ERROR OCCUR : ",error);
  }
}
export default connectDB;