import React from 'react'
import Hero from '../Components/Hero/Hero'
import "./Home.css"
import PageBreaker from '../Components/PageBreaker/PageBreaker'
import Card from '../Components/Card/Card';
import About from '../Components/About/About';

function Home() {
    const cardData = [
        {
          image: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg',
          title: 'This is my book title',
          price: '$10',
          coursecode: 'CSE101.',
          semester: 'S1',
          course: 'ECE',
        },
        {
          image: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg',
          title: 'This is my book title 2',
          price: '$20',
          coursecode: 'ENG202.',
          semester: 'S2',
          course: 'ECE',
        },
        {
          image: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg',
          title: 'This is my book title 2',
          price: '$20',
          coursecode: 'ENG202.',
          semester: 'S2',
          course: 'ECE',
        },
        {
          image: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg',
          title: 'This is my book title 2',
          price: '$20',
          coursecode: 'ENG202.',
          semester: 'S2',
          course: 'ECE',
        },
        {
          image: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg',
          title: 'This is my book title 2',
          price: '$20',
          coursecode: 'ENG202.',
          semester: 'S2',
          course: 'ECE',
        },
        {
          image: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg',
          title: 'This is my book title 2',
          price: '$20',
          coursecode: 'ENG202.',
          semester: 'S2',
          course: 'ECE',
        },
        // Add more card data objects as needed
      ];
  return (
    <div>
      <Hero />
      <PageBreaker title={'Recent Uploads'} />
      <div className="recentUploads">
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
      <PageBreaker title={'About'} />
      <About />
    </div>
  )
}

export default Home
