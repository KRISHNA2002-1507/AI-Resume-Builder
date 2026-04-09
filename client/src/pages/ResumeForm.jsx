import { useState, useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import PersonalInfo from "../components/FormSteps/PersonalInfo";
import Education from "../components/FormSteps/Education";
import Experience from "../components/FormSteps/Experience";
import Skills from "../components/FormSteps/Skills";
import Projects from "../components/FormSteps/Projects";

export default function ResumeForm() {
  const resumeRef = useRef();

  const [formData, setFormData] = useState({
    personalInfo: {},
    education: [],
    experience: [],
    skills: [],
    projects: []
  });

  const [showResume, setShowResume] = useState(false); // 🔥 NEW

  const handleSave = () => {
    localStorage.setItem("resumeData", JSON.stringify(formData));
    alert("Saved Successfully🔥");
  };

  const handleDownloadPDF = async () => {
    const canvas = await html2canvas(resumeRef.current, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save("Krishna_Resume.pdf");
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden text-white">
      
      {/* 🔥 Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-800 via-pink-600 to-blue-600 opacity-30 blur-3xl animate-pulse"></div>

      {/* 🔥 Main Container */}
      <div className="relative z-10 max-w-6xl mx-auto p-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-pink-400 to-blue-400 text-transparent bg-clip-text">
            ⚡ Resume Builder Pro
          </h1>

          <div className="flex gap-4">
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transition shadow-lg shadow-blue-500/50"
            >
              Save
            </button>

            {/* 🔥 SHOW RESUME BUTTON */}
            <button
              onClick={() => setShowResume(!showResume)}
              className="px-6 py-2 rounded-xl bg-gradient-to-r from-yellow-400 to-pink-500 hover:scale-105 transition shadow-lg shadow-yellow-500/50"
            >
              {showResume ? "Hide Resume" : "Show Resume"}
            </button>

            <button
              onClick={handleDownloadPDF}
              className="px-6 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-orange-500 hover:scale-105 transition shadow-lg shadow-pink-500/50"
            >
              Download
            </button>
          </div>
        </div>

        {/* 🔥 Glass Card */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8">

          {/* Form Area */}
          <div className="bg-white text-black rounded-2xl p-6 shadow-inner mb-6">
            <PersonalInfo setFormData={setFormData} />
            <Education setFormData={setFormData} />
            <Experience setFormData={setFormData} />
            <Skills setFormData={setFormData} />
            <Projects setFormData={setFormData} />
          </div>

          {/* 🔥 Resume Preview (conditionally show) */}
          {showResume && (
            <div
              ref={resumeRef}
              className="bg-white text-black rounded-2xl p-6 shadow-inner border-t-4 border-purple-500"
            >
              <h2 className="text-2xl font-bold mb-4 text-center">
                Resume Preview
              </h2>

              <p><b>Name:</b> {formData.personalInfo?.name}</p>
              <p><b>Email:</b> {formData.personalInfo?.email}</p>

              <hr className="my-3" />

              <h3 className="font-bold">Skills</h3>
              <ul className="list-disc ml-5">
                {formData.skills?.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>

              <hr className="my-3" />

              <h3 className="font-bold">Projects</h3>
              <ul className="list-disc ml-5">
                {formData.projects?.map((proj, i) => (
                  <li key={i}>{proj}</li>
                ))}
              </ul>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}