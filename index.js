import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import Admin from "./models/admin.js";
// import Student from "./models/student.js";
// import Tutor from "./models/tutor.js";


const app = express();
const port = process.env.PORT;

app.use(express.json());

console.log(process.env.MONGO_URL)
await mongoose.connect(process.env.MONGO_URL);
console.log("Connected to DataBase");

app.get("/", (req, res) => {
  res.json("HELLO WORLD!! HAPPY FRIDAY");
});

app.listen(port, () => {
  console.log(`Server is running on port  ${port}`);
});
