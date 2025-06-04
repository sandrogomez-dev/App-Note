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

  const updateNote = (id, updatedNote) => {
    setNotes(notes.map((note) => 
      note.id === id ? { ...note, ...updatedNote } : note
    ));
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, updateNote }}>
      {children}
    </NoteContext.Provider>
  );
};
