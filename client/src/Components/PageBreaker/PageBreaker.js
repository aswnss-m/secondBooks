import React from 'react'
import "./PageBreaker.css"

function PageBreaker({title}) {
  return (
    <div className='pageBreaker text-bold'>
      <p>{title}</p>
      <span></span>
    </div>
  )
}

export default PageBreaker
