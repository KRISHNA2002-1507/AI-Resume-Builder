import { useState, useContext } from "react";
import API from "../services/api";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState({ email:"", password:"" });

  const handleSubmit = async () => {
    const { data } = await API.post("/auth/login", form);
    login(data);
    window.location.href = "/dashboard";
  };

  return (
    <div className="flex justify-center mt-20">
      <div className="p-6 shadow w-80">
        <input className="border p-2 w-full mb-2" placeholder="Email"
          onChange={(e)=>setForm({...form, email:e.target.value})} />
        <input type="password" className="border p-2 w-full mb-2"
          onChange={(e)=>setForm({...form, password:e.target.value})} />
        <button onClick={handleSubmit} className="bg-blue-500 text-white w-full py-2">
          Login
        </button>
      </div>
    </div>
  );
}