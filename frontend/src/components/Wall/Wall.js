import React from "react";
import Post from "../Post/Post";
import Shared from "../Shared/Shared";
import { Posts } from "../../data/post";

import "./Wall.scss";

function Wall() {
  return (
    <div className="feed">
      <Shared />

      {Posts.map((index) => (
        <Post key={index.id} post={index} />
      ))}
    </div>
  );
}

export default Wall;
