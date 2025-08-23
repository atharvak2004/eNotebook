import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import toast from "react-hot-toast";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/auth/signup", form);
      toast.success("Signup successful! Please login.");
      navigate("/login");
    } catch (err) {
      toast.error(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-80">
        <h1 className="text-2xl font-bold text-violet-600 mb-4">Sign Up</h1>
        <input type="text" placeholder="Name" className="w-full border border-gray-300 rounded p-2 mb-2" onChange={(e) => setForm({ ...form, name: e.target.value })}/>
        <input type="email" placeholder="Email" className="w-full border border-gray-300 rounded p-2 mb-2" onChange={(e) => setForm({ ...form, email: e.target.value })}/>
        <input type="password" placeholder="Password" className="w-full border border-gray-300 rounded p-2 mb-4" onChange={(e) => setForm({ ...form, password: e.target.value })}/>
        <button className="w-full py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg">
          Create Account
        </button>
      </form>
    </div>
  );
}
