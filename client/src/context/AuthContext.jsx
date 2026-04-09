import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // 🔥 LOAD USER ON REFRESH
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      // ⚡ normally yaha backend se user fetch karte hain
      // but abhi temporary fix:
      setUser({ name: "User" }); 
    }
  }, []);

  const login = (data) => {
    localStorage.setItem("token", data.token);
    setUser(data.user); // 🔥 important
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}