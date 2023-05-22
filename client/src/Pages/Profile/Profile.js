import React, { useEffect,useState } from 'react'
import PageBreaker from "../../Components/PageBreaker/PageBreaker"
import "./Profile.css"
import {Link} from 'react-router-dom'
import Card from "../../Components/Card/Card" 
function Profile() {
  const [userName,setUserName]  = useState('');
  const [email,setEmail] = useState('');
  const [books,setBooks] = useState([]);
  const handleDelete = () => {
    console.log("Delete Button Was Clicked")
  }
  const handleUpdate = ()=>{
    console.log("Update Clicked");
  }
  const details = JSON.parse(localStorage.getItem('user'));
  useEffect(()=>{
    setUserName(details.name);
    setEmail(details.email);
    setBooks(details.books);
  },[details])
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
    <div className='profileContainer'>
      <div className="profileHeader">
        <div className="profilePicture">
            <img src="https://unsplash.it/100" alt="Profile" />
        </div>
        <div className="profileDetails">
            <p className='boldText'>{userName}</p>
            <p>{email}</p>
            <Link to={'/AddBook'}><button className='greenButton'>Sell Book</button></Link>
        </div>
      </div>
      
      <PageBreaker title={'Books You are selling'}/>
      {books}
      <div className="profileCards">
      {cardData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            price={card.price}
            coursecode={card.coursecode}
            semester={card.semester}
            course={card.course}
            smallButton='Delete'
            largeButton='Update'
            handleSmallButton={handleDelete}
            handleLargeButton={handleUpdate}
          />
        ))}
      </div>
      <PageBreaker title={'Suggested Books'}/>
      <div className="profileCards">
      {cardData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            price={card.price}
            coursecode={card.coursecode}
            semester={card.semester}
            course={card.course}
           
          />
        ))}
      </div>
    </div>
  )
}

export default Profile
