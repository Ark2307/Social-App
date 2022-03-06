import React, { useState } from "react";
import "./Post.scss";
import icon1 from "../../images/like.jfif";
import { FiMoreVertical } from "react-icons/fi";
import { Users } from "../../data/user";

function Post({ post }) {
  const [reacts, setReacts] = useState(post.reacts);
  const [isLiked, setIsLiked] = useState(false);

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
              src={
                Users.filter((user) => user.id === post?.userId)[0].profilePic
              }
              alt="profile"
            />
            <span className="postOwnerName">
              {Users.filter((user) => user.id === post?.userId)[0].username}
            </span>
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
              src={icon1}
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
