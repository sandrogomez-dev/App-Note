import { useContext } from "react";
import { NoteContext } from "../context/NoteContext";

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useContext(NoteContext);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="🔍 Buscar notas..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      {searchTerm && (
        <button 
          onClick={() => setSearchTerm("")}
          className="clear-search"
          title="Limpiar búsqueda"
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default SearchBar; 