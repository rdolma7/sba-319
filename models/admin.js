
import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: false
    },
    email: {
      type: String,
      required:false
    },
    position: {
      type: String,
      required: true
    },
    location: {
        type: String,
        required: false
    }
  });

export default mongoose.model("Admin", adminSchema, "admins");
