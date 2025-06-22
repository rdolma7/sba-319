import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  username: {
    type: "string",
    required: "true",
    unique: "true",
  },
  email: {
    type: "string",
    required: "true",
    unique: "true",
  },
  password: {
    type: "string",
    required: "true",
    minLength: 10,
  },
  createdAt: {
    type: "Date",
    default: Date.now,
  },
});

export default mongoose.model("Admin", adminSchema, "admins");
