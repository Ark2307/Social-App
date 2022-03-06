import React from "react";
import "./Rightbar.scss";
import pacman from "../../images/pacman.jfif";
import gift from "../../images/gift.jfif";

import { Users } from "../../data/user";

function Rightbar({ profile }) {
  function HomeRightbar() {
    return (
      <div className="rightbar">
        <div className="rightbarWrapper">
          <div className="birthdayContainer">
            <img className="birthdayImage" src={gift} alt="giftBox" />
            <span className="birthdayText">
              <b>Pola Foster</b> and <b>3 other friends</b> have a birthday
              today.
            </span>
          </div>

          <img className="developerPhoto" src={pacman} alt="pacman" />
          <h4 className="textTitle">Online Friends</h4>
          <ul className="onlineFriendList">
            {Users.map((user) => (
              <li className="onlineFriend">
                <div className="friendContainer">
                  <img className="onlineProfile" src={user.profilePic} alt="" />
                  <span className="online" />
                </div>
                <span className="friendUsername">{user.username}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  function ProfileRightbar() {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          {Users.map((user) => (
            <div className="rightbarFollowing">
              <img
                src={user.profilePic}
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">{user.username}</span>
            </div>
          ))}
        </div>
      </>
    );
  }

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}

export default Rightbar;
