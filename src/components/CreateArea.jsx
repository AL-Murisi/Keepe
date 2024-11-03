import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });
  // const [holdNot, setHoldNot] = useState([]);

  function handleChange(e) {
    const { name, value } = e.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  function handleAdd(event) {
    event.preventDefault();
    props.onAdd(note);
    // Add the note to holdNot array
    // setHoldNot((previousNotes) => [...previousNotes, note]);

    // // Clear the input fields
    setNote({ title: "", content: "" });
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button onClick={handleAdd}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
