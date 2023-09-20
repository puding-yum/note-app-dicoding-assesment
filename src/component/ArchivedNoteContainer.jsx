import React from "react";
import "../css/ArchivedNoteContainer.css";
import ArchivedNotes from "./ArchivedNotes";

function ArchiveContainer({ notes, deleteNote, restoreNote }) {
  return (
    <div className="archived-note-container">
      <h1 className="header-title">Archived Notes</h1>
      <ArchivedNotes
        notes={notes}
        deleteNote={deleteNote}
        restoreNote={restoreNote}
      />
    </div>
  );
}

export default ArchiveContainer;
