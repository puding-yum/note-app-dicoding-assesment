import React from "react";

function SearchContainer({ onKeywordChange, searchWord }) {
  return (
    <div className="note-searchbox">
      <input
        type="text"
        name="searchword"
        placeholder="Search notes here"
        onChange={onKeywordChange}
        value={searchWord}
      />
    </div>
  );
}

export default SearchContainer;
