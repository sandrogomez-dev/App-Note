import { createContext, useState } from "react";

export const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, { id: Date.now(), ...note }]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote }}>
      {children}
    </NoteContext.Provider>
  );
};
