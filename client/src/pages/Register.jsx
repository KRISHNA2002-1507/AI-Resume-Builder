import { useState } from "react";
import API from "../services/api";

export default function Register() {
  const [form, setForm] = useState({ name:"", email:"", password:"" });

  const handleSubmit = async () => {
    await API.post("/auth/register", form);
    alert("Registered Successfully");
    window.location.href = "/login";
  };

  return (
    <div className="flex justify-center mt-20">
      <div className="p-6 shadow w-80">
        <input className="border p-2 w-full mb-2" placeholder="Name"
          onChange={(e)=>setForm({...form, name:e.target.value})} />
        <input className="border p-2 w-full mb-2" placeholder="Email"
          onChange={(e)=>setForm({...form, email:e.target.value})} />
        <input type="password" className="border p-2 w-full mb-2"
          onChange={(e)=>setForm({...form, password:e.target.value})} />
        <button onClick={handleSubmit} className="bg-green-500 text-white w-full py-2">
          Register
        </button>
      </div>
    </div>
  );
}