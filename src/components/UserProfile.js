import React from 'react'

const UserProfile = () => {
  return (
    <div className="UserProfile">
      <div className="User">
        <div className="name">Maxim Shcherbak</div>
        <div className="image">
          <img src="https://avatars1.githubusercontent.com/u/23414987?s=460&v=4" />
        </div>
      </div>
      <div className="UserProfile-menu">
        <div className="UserProfileSwitch">
          <ul>
            <li>
              <div className="UserProfile-image">
                <img src="http://lorempixel.com/96/96" />
              </div>
              <div className="UserProfile-name">Jadesola</div>
            </li>
            <li>
              <div className="UserProfile-image">
                <img src="http://lorempixel.com/96/96" />
              </div>
              <div className="UserProfile-name">Kehinde</div>
            </li>
          </ul>
        </div>
        <div className="UserNavigation">
          <ul>
            <li>Your Account</li>
            <li>Help Center</li>
            <li>Sign Out</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
