import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../api/axios";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await api.post("/auth/logout"); 
      setUser(null);    
      navigate("/login");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <nav className="bg-white shadow border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-violet-600">
          eNotebook
        </Link>
        <button
          className="md:hidden text-gray-700 hover:text-violet-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        <div className="hidden md:flex md:items-center md:gap-8">
          <div className="flex gap-8 text-lg font-medium">
            <Link to="/notes" className="text-gray-700 hover:text-violet-600 transition">
              My Notes
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-violet-600 transition">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-violet-600 transition">
              Contact
            </Link>
          </div>
          {user ? (
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg shadow-md transition"
            >
              Logout
            </button>
          ) : (
            <div className="flex gap-4">
              <Link to="/login" className="text-gray-700 hover:text-violet-600 transition">
                Login
              </Link>
              <Link to="/signup" className="text-gray-700 hover:text-violet-600 transition">
                Signup
              </Link>
            </div>
          )}
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3 bg-white border-b border-gray-200">
          <Link to="/notes" className="text-gray-700 hover:text-violet-600 transition" onClick={() => setIsOpen(false)}>
            My Notes
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-violet-600 transition" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-violet-600 transition" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          {user ? (
            <button
              onClick={() => { handleLogout(); setIsOpen(false); }}
              className="px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg shadow-md transition"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="text-gray-700 hover:text-violet-600 transition" onClick={() => setIsOpen(false)}>
                Login
              </Link>
              <Link to="/signup" className="text-gray-700 hover:text-violet-600 transition" onClick={() => setIsOpen(false)}>
                Signup
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
