import React from "react";
import "./Following.scss";

function Following({ user }) {
  return (
    <div className="rightbarFollowing">
      <img src={user.profilePic} alt="" className="rightbarFollowingImg" />
      <span className="rightbarFollowingName">{user.username}</span>
    </div>
  );
}

export default Following;
