import { useContext } from "react";
import { NoteContext } from "../context/NoteContext";

const Note = ({ note }) => {
  const { deleteNote } = useContext(NoteContext);

  return (
    <div className="note">
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <button onClick={() => deleteNote(note.id)} className="delete-button">
        Eliminar
      </button>
    </div>
  );
};

export default Note;
