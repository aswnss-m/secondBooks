import React from 'react';
import SearchHero from '../../Components/Hero/SearchHero';
import SearchBar from '../../Components/SearchBar/SearchBar';
import PageBreaker from '../../Components/PageBreaker/PageBreaker';
import SearchResults from '../../Components/SearchResults/SearchResults';
import {useState, useEffect} from 'react';
import axios from 'axios'

function Search() {
    const [btechValue, setBtechValue] = useState('');
    const [semValue, setSemValue] = useState('');
    const [priceRange, setPriceRange] = useState(false);
    const [bookName, setBookName] = useState('');
    const [courseCode, setCourseCode] = useState('');
    const [showFilter, setShowFilter] = useState(false);
    const [allBook, setAllBooks] = useState([]);

useEffect(() => {
  axios.get('http://localhost:5000/books')
    .then(res => {
      setAllBooks(res.data);
    })
    .catch(err => {
      console.log("Error: ", err);
    });
},[]);

    const handleBtechChange = (event) => {
        setBtechValue(event.target.value);
    };

    const handleSemChange = (event) => {
        setSemValue(event.target.value);
    };

    const handlePriceChange = (event) => {
        setPriceRange(parseInt(event.target.value));
    };

    const handleBookName = (event) => {
        setBookName(event.target.value);
    };

    const handleCourseCode = (event) => {
        setCourseCode(event.target.value);
    };

    const handleFilterShow = () => {
        console.log(!showFilter);
        setShowFilter(!showFilter);
    };
    const handleSubmit = () => {
        const filter = {
            'title': bookName,
            'courseCode': courseCode,
            'semester': semValue,
            'minPrice': 0,
            'maxPrice': priceRange,
            'course': btechValue
        }
        axios.post('http://localhost:5000/books/search', filter)
        .then(res => {
          console.log(res.data);
          setAllBooks(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
    return (
        <div>
            <SearchHero/>
            <SearchBar filterShow={handleFilterShow}
                handleBookName={handleBookName}
                handleCourseCode={handleCourseCode}
                handleSubmit={handleSubmit}/>
            <PageBreaker title=""/>
            <SearchResults showFilter={showFilter}
                handleBtechChange={handleBtechChange}
                handleSemChange={handleSemChange}
                handlePriceChange={handlePriceChange}
                btechValue={btechValue}
                semValue={semValue}
                priceRange={priceRange}
                handleSubmit={handleSubmit}
                allBook={allBook}/>
        </div>
    );
}

export default Search;
