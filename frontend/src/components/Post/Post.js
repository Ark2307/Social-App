import React, { useEffect, useState } from "react";
import "./Post.scss";
import { FiMoreVertical } from "react-icons/fi";
import axios from "axios";

function Post({ post }) {
  const [reacts, setReacts] = useState(post.reacts);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`users/${post.userId}`);
      console.log(res);
      setUser(res.data.responseData);
    };
    fetchUser();
  }, []);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setReacts(isLiked ? reacts - 1 : reacts + 1);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postHeader">
          <div className="headerLeft">
            <img
              className="postOwnerPic"
              src={user.ProfilePic || PF + "noAvatar.png"}
              alt="profile"
            />
            <span className="postOwnerName">{user.username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="headerRight">
            <FiMoreVertical className="iconOptions" />
          </div>
        </div>

        <div className="postCenter">
          <span className="postDescription">{post.desc}</span>
          <img className="postImage" src={post.photo} alt="post" />
        </div>

        <div className="postFooter">
          <div className="footerLeft">
            <img
              className="reactIcon"
              src={PF + "like.jfif"}
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
