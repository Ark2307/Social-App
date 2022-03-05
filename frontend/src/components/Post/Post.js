import React from "react";
import "./Post.scss";
import friend2 from "../../images/rohit.jfif";
import pic1 from "../../images/rohitChill.jpg";
import icon1 from "../../images/like.jfif";
import icon2 from "../../images/love.png";
import icon3 from "../../images/laugh.jfif";
import icon4 from "../../images/angry.jfif";
import { FiMoreVertical } from "react-icons/fi";

function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postHeader">
          <div className="headerLeft">
            <img className="postOwnerPic" src={friend2} alt="profile" />
            <span className="postOwnerName">Rohit Sharma</span>
            <span className="postDate">10 mins ago</span>
          </div>
          <div className="headerRight">
            <FiMoreVertical className="iconOptions" />
          </div>
        </div>

        <div className="postCenter">
          <span className="postDescription">Chilling Guys</span>
          <img className="postImage" src={pic1} alt="post" />
        </div>

        <div className="postFooter">
          <div className="footerLeft">
            <img className="reactIcon" src={icon1} alt="icon" />
            <img className="reactIcon" src={icon2} alt="icon" />
            <img className="reactIcon" src={icon3} alt="icon" />
            <img className="reactIcon" src={icon4} alt="icon" />
            <span className="likeCounter">31221 people reacted on it</span>
          </div>
          <div className="footerRight">
            <span className="comment">9001 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
