import { useContext, useState } from "react";
import { NoteContext } from "../context/NoteContext";

const Note = ({ note }) => {
  const { deleteNote, updateNote } = useContext(NoteContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(note.title);
  const [editContent, setEditContent] = useState(note.content);

  const handleUpdate = () => {
    if (!editTitle.trim()) return;
    updateNote(note.id, { title: editTitle, content: editContent });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditTitle(note.title);
    setEditContent(note.content);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="note editing">
        <input
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          className="note-input"
        />
        <textarea
          value={editContent}
          onChange={(e) => setEditContent(e.target.value)}
          className="note-textarea"
        />
        <div className="note-actions">
          <button onClick={handleUpdate} className="save-button">
            Guardar
          </button>
          <button onClick={handleCancel} className="cancel-button">
            Cancelar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="note">
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <div className="note-actions">
        <button onClick={() => setIsEditing(true)} className="edit-button">
          Editar
        </button>
        <button onClick={() => deleteNote(note.id)} className="delete-button">
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Note;
