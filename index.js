import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import Admin from "./models/admin.js";
import Student from "./models/student.js";
import Tutor from "./models/tutor.js";

const app = express();
const port = process.env.PORT;

app.use(express.json());

console.log(process.env.MONGO_URL);
await mongoose.connect(process.env.MONGO_URL);
console.log("Connected to DataBase");

app.get("/", (req, res) => {
  res.json("HELLO WORLD!! HAPPY FRIDAY");
});

app.get("/students", async (req, res) => {
  try {
    const students = await Student.find({});
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/students", async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(200).json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put("/students/:id", async (req, res)=>{
  try{
const {id} = req.params;
const student = await Student.findByIdAndUpdate(id, req.body)
if(!student){
  return res.status(404).json({message:"Student not found"}); 
}else{
  const updatedItem= await Student.findById(id);
  res.status(200).json(updatedItem);
}
  }catch(err){
    res.status(500).json({error: err.message});
  }
});

app.delete("/students/:id", async(req,res)=>{
  try{
    const {id} = req.params;
    const student = await Student.findByIdAndDelete(id);
    if(!student){
return res.status(404).json({message:`Student ${id} not found`});
    }
  }catch(err){
    res.status(500).json({error:err.message});
  }
})

app.listen(port, () => {
  console.log(`Server is running on port  ${port}`);
});