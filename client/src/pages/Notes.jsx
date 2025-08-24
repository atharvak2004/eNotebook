import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import api from "../api/axios";
import toast from "react-hot-toast";
import NoteCard from "../components/NoteCard";
import NoteForm from "../components/NoteForm";
import NoteExpanded from "../components/NoteExpanded";

export default function Notes() {
  const { user } = useAuth();
  const [notes, setNotes] = useState([]);
  const [form, setForm] = useState({ title: "", content: "" });
  const [selectedNote, setSelectedNote] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const fetchNotes = async () => {
    try {
      const res = await api.get("/notes");
      setNotes(res.data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to load notes");
    }
  };

  useEffect(() => {
    if (user) fetchNotes();
  }, [user]);

  if (!user) {
    return (
      <div className="text-center py-20">
        <p>Please login to view notes.</p>
      </div>
    );
  }


  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await api.post("/notes", form);
      setForm({ title: "", content: "" });
      setShowForm(false);
      fetchNotes();
      toast.success("Note added");
    } catch (err) {
      toast.error("Failed to add note");
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/notes/${selectedNote._id}`, {
        title: selectedNote.title,
        content: selectedNote.content,
      });
      fetchNotes();
      setIsEditing(false);
      toast.success("Note updated");
    } catch (err) {
      toast.error("Failed to update note");
    }
  };

  const handleDelete = async () => {
    try {
      await api.delete(`/notes/${selectedNote._id}`);
      fetchNotes();
      setSelectedNote(null);
      toast.success("Note deleted");
    } catch (err) {
      toast.error("Failed to delete note");
    }
  };

  if (!user) {
    return (
      <div className="max-w-2xl mx-auto py-16 text-center">
        <h1 className="text-3xl font-bold text-violet-600 mb-4">My Notes</h1>
        <p className="text-gray-600 text-lg">
          Please{" "}
          <a href="/login" className="text-violet-600 font-medium hover:underline">
            login
          </a>{" "}
          or{" "}
          <a href="/signup" className="text-violet-600 font-medium hover:underline">
            signup
          </a>{" "}
          to create and view your notes.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-violet-600 mb-6">My Notes</h1>

      {!showForm && !selectedNote && (
        <button
          onClick={() => setShowForm(true)}
          className="mb-6 px-5 py-2 bg-violet-600 text-white rounded-lg shadow-md hover:bg-violet-700 transition"
        >
          + Add Note
        </button>
      )}

      {showForm && (
        <NoteForm
          form={form}
          setForm={setForm}
          onSubmit={handleAdd}
          onCancel={() => setShowForm(false)}
        />
      )}

      {selectedNote && !isEditing && (
        <NoteExpanded
          note={selectedNote}
          onEdit={() => setIsEditing(true)}
          onDelete={handleDelete}
          onClose={() => setSelectedNote(null)}
        />
      )}

      {selectedNote && isEditing && (
        <NoteForm
          form={selectedNote}
          setForm={setSelectedNote}
          onSubmit={handleUpdate}
          onCancel={() => setIsEditing(false)}
          isEditing
        />
      )}

      {!selectedNote && (
        <div className="grid gap-6 md:grid-cols-2">
          {notes.length > 0 ? (
            notes.map((note) => (
              <NoteCard
                key={note._id}
                note={note}
                onClick={() => setSelectedNote(note)}
              />
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-2">
              No notes yet. Click{" "}
              <span className="font-medium">“+ Add Note”</span> to create one!
            </p>
          )}
        </div>
      )}
    </div>
  );
}
