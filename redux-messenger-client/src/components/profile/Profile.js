import React from 'react'

const Profile = (props) => {
  return (
    <React.Fragment>
      <div className="profile-background">
        <div className="stripes stripe__1"></div>
        <div className="stripes stripe__2"></div>
        <div className="stripes stripe__3"></div>
      </div>
      <div className="profile">
        <div className="profile__image"></div>
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
