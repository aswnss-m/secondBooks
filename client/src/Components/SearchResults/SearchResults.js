
import React, { useState } from 'react';
import Card from '../Card/Card';
import './SearchResults.css';
function SearchResults({ showFilter, handleBtechChange, handleSemChange, handlePriceChange,btechValue,semValue,priceRange,handleSubmit, allBook}) {
  const [showPrice, setShowPrice] = useState(false);
  const [showBtech, setShowBtech] = useState(false);
  const [showSem, setShowSem] = useState(false);

  return (
    <div className="searchAndFilterContainer">
      {showFilter===true && (
        <div className="filterContainer">
          <div className="filterGroups">
            <span className="filterHeading">
              <h5>Btech {`(${btechValue})`}</h5>
              <span
                className="material-symbols-outlined"
                style={{ color: 'var(--primary-color)' }}
                onClick={() => {
                  setShowBtech(!showBtech);
                  setShowPrice(false);
                  setShowSem(false);
                }}
              >
                add
              </span>
            </span>
            {showBtech && (
              <>
                <input
                  type="text"
                  name=""
                  id=""
                  list="courseOptions"
                  autoComplete="off"
                  className="filterInput"
                  onChange={handleBtechChange}
                />
                <datalist id="courseOptions">
                  <option value="ECE" />
                  <option value="CSE" />
                  <option value="EEE" />
                  <option value="MECH" />
                  <option value="PROD" />
                  <option value="BT" />
                  <option value="AUTO" />
                  <option value="IT" />
                </datalist>
              </>
            )}
          </div>
          <div className="filterGroups">
            <span className="filterHeading">
              <h5>Semester {`(${semValue})`}</h5>
              <span
                className="material-symbols-outlined"
                style={{ color: 'var(--primary-color)' }}
                onClick={() => {
                  setShowBtech(false);
                  setShowPrice(false);
                  setShowSem(!showSem);
                }}
              >
                add
              </span>
            </span>
            {showSem && (
              <>
                <input
                  type="text"
                  name=""
                  id=""
                  list="courseOptions"
                  autoComplete="off"
                  className="filterInput"
                  onChange={handleSemChange}
                />
                <datalist id="courseOptions">
                  <option value="S1" />
                  <option value="S2" />
                  <option value="S3" />
                  <option value="S4" />
                  <option value="S5" />
                  <option value="S6" />
                  <option value="S7" />
                  <option value="S8" />
                </datalist>
              </>
            )}
          </div>
          <div className="filterGroups">
            <span className="filterHeading">
              <h5>Price {priceRange && `(${priceRange}+)`}</h5>
              <span
                className="material-symbols-outlined"
                style={{ color: 'var(--primary-color)' }}
                onClick={() => {
                  setShowBtech(false);
                  setShowPrice(!showPrice);
                  setShowSem(false);
                }}
              >
                add
              </span>
            </span>
            {showPrice && (
              <>
                <input
                  type="range"
                  name=""
                  id=""
                  min="100"
                  max="2000"
                  step="100"
                  value={priceRange}
                  onChange={handlePriceChange}
                  className="filterInput"
                />
              </>
            )}
          </div>
          <button className="filterApplyButton" onClick={handleSubmit}>Apply</button>
        </div>
      )}
      <div className="searchResultsContainer">
      {allBook.map((book, index) =>  (
          <Card
            key={index}
            image={`http://localhost:5000/books/cover/${book._id}`}
            title={book.title}
            price={book.price}
            coursecode={book.courseCode}
            semester={book.semester}
            course={book.course}
            _id={book._id}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchResults;

    function SearchFilter({btechValue, setShowBtech, showBtech, setShowPrice, setShowSem, handleBtechChange, semValue, showSem, handleSemChange, priceRange, showPrice, handlePriceChange, handleSubmit}) {
      return (<div className="filterContainer">
          <div className="filterGroups">
            <span className="filterHeading">
              <h5>Btech {`(${btechValue})`}</h5>
              <span className="material-symbols-outlined" style={{
        color: 'var(--primary-color)'
      }} onClick={() => {
        setShowBtech(!showBtech);
        setShowPrice(false);
        setShowSem(false);
      }}>
                add
              </span>
            </span>
            {showBtech && <>
                <input type="text" name="" id="" list="courseOptions" autoComplete="off" className="filterInput" onChange={handleBtechChange} />
                <datalist id="courseOptions">
                  <option value="ECE" />
                  <option value="CSE" />
                  <option value="EEE" />
                  <option value="MECH" />
                  <option value="PROD" />
                  <option value="BT" />
                  <option value="AUTO" />
                  <option value="IT" />
                </datalist>
              </>}
          </div>
          <div className="filterGroups">
            <span className="filterHeading">
              <h5>Semester {`(${semValue})`}</h5>
              <span className="material-symbols-outlined" style={{
        color: 'var(--primary-color)'
      }} onClick={() => {
        setShowBtech(false);
        setShowPrice(false);
        setShowSem(!showSem);
      }}>
                add
              </span>
            </span>
            {showSem && <>
                <input type="text" name="" id="" list="courseOptions" autoComplete="off" className="filterInput" onChange={handleSemChange} />
                <datalist id="courseOptions">
                  <option value="S1" />
                  <option value="S2" />
                  <option value="S3" />
                  <option value="S4" />
                  <option value="S5" />
                  <option value="S6" />
                  <option value="S7" />
                  <option value="S8" />
                </datalist>
              </>}
          </div>
          <div className="filterGroups">
            <span className="filterHeading">
              <h5>Price {priceRange && `(${priceRange}+)`}</h5>
              <span className="material-symbols-outlined" style={{
        color: 'var(--primary-color)'
      }} onClick={() => {
        setShowBtech(false);
        setShowPrice(!showPrice);
        setShowSem(false);
      }}>
                add
              </span>
            </span>
            {showPrice && <>
                <input type="range" name="" id="" min="100" max="2000" step="100" value={priceRange} onChange={handlePriceChange} className="filterInput" />
              </>}
          </div>
          <button className="filterApplyButton" onClick={handleSubmit}>Apply</button>
        </div>);
    }
  