import { useContext } from "react";
import { NoteContext } from "../context/NoteContext";
import Note from "./Note";

const NoteList = () => {
  const { notes } = useContext(NoteContext);

  return (
    <div className="note-list">
      {notes.length === 0 ? (
        <p>No hay notas aún. ¡Agrega una!</p>
      ) : (
        notes.map((note) => <Note key={note.id} note={note} />)
      )}
    </div>
  );
};

export default NoteList;
