import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  function onAdd(note) {
    setNotes((prevous) => {
      return [...prevous, note];
    });
  }
  function Delete(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => index !== id);
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={onAdd} />
      {notes.map((not, index) => {
        return (
          <Note
            title={not.title}
            content={not.content}
            id={index}
            onDelete={() => Delete(index)}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
