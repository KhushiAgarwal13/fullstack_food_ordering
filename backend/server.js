// here well create one basic express server
import express from "express";
import cors from "cors";
import { connnectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'

// app config
const app = express();
const port = 4000;

// middleware
// whenever we get any requeset from frontend to
// backend , that will be parsed using json
app.use(express.json());
app.use(cors());
// using this we can access backend from any frontend

// db connection
connnectDB();

app.use("/api/food", foodRouter);
app.use("/images", express.static('uploads'));
app.use("/api/user", userRouter )


app.get("/", (req, res) => {
  res.send("API Working ");
});
// this is http method using this , we request the data
// from the server

app.listen(port, () => {
  console.log(`Sever started on http://localhost:${port}`);
});
//mongodb+srv://agarwalkhushi:manish123@cluster0.1tdvz.mongodb.net/?
