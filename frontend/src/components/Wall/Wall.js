import React, { useEffect, useState } from "react";
import Shared from "../Shared/Shared";
import Post from "../Post/Post";
import axios from "axios";

import "./Wall.scss";

function Wall({ username }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("post/profile/" + username);
      //console.log(res.data);
      setPosts(res.data.responseData);
    };
    fetchPosts();
  }, [username]);

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
