import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: false,
    minLength: 10,
  },
  grades:{
    type: Number,
    required: true
  }
});

studentSchema.index({grades:-1})
export default mongoose.model("Student", studentSchema, "students");
