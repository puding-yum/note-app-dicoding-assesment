import React from "react";
import ArchivedNoteCard from "./ArchivedNoteCard";
import EmptyNotes from "./EmptyNotes";

function ArchivedNotes({ notes, restoreNote }) {
  const archivedNotes = notes.filter((note) => note.archived);

  if (archivedNotes.length === 0) {
    return <EmptyNotes message="archived notes empty" />;
  }

  return (
    <div className="archived-notes">
      {archivedNotes.map((note) => {
        return (
          <ArchivedNoteCard
            key={note.id}
            id={note.id}
            title={note.title}
            restoreNote={restoreNote}
          />
        );
      })}
    </div>
  );
}

export default ArchivedNotes;
