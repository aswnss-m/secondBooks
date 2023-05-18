import React from 'react'
import "./Profile.css"
function Profile() {
  return (
    <div className='profileContainer'>
      <div className="profileHeader">
        <div className="profilePicture">
            <img src="" alt="Profile" />
        </div>
        <div className="profileDetails">
            <p>"Profile Name"</p>
            <p>"Email"</p>
        </div>
      </div>
    </div>
  )
}

export default Profile
