// import { Timestamp } from "bson";
// import { timeStamp } from "console";
import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    name: {
      type: "string",
      required: true,
    },
    email: {
      type: "string",
      required: true,
      unique: true,
    },
    position: {
      type: "string",
      required: true,
    },
    location: {
        type: "string"
    }
  });

export default mongoose.model("Admin", adminSchema, "admins");
