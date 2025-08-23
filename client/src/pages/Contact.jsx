import React from "react";

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold text-violet-600 mb-6">
        Contact the Creator of eNotebook
      </h1>

      <p className="text-gray-700 leading-relaxed mb-4">
        <span className="font-semibold">Atharva Kadam</span> |{" "}
        <a href="mailto:atharvakadam631@gmail.com" className="text-violet-600 hover:underline">
          atharvakadam631@gmail.com
        </a>
      </p>

      <a href="https://www.linkedin.com/in/atharva-kadam-365170326" target="_blank" rel="noopener noreferrer" className="inline-block p-2 bg-violet-600 text-white rounded-lg shadow hover:bg-violet-700 transition">
        Connect on LinkedIn
      </a>
    </div>
  );
}
