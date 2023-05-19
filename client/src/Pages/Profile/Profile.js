import React from 'react'
import PageBreaker from "../../Components/PageBreaker/PageBreaker"
import "./Profile.css"
import Card from "../../Components/Card/Card" 
function Profile() {
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
            <p className='boldText'>"Profile Name"</p>
            <p>"Email"</p>
        </div>
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
