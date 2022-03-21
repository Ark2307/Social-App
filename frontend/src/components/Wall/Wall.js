import React, { useContext, useEffect, useState } from "react";
import Shared from "../Shared/Shared";
import Post from "../Post/Post";
import axios from "axios";

import "./Wall.scss";
import { AuthContext } from "../../context/AuthContext";

function Wall({ username }) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("post/profile/" + username)
        : await axios.get("post/timeline/" + user._id);
      //console.log(res.data);
      setPosts(res.data.responseData);
    };
    fetchPosts();
  }, [username, user._id]);

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
