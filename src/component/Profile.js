import React from "react";
import './profile.css'

function Profile(props) {
  return (
    <div>
      <div className="profile">
          
        <div className="profile__pic">
          
          <img src={props.image} alt="" />
        

          <h2>{props.title}</h2>

          <div className="profile__detail">
            {props.detail}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
