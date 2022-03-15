import React from "react";
import "./Rightbar.scss";

import { Users } from "../../data/user";
import OnlineFriend from "../OnlineFriend/OnlineFriend";
import Following from "../Following/Following";

function Rightbar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  function HomeRightbar() {
    return (
      <div className="rightbar">
        <div className="rightbarWrapper">
          <div className="birthdayContainer">
            <img
              className="birthdayImage"
              src={PF + "gift.jpg"}
              alt="giftBox"
            />
            <span className="birthdayText">
              <b>Pola Foster</b> and <b>3 other friends</b> have a birthday
              today.
            </span>
          </div>

          <img
            className="developerPhoto"
            src={PF + "pacman.jpg"}
            alt="pacman"
          />
          <h4 className="textTitle">Online Friends</h4>
          <ul className="onlineFriendList">
            {Users.map((user) => (
              <OnlineFriend key={user.id} user={user} />
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
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.country}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">
              {user.relationshipStatus === 1
                ? "Single"
                : user.relationshipStatus === 2
                ? "In a relationship"
                : "Married"}
            </span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          {Users.map((user) => (
            <Following key={user.id} user={user} />
          ))}
        </div>
      </>
    );
  }

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}

export default Rightbar;
