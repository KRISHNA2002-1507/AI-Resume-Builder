import Resume from "../models/Resume.js";

export const createResume = async (req, res) => {
  const resume = await Resume.create({
    userId: req.user.id,
    ...req.body
  });
  res.json(resume);
};

export const getResumes = async (req, res) => {
  const resumes = await Resume.find({ userId: req.user.id });
  res.json(resumes);
};

export const getResumeById = async (req, res) => {
  const resume = await Resume.findById(req.params.id);
  res.json(resume);
};

export const updateResume = async (req, res) => {
  const updated = await Resume.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

export const deleteResume = async (req, res) => {
  await Resume.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};