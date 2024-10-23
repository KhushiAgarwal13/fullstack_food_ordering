// in this file , we'll build a logic
// so that we can connect with database

import mongoose from "mongoose";

export const connnectDB= async()=>{
     await mongoose.connect('mongodb+srv://agarwalkhushi:manish123@cluster0.1tdvz.mongodb.net/fullstack_food_ordering').then(()=>{
        console.log("DB Connected");
     })

}
// using export keyword, we can use this in server.js file