import React from "react";
import "./Rightbar.scss";
import pacman from "../../images/pacman.jfif";
import gift from "../../images/gift.jfif";
import rohit from "../../images/rohit.jfif";

function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImage" src={gift} alt="giftBox" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>

        <img className="developerPhoto" src={pacman} alt="pacman" />
        <h4 className="textTitle">Online Friends</h4>
        <ul className="onlineFriendList">
          <li className="onlineFriend">
            <div className="friendContainer">
              <img className="onlineProfile" src={rohit} alt="" />
              <span className="online" />
            </div>
            <span className="friendUsername">Rohit Sharma</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Rightbar;
