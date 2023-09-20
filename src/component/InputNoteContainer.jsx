import React from "react";
import "../css/InputNoteContainer.css";
import InputNote from "./InputNote";

function InputContainer({ addNote }) {
  return (
    <div className="input-note-container">
      <h1 className="header-title">Add Note</h1>
      <InputNote addNote={addNote} />
    </div>
  );
}

export default InputContainer;
