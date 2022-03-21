import React, { useContext, useEffect, useState } from "react";
import "./Post.scss";
import { FiMoreVertical } from "react-icons/fi";

import { Link } from "react-router-dom";
import axios from "axios";
import { format } from "timeago.js";
import { AuthContext } from "../../context/AuthContext";

function Post({ post }) {
  const [reacts, setReacts] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`users?userId=${post.userId}`);
      //console.log(res);
      setUser(res.data.responseData);
    };
    fetchUser();
  }, [post.userId]);

  const handleLike = () => {
    try {
      axios.put("/post/" + post._id + "/like", { userId: currentUser._id });
    } catch (error) {}

    setIsLiked(!isLiked);
    setReacts(isLiked ? reacts - 1 : reacts + 1);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postHeader">
          <div className="headerLeft">
            <Link to={`${user.username}`}>
              <img
                className="postOwnerPic"
                src={
                  user.profilePic ? PF + user.profilePic : PF + "noAvatar.png"
                }
                alt="profile"
              />
            </Link>
            <span className="postOwnerName">{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="headerRight">
            <FiMoreVertical className="iconOptions" />
          </div>
        </div>

        <div className="postCenter">
          <span className="postDescription">{post.desc}</span>
          <img className="postImage" src={PF + post.img} alt="post" />
        </div>

        <div className="postFooter">
          <div className="footerLeft">
            <img
              className="reactIcon"
              src={`${PF}like.jfif`}
              onClick={handleLike}
              alt="icon"
            />
            <span className="likeCounter">{reacts} people reacted on it</span>
          </div>
          <div className="footerRight">
            <span className="comment">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
