import mongoose from "mongoose";

// here we'll define the schema

const foodSchema = new mongoose.Schema({
    name:{  type:String, required:true},
    description:{type:String , required:true},
    price:{type:Number, required:true},
    image:{type:String, required:true},
    category:{type:String, required:true}
})

// using this schema , we'll create the model

const foodModel= mongoose.models.food || mongoose.model("food",foodSchema)

export default foodModel;
                          

// In this code, food is the name of the model, 
// and foodSchema defines the structure for each document in the foods collection.
//  The foodModel allows you to perform operations like creating, reading, updating, or deleting (CRUD)
//   documents in the collection.






