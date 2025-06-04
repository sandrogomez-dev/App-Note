import { NoteProvider } from "./context/NoteContext";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import "./App.css";

function App() {
  return (
    <NoteProvider>
      <div className="app">
        <h1>Mis Notas</h1>
        <NoteForm />
        <NoteList />
      </div>
    </NoteProvider>
  );
}

export default App;
