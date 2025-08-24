import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import api from "../api/axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";

export default function AuthForm() {
  const [isSignup, setIsSignup] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();
  const { login } = useAuth(); // use AuthContext

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignup) {
        // Signup
        await api.post("/auth/signup", form);
        toast.success("Signup successful! Logging in...");
        // Automatically log in after signup
        const res = await api.post("/auth/login", {
          email: form.email,
          password: form.password,
        });
        login(res.data); // set user and redirect
        navigate("/notes");
      } else {
        // Login
        const res = await api.post("/auth/login", form);
        login(res.data); // set user and redirect
        toast.success(res.data.message || "Login successful!");
        navigate("/notes");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Request failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500">
      <div className="bg-white shadow-xl rounded-2xl w-[380px] overflow-hidden relative px-4">
        <div className="relative flex border border-gray-300 rounded-xl mx-6 mt-8 mb-4 overflow-hidden">
          <button
            className={`relative z-10 w-1/2 py-2 text-sm font-semibold transition-all duration-500 ${
              !isSignup ? "text-white" : "text-gray-800"
            }`}
            onClick={() => setIsSignup(false)}
          >
            Login
          </button>
          <button
            className={`relative z-10 w-1/2 py-2 text-sm font-semibold transition-all duration-500 ${
              isSignup ? "text-white" : "text-gray-800"
            }`}
            onClick={() => setIsSignup(true)}
          >
            Signup
          </button>

          <span
            className={`absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 rounded-xl transition-all duration-500 z-0 ${
              isSignup ? "translate-x-full" : "translate-x-0"
            }`}
          />
        </div>

        <div className="relative min-h-[380px] px-6 pb-8">
          <AnimatePresence mode="wait">
            {!isSignup ? (
              <motion.form
                key="login"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                className="absolute top-0 left-0 w-full"
                onSubmit={handleSubmit}
              >
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    value={form.password}
                    onChange={(e) =>
                      setForm({ ...form, password: e.target.value })
                    }
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="text-right mb-4">
                  <a href="#" className="text-sm text-blue-600 hover:underline">
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 hover:opacity-90 transition"
                >
                  Login
                </button>
                <p className="text-center mt-6 text-sm">
                  Not a member?{" "}
                  <button
                    type="button"
                    onClick={() => setIsSignup(true)}
                    className="text-blue-600 hover:underline"
                  >
                    Signup now
                  </button>
                </p>
              </motion.form>
            ) : (
              <motion.form
                key="signup"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="absolute top-0 left-0 w-full"
                onSubmit={handleSubmit}
              >
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    value={form.password}
                    onChange={(e) =>
                      setForm({ ...form, password: e.target.value })
                    }
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 hover:opacity-90 transition"
                >
                  Signup
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
