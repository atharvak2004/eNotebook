import React from 'react'

export default function About() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold text-violet-600 mb-6">About eNotebook</h1>

      <p className="text-gray-700 leading-relaxed mb-4">
        <span className="font-semibold">eNotebook</span> is a simple and secure web application 
        that helps you save your notes online. Whether you're a student, professional, 
        or someone who just wants to stay organized, eNotebook gives you the tools to 
        manage your thoughts, tasks, and ideas — anytime, anywhere.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        You can create, edit, and manage your notes with ease. Your notes are 
        stored securely and can be accessed from any device, so you'll never 
        lose track of your important information again.
      </p>

      <p className="text-gray-700 leading-relaxed">
        Our goal is to provide a clean and distraction-free writing space, while 
        making sure your notes are always available and easy to manage.
      </p>
    </div>
  );
}
