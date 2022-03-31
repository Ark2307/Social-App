import React from "react";
import "./Following.scss";
import { Link } from "react-router-dom";

function Following({ user }) {
  return (
    <Link to={"/" + user.username} style={{ textDecoration: "none" }}>
      <div className="rightbarFollowing">
        <img src={user.profilePic} alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">{user.username}</span>
      </div>
    </Link>
  );
}

export default Following;
