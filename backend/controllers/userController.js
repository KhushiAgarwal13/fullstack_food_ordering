import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";
import { response } from "express";

//login user

const loginUser = async (req, res) => {
  const {email,password} = req.body;

  try{
    const user = await userModel.findOne({email})

    if(!user){
return res.json({sucess:false, message:"user doesn't exist" })
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch){
return res.json({sucess:false, messagge:"Invalid Password"})
    }

    const token = createToken(user._id);
    res.json({sucess:"true", token})

  }
  catch(error){
console.log(error);
res.json({sucess:false, message:"true"})
  }
};

// register user API to create an user

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

const registerUser = async (req, res) => {
  const { name, password, email } = req.body;
  try {
    // checking is user already exists
    const exists = await userModel.findOne({ email });
    if (exists) {  
      return res.json({ sucess: false, message: "User already exist" });
    }

    // validating email format ^ strong password
    if (!validator.isEmail(email)) {
      return res.json({ sucess: false, message: "Please enter a valid email" });
    }

    if (password.length < 8) {
      return res.json({
        sucess: false,
        message: "Please enter a strong password",
      });
    }

    // hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    const token = createToken(user._id);
    // tokenn is generated
    res.json({ sucess: true, token });
  }
   catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" });
  }
};

export { loginUser, registerUser };



// accha toe jwt ka use new twken banane k liye hai