import React from "react";
import EmptyNotes from "./EmptyNotes";
import NoteCard from "./NoteCard";

function NoteList({ notes, searchWord, deleteNote, archiveNote }) {
  const unArchivedNotes = notes.filter((note) => !note.archived);

  if (unArchivedNotes.length === 0) {
    return <EmptyNotes message="notes empty" />;
  }

  return (
    <div className="note-list">
      {unArchivedNotes.map((note) => {
        if (searchWord !== "") {
          if (note.title.toLowerCase().includes(searchWord.toLowerCase())) {
            return (
              <NoteCard
                key={note.id}
                {...note}
                deleteNote={deleteNote}
                archiveNote={archiveNote}
              />
            );
          }
        } else {
          return (
            <NoteCard
              key={note.id}
              {...note}
              deleteNote={deleteNote}
              archiveNote={archiveNote}
            />
          );
        }
      })}
    </div>
  );
}

export default NoteList;
