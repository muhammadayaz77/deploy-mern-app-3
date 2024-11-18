import userModel from '../Models/models.mjs';


export let postItem = async(req,res) => {
  let data = new userModel(req.body);
  await data.save();
  res.send({message : "Data has been added",success : true});
}
export let getItem = async(req,res) => {
  let data = await userModel.find();
  res.json(data);
} 
export let getOneItem = async(req,res) => {
  let data = await userModel.findById(req.params.id);
  res.json(data);
} 
export let deleteItem = async(req,res) => {
  let item = req.params.id;
  let deletedItem = await userModel.findByIdAndDelete(item);
  res.json({message : 'data has been deleted',data : deletedItem});
} 
export let updateItem = async(req,res) => {
  let id = req.params.id;
  let updateItem = await userModel.findByIdAndUpdate(id,req.body,{new:true});
  res.json({message : 'data has been updated',updateItem});
} 