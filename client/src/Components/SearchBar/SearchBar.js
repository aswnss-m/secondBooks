import React from 'react';
import "./SearchBar.css";

function SearchBar({ filterShow, handleBookName, handleCourseCode,handleSubmit }) {
  return (
    <div className='searchBarContainer'>
      <div className="searchBarInputsContainer">
        <input
          type="text"
          name="bookName"
          id="bookName"
          placeholder='Name of Book'
          className='searchBarInputs'
          onChange={handleBookName}
        />
        <input
          type="text"
          name="subjectName"
          id="subjectName"
          placeholder="Subject Code"
          className='searchBarInputs'
          onChange={handleCourseCode}
        />
      </div>
      <div className="searchBarButtonsContainer">
        <button className='searchBarButtons' onClick={filterShow}>
          Filter
        </button>
        <button className='searchBarButtons' onClick={handleSubmit}>
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
