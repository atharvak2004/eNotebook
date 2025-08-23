import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import toast from "react-hot-toast";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", form);
      alert(res.data.message);
      navigate("/notes");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-80">
        <h1 className="text-2xl font-bold text-violet-600 mb-4">Login</h1>
        <input type="email" placeholder="Email" className="w-full border border-gray-300 rounded p-2 mb-2" onChange={(e) => setForm({ ...form, email: e.target.value })}/>
        <input type="password" placeholder="Password" className="w-full border border-gray-300 rounded p-2 mb-4" onChange={(e) => setForm({ ...form, password: e.target.value })}/>
        <button className="w-full py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg">
          Login
        </button>
      </form>
    </div>
  );
}
