import React from "react";

export default function NoteCard({ note, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white shadow-md rounded-xl p-5 cursor-pointer hover:shadow-lg transition duration-300"
    >
      <h2 className="font-semibold text-xl text-gray-800 break-words">
        {note.title}
      </h2>
      <p className="text-gray-600 mt-2 text-sm line-clamp-3 break-words">
        {note.content}
      </p>
    </div>
  );
}   