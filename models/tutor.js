import mongoose from "mongoose";

const tutorSchema = new mongoose.Schema({
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
  subjects: {
    type: String,
  }
  // rate: {
  //   type: Number,
  //   min:[1, "1 is the lowest you can rate your tutor."],
  //   max:[5, "5 is you would absolutely refer your tutor to your friends."]
  // },
});

export default mongoose.model("Tutor", tutorSchema, "tutors");
