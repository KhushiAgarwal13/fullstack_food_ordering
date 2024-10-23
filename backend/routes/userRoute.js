import express from "express"
import {loginUser, registerUser } from "../controllers/userController.js"

const userRouter = express.Router()


// nwo we need the data of user
// like the user name and password


userRouter.post("/register", registerUser)
userRouter.post("/login",loginUser)


export default userRouter