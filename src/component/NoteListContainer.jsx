import React from "react";
import SearchContainer from "./SearchContainer";
import "../css/NoteListContainer.css";
import NoteList from "./NoteList";

class NoteListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchWord: "",
    };

    this.onSearcWordChangeEventHandler =
      this.onSearcWordChangeEventHandler.bind(this);
  }

  onSearcWordChangeEventHandler(event) {
    this.setState({
      searchWord: event.target.value,
    });
  }

  render() {
    return (
      <div className="note-list-container">
        <h1 className="header-title">Notes</h1>
        <SearchContainer
          onKeywordChange={this.onSearcWordChangeEventHandler}
          searchWord={this.state.searchWord}
        />
        <NoteList
          notes={this.props.notes}
          deleteNote={this.props.deleteNote}
          archiveNote={this.props.archiveNote}
          searchWord={this.state.searchWord}
        />
      </div>
    );
  }
}

export default NoteListContainer;
