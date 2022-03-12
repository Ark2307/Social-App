import React from "react";
import "./OnlineFriend.scss";

function OnlineFriend({ user }) {
  return (
    <li className="onlineFriend">
      <div className="friendContainer">
        <img className="onlineProfile" src={user.profilePic} alt="" />
        <span className="online" />
      </div>
      <span className="friendUsername">{user.username}</span>
    </li>
  );
}

export default OnlineFriend;
