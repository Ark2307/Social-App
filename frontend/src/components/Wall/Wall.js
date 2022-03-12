import React, { useEffect, useState } from "react";
import Shared from "../Shared/Shared";
import Post from "../Post/Post";
import axios from "axios";
import { Posts } from "../../data/post";

import "./Wall.scss";

function Wall() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("post/timeline/6226cb74bf164afb1a17c432");
      //console.log(res.data.responseData);
      setPosts(res.data.responseData);
    };
    fetchPosts();
  }, []);

  return (
    <div className="feed">
      <Shared />
      {posts.map((index) => (
        <Post key={index._id} post={index} />
      ))}
    </div>
  );
}

export default Wall;
