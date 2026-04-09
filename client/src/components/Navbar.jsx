import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate=useNavigate()

  const handleLogout = () => {
    logout();            // clear user
    navigate("/login");  // 🔥 redirect
  };


  return (
    <nav className="bg-gray-900 text-white px-6 py-3 flex justify-between">
      <h1>AI Resume Builder</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        {user ? (
          <>
            
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>

        )}
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}