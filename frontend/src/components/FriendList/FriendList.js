import React from "react";
import "./FriendList.scss";

function FriendList({ user }) {
  return (
    <li className="friendItem">
      <img className="friendProfile" src={user.profilePic} alt="profile" />
      <span className="friendName">{user.username}</span>
    </li>
  );
}

export default FriendList;
