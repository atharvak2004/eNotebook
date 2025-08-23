import React from "react";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto py-20 px-6 text-center">
      <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-violet-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
        Welcome to eNotebook
      </h1>
      <p className="text-gray-600 text-lg mb-8">
        Your personal space to jot down ideas, organize tasks, and keep your
        notes safe — accessible anytime, on any device.
      </p>
      <div className="grid md:grid-cols-3 gap-8 text-left mt-24">
        <div className="bg-white shadow p-6 rounded-lg hover:shadow-md transition">
          <h2 className="text-xl font-semibold text-violet-600 mb-2">
            Easy to Use
          </h2>
          <p className="text-gray-600">
            Write notes in seconds with a clean and distraction-free editor. No
            clutter, just you and your thoughts.
          </p>
        </div>

        <div className="bg-white shadow p-6 rounded-lg hover:shadow-md transition">
          <h2 className="text-xl font-semibold text-violet-600 mb-2">
            Secure & Private
          </h2>
          <p className="text-gray-600">
            Your notes are stored securely and only you have access. Privacy is
            our top priority.
          </p>
        </div>

        <div className="bg-white shadow p-6 rounded-lg hover:shadow-md transition">
          <h2 className="text-xl font-semibold text-violet-600 mb-2">
            Access Anywhere
          </h2>
          <p className="text-gray-600">
            Whether you're on your laptop, tablet, or phone, eNotebook keeps
            your notes synced and ready.
          </p>
        </div>
      </div>
      <div className="mt-24">
        <p className="text-gray-700 text-lg mb-10">
          Start organizing your ideas today.  
          Sign up for free and see how easy it is to keep everything in one
          place.
        </p>
        <a href="/signup" className="px-6 py-3 bg-violet-600 text-white rounded-lg shadow hover:bg-violet-700 transition">
          Get Started
        </a>
      </div>
    </div>
  );
}
