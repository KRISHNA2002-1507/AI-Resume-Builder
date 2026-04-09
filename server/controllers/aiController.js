export const generateSummary = async (req, res) => {
  const { role, skills } = req.body;

  const summary = `Passionate ${role} with skills in ${skills.join(", ")}.`;

  res.json({ summary });
};