import React from 'react';
import SearchHero from '../../Components/Hero/SearchHero';
import SearchBar from '../../Components/SearchBar/SearchBar';
import PageBreaker from '../../Components/PageBreaker/PageBreaker';
import SearchResults from '../../Components/SearchResults/SearchResults';
import {useState} from 'react';

function Search() {
    const [btechValue, setBtechValue] = useState('');
    const [semValue, setSemValue] = useState('');
    const [priceRange, setPriceRange] = useState(false);
    const [bookName, setBookName] = useState('');
    const [bookSubject, setBookSubject] = useState('');
    const [showFilter, setShowFilter] = useState(false);

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

    const handleBookSubject = (event) => {
        setBookSubject(event.target.value);
    };

    const handleFilterShow = () => {
        console.log(!showFilter);
        setShowFilter(!showFilter);
    };
    const handleSubmit = () => {
        console.log({
            'name': bookName,
            "subject": bookSubject,
            "Semester": semValue,
            "Btech : ": btechValue,
            "price ": priceRange
        });
    }
    return (
        <div>
            <SearchHero/>
            <SearchBar filterShow={handleFilterShow}
                handleBookName={handleBookName}
                handleBookSubject={handleBookSubject}
                handleSubmit={handleSubmit}/>
            <PageBreaker title=""/>
            <SearchResults showFilter={showFilter}
                handleBtechChange={handleBtechChange}
                handleSemChange={handleSemChange}
                handlePriceChange={handlePriceChange}
                btechValue={btechValue}
                semValue={semValue}
                priceRange={priceRange}
                handleSubmit={handleSubmit}/>
        </div>
    );
}

export default Search;
