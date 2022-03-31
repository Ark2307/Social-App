import React, { useContext, useEffect, useState } from "react";
import Shared from "../Shared/Shared";
import Post from "../Post/Post";
import axios from "axios";

import "./Wall.scss";
import { AuthContext } from "../../context/AuthContext";

function Wall({ username }) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);
  console.log(username);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get(
            "http://localhost:8080/api/post/profile/".concat(username)
          )
        : await axios.get(
            "http://localhost:8080/api/post/timeline/".concat(user._id)
          );
      console.log(res.data);
      setPosts(
        res.data.responseData.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPosts();
  }, [username, user._id]);

  return (
    <div className="feed">
      {!user && username === user.username && <Shared />}
      {posts.map((index) => (
        <Post key={index._id} post={index} />
      ))}
    </div>
  );
}

export default Wall;
