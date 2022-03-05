import React from "react";
import Post from "../Post/Post";
import Shared from "../Shared/Shared";
import "./Wall.scss";
function Wall() {
  return (
    <div className="feed">
      <Shared />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Wall;
