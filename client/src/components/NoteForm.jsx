import React from "react";

export default function NoteForm({ form, setForm, onSubmit, onCancel, isEditing }) {
  return (
    <form
      onSubmit={onSubmit}
      className="mb-6 bg-white p-6 rounded-xl shadow-lg space-y-3"
    >
      <h2 className="text-xl font-semibold text-violet-600">
        {isEditing ? "Edit Note" : "New Note"}
      </h2>
      <input type="text" placeholder="Enter title..." value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-violet-500 outline-none"/>
      <textarea placeholder="Write your note..." value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} rows={4} className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-violet-500 outline-none"/>
      <div className="flex gap-3">
        <button type="submit" className="px-5 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg shadow-md transition">
          {isEditing ? "Save" : "Add Note"}
        </button>
        <button type="button" onClick={onCancel} className="px-5 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition">
          Cancel
        </button>
      </div>
    </form>
  );
}
