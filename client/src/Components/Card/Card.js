import React from 'react'
import "./Card.css"

function Card({image,title,price,coursecode,semester,course,smallButton='Buy',largeButton="Add to Cart"}) {
  return (
    <div className="cardContainer">
        <span className="cardCourseCode">{coursecode}</span>
      <div className='card'>
        <img src={image} alt={title} className='cardImage' />
        <div className="cardContent">
          <span className="cardSem cardSemester">{semester}</span>
          <span className="cardCourse">{course}</span>
          <p className="cardTitle">{title}</p>
          <p className="cardPrice">{price}</p>
          <button className='cardBuy'>{smallButton}</button>
          <button className='cardCart'>{largeButton}</button>
        </div>
      </div>
    </div>
  )
}

export default Card
