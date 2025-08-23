import React from "react";

export default function NoteExpanded({ note, onEdit, onDelete, onClose }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
      <h2 className="text-2xl font-semibold text-gray-800">{note.title}</h2>
      
      <p className="text-gray-600 mt-4 whitespace-pre-line break-words">
        {note.content}
      </p>

      <div className="flex gap-3 mt-6">
        <button onClick={onEdit} className="px-5 py-2 bg-violet-600 text-white rounded-lg shadow-md hover:bg-violet-700 transition">
          Edit
        </button>
        <button onClick={onDelete} className="px-5 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition">
          Delete
        </button>
        <button onClick={onClose} className="px-5 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition">
          Close
        </button>
      </div>
    </div>
  );
}
