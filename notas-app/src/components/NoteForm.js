import { useState, useContext } from "react";
import { NoteContext } from "../context/NoteContext";

const NoteForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addNote } = useContext(NoteContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    addNote({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="note-input"
      />
      <textarea
        placeholder="Contenido"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="note-textarea"
      />
      <button type="submit" className="note-button">
        Agregar Nota
      </button>
    </form>
  );
};

export default NoteForm;
