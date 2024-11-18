import mongoose from "mongoose";

let userSchema = new mongoose.Schema({
  item : {
    type : String ,
    required : true
  },
  email : {
    type : String ,
    required : true,
    unique : true,
  },
})

let userModel = mongoose.model('user',userSchema);

export default userModel;