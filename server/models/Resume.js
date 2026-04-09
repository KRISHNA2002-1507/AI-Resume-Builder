import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: String,
  personalInfo: Object,
  education: Array,
  experience: Array,
  skills: Array,
  projects: Array
}, { timestamps: true });

export default mongoose.model("Resume", resumeSchema);