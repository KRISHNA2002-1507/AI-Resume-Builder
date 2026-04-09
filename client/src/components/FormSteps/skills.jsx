import { useState } from "react";

export default function Skills({ setFormData }) {
  const [input, setInput] = useState("");
  const [skills, setSkills] = useState([]);

  const addSkill = () => {
    if (!input) return;

    const updatedSkills = [...skills, input];
    setSkills(updatedSkills);

    // 🔥 MAIN FIX
    setFormData(prev => ({
      ...prev,
      skills: updatedSkills
    }));

    setInput("");
  };

  return (
    <div>
      <h2>Skills</h2>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter skill"
      />

      <button onClick={addSkill}>Add</button>
    </div>
  );
}