import React from "react";
import { getInitialData } from "../data/notes";
import InputNoteContainer from "./InputNoteContainer";
import NoteListContainer from "./NoteListContainer";
import ArchivedNoteContainer from "./ArchivedNoteContainer";
import "../css/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    };

    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.archiveNote = this.archiveNote.bind(this);
    this.restoreNote = this.restoreNote.bind(this);
  }

  addNote({ title, body }) {
    const date = new Date().toISOString();

    const note = {
      id: date,
      title: title,
      body: body,
      archived: false,
      createdAt: date,
    };

    this.setState((prevState) => {
      return {
        notes: [...prevState.notes, note],
      };
    });
  }

  deleteNote(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);

    this.setState({
      notes,
    });
  }

  archiveNote(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        note.archived = true;
      }
      return note;
    });

    this.setState({ notes });
  }

  restoreNote(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        note.archived = false;
      }

      return note;
    });

    this.setState({ notes });
  }

  render() {
    return (
      <>
        <div className="column1">
          <InputNoteContainer addNote={this.addNote} />
          <ArchivedNoteContainer
            notes={this.state.notes}
            deleteNote={this.deleteNote}
            restoreNote={this.restoreNote}
          />
        </div>
        <div className="column2">
          <NoteListContainer
            notes={this.state.notes}
            searchWord={this.state.searchWord}
            deleteNote={this.deleteNote}
            archiveNote={this.archiveNote}
          />
        </div>
      </>
    );
  }
}

export default App;
