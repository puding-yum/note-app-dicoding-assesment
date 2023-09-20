import React from "react";
import { showFormattedDate } from "../data/notes";

function NoteCard({ title, body, id, deleteNote, archiveNote, createdAt }) {
  return (
    <div key={id} className="note-card">
      <h2>{title}</h2>
      <p>
        <i>Posted on: {showFormattedDate(createdAt)}</i>
      </p>
      <p className="note-body">{body}</p>
      <button onClick={() => deleteNote(id)}>Delete</button>
      <button onClick={() => archiveNote(id)}>Archive</button>
    </div>
  );
}

export default NoteCard;
