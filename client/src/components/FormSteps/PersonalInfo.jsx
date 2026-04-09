import { useState } from "react";

export default function PersonalInfo({ setFormData }) {
  const [data, setData] = useState({
    name: "",
    email: ""
  });

  const handleChange = (e) => {
    const updated = { ...data, [e.target.name]: e.target.value };
    setData(updated);

    // 🔥 Update parent state
    setFormData(prev => ({
      ...prev,
      personalInfo: updated
    }));
  };

  return (
    <div className="mb-4">
      <h2 className="text-xl">Personal Info</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
        className="border p-2 mr-2"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        className="border p-2"
      />
    </div>
  );
}