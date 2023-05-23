import React from 'react'
import "./About.css"

function About() {
  return (
    <div className='aboutContainer' id='about'>
      <div className="aboutLeft">
        <h1 className='aboutText opacity50'>2ndBooks</h1>
        <h1 className='aboutText aboutTextMid'>2ndBooks</h1>
        <h1 className='aboutText opacity50'>2ndBooks</h1>
      </div>
      <div className="aboutRight">
       <p>
       We are dedicated to providing a seamless platform for buying and selling books. Whether you're a student looking for affordable textbooks or a book enthusiast searching for hidden gems, we've got you covered.

Our mission is to connect book buyers and sellers in a convenient and user-friendly manner. We understand the importance of affordable education and believe that everyone should have access to quality learning resources. That's why we strive to create a community where students can easily find and purchase textbooks at reasonable prices.
       </p>
      </div>
    </div>
  )
}

export default About
