import React from 'react'
import "./SearchBar.css"

function SearchBar({filterShow}) {
  return (
    <div className='searchBarContainer'>
        <div className="searchBarInputsContainer">
            <input type="text" name="bookName" id="bookName" placeholder='Name of Book'className='searchBarInputs'/>
            <input type="text" name="subjectName" id="subjectName" placeholder='Subject' className='searchBarInputs'/>
        </div>
        <div className="searchBarButtonsContainer">
            <button className='searchBarButtons' onClick={filterShow}>
                Filter
            </button>
            <button className='searchBarButtons'>
                Search
            </button>
        </div>
    </div>
  )
}

export default SearchBar
