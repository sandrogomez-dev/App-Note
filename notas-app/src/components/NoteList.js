import { useContext } from "react";
import { NoteContext } from "../context/NoteContext";
import Note from "./Note";

const NoteList = () => {
  const { notes, filteredNotes, searchTerm } = useContext(NoteContext);

  const displayNotes = filteredNotes;
  const totalNotes = notes.length;
  const foundNotes = filteredNotes.length;

  return (
    <div className="note-list">
      {totalNotes === 0 ? (
        <p>No hay notas aún. ¡Agrega una!</p>
      ) : (
        <>
          {searchTerm && (
            <p className="search-results">
              {foundNotes === 0 
                ? `No se encontraron notas con "${searchTerm}"` 
                : `${foundNotes} de ${totalNotes} notas encontradas`
              }
            </p>
          )}
          {displayNotes.length === 0 && searchTerm ? (
            <p>Intenta con otros términos de búsqueda.</p>
          ) : (
            displayNotes.map((note) => <Note key={note.id} note={note} />)
          )}
        </>
      )}
    </div>
  );
};

export default NoteList;
