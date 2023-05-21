import React from 'react';
import './Card.css';

const handleBuy = () => {
  console.log('Buy Button Clicked');
};

const handleCart = () => {
  console.log('Cart Button Clicked');
};

function Card({
  image,
  title,
  price,
  coursecode,
  semester,
  course,
  smallButton = 'Buy',
  largeButton = 'Add to Cart',
  handleSmallButton = handleBuy, // Set the default function reference
  handleLargeButton = handleCart, // Set the default function reference
}) {
  return (
    <div className="cardContainer">
      <span className="cardCourseCode">{coursecode.slice(0, 6)}..</span>
      <div className="card">
        <img src={image} alt={title} className="cardImage" />
        <div className="cardContent">
          <span className="cardSem cardSemester">{semester}</span>
          <span className="cardCourse">{course.slice(0, 3)}..</span>
          <p className="cardTitle">{title}</p>
          <p className="cardPrice">{price}</p>
          <button className="cardBuy" onClick={handleSmallButton}>
            {smallButton}
          </button>
          <button className="cardCart" onClick={handleLargeButton}>
            {largeButton}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
