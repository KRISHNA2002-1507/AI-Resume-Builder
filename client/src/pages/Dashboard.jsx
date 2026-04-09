import { useEffect, useState } from "react";
import API from "../services/api";
import ResumeCard from "../components/ResumeCard";


export default function Dashboard() {
  const [resumes, setResumes] = useState([]);


    useEffect(() => {
    const fetchData = async () => {
      const { data } = await API.get("/resume");
      setResumes(data);
    };
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <a href="/create" className="bg-blue-500 text-white px-4 py-2">Create</a>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {resumes.map((r) => <ResumeCard key={r._id} data={r} />)}
        
      </div>
      
    </div>
  );
}