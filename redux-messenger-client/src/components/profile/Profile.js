import React from 'react'

const Profile = (props) => {
  return (
    <React.Fragment>
      <div className="profile-background">
        <div className="stripe__1"></div>
        <div className="stripe__2"></div>
        <div className="stripe__3"></div>
        <div className="stripe__4"></div>
      </div>
      <div className="profile">
        <div className="profile__image--container">
          <img 
            className="profile__image--image" 
            src="https://i.pinimg.com/originals/ae/c4/53/aec453161b2f33ffc6219d8a758307a9.jpg" 
            alt="profile" 
          />
          <div className="profile__image--default"></div>
          <div className="profile__camera--container">
            <img className="profile__camera" src="images/camera.png" alt="camera" />
          </div>
        </div>
        {props.editProfile ? <div className="profile__edit" onClick={props.handleClickEditProfile}>done</div> : <div className="profile__edit" onClick={props.handleClickEditProfile}>edit</div>}
        <div className="profile__info">
          <div className="profile__header">name</div>
          {props.editProfile ? <input className="profile__input"></input> : <div className="profile__content">info</div>}
        </div>
        <div className="profile__info">
          <div className="profile__header">birthday</div>
          {props.editProfile ? <input className="profile__input"></input> : <div className="profile__content">info</div>}
        </div>
        <div className="profile__info">
          <div className="profile__header">gender</div>
          {props.editProfile ? <input className="profile__input"></input> : <div className="profile__content">info</div>}
        </div>
        <div className="profile__info">
          <div className="profile__header">password</div>
          {props.editProfile ? <input className="profile__input"></input> : <div className="profile__content">info</div>}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Profile
