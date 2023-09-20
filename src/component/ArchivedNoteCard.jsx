import React from "react";

function ArchivedNoteCard({ title, restoreNote, id }) {
  return (
    <div className="archived-note-card">
      <div className="archived-note-title">
        <h3>{title}</h3>
      </div>
      <button className="restore-button" onClick={() => restoreNote(id)}>
        Restore
      </button>
    </div>
  );
}

export default ArchivedNoteCard;
