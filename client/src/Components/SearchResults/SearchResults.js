import React, { useState } from 'react';
import Card from '../Card/Card';
import './SearchResults.css';

function SearchResults({showfilter=false}) {
  const [showBtech, setShowBtech] = useState(false);
  const [showSem, setShowSem] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  const [btechValue, setBtechValue] = useState('');
  const [semValue, setSemValue] = useState('');
  const [priceRange, setPriceRange] = useState(false);

  const handleBtechChange = (event) => {
    setBtechValue(event.target.value);
  };

  const handleSemChange = (event) => {
    setSemValue(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPriceRange(parseInt(event.target.value));
  };
    const cardData = [
        {
            image: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg',
            title: 'This is my book title',
            price: '$10',
            coursecode: 'CSE101.',
            semester: 'S1',
            course: 'ECE'
        },
        {
            image: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg',
            title: 'This is my book title 2',
            price: '$20',
            coursecode: 'ENG202.',
            semester: 'S2',
            course: 'ECE'
        },
        {
            image: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg',
            title: 'This is my book title 2',
            price: '$20',
            coursecode: 'ENG202.',
            semester: 'S2',
            course: 'ECE'
        },
        {
            image: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg',
            title: 'This is my book title 2',
            price: '$20',
            coursecode: 'ENG202.',
            semester: 'S2',
            course: 'ECE'
        }, {
            image: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg',
            title: 'This is my book title 2',
            price: '$20',
            coursecode: 'ENG202.',
            semester: 'S2',
            course: 'ECE'
        }, {
            image: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg',
            title: 'This is my book title 2',
            price: '$20',
            coursecode: 'ENG202.',
            semester: 'S2',
            course: 'ECE'
        },
        // Add more card data objects as needed
    ];
    return (
      <div className="searchAndFilterContainer">
        {showfilter && (<div className="filterContainer">
          <div className="filterGroups">
            <span className="filterHeading">
              <h5>Btech {btechValue && `(${btechValue})`}</h5>
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
            {showBtech === true && (
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
                    <span className='filterHeading'>
                        <h5>Semester {semValue && `(${semValue})`}</h5>
                        <span className='material-symbols-outlined'
                            style={
                                {color: 'var(--primary-color)'}
                            }
                            onClick={
                                () => {
                                    setShowBtech(false)
                                    setShowPrice(false)
                                    setShowSem(!showSem)
                                }
                        }>add</span>
                    </span>
                    {
                    showSem === true && (
                        <>
                            <input type="text" name="" id="" list="courseOptions" autoComplete="off" className='filterInput' onChange={handleSemChange}/>
                            <datalist id="courseOptions">
                                <option value="S1"/>
                                <option value="S2"/>
                                <option value="S3"/>
                                <option value="S4"/>
                                <option value="S5"/>
                                <option value="S6"/>
                                <option value="S7"/>
                                <option value="S8"/>
                            </datalist>
                        </>
                    )
                } </div>
                <div className="filterGroups">
                    <span className='filterHeading'>
                        <h5>Price {priceRange && `(${priceRange}+)`}</h5>
                        <span className='material-symbols-outlined'
                            style={
                                {color: 'var(--primary-color)'}
                            }
                            onClick={
                                () => {
                                    setShowBtech(false)
                                    setShowPrice(!showPrice)
                                    setShowSem(false)
                                }
                        }>add</span>
                    </span>
                    {
                    showPrice === true && (
                        <>
                            <input type="range" name="" id="" min="100" max="2000" step="100"
                                value={priceRange}
                                onChange={handlePriceChange}
                                className="filterInput"/>
                        </>
                    )
                } </div>
                <button className='filterApplyButton'>Apply</button>
            </div>)}
            <div className='searchResultsContainer'>
                {
                cardData.map((card, index) => (
                    <Card key={index}
                        image={
                            card.image
                        }
                        title={
                            card.title
                        }
                        price={
                            card.price
                        }
                        coursecode={
                            card.coursecode
                        }
                        semester={
                            card.semester
                        }
                        course={
                            card.course
                        }/>
                ))
            } </div>
        </div>
    )
}

export default SearchResults