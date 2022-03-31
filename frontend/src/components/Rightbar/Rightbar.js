import React, { useContext, useEffect, useState } from "react";
import "./Rightbar.scss";

import { Users } from "../../data/user";
import OnlineFriend from "../OnlineFriend/OnlineFriend";
import Following from "../Following/Following";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { AiOutlineUserAdd, AiOutlineUserDelete } from "react-icons/ai";

function Rightbar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);

  const { user: currentUser, dispatch } = useContext(AuthContext);

  const [isFollow, setIsFollow] = useState(
    currentUser.following.includes(user?.id)
  );

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get(
          "http://localhost:8080/api/users/friend/".concat(`${user._id}`)
        );
        //console.log(friendList);
        setFriends(friendList.data.responseData);
      } catch (error) {
        console.log(error);
      }
    };

    getFriends();
  }, [user]);

  const handleFollow = async () => {
    try {
      if (isFollow) {
        await axios.put(
          "http://localhost:8080/api/users/" + user._id + "/unfollow",
          { userId: currentUser._id }
        );
        dispatch({ type: "UN_FOLLOW", payload: user._id });
      } else {
        await axios.put(
          "http://localhost:8080/api/users/" + user._id + "/follow",
          { userId: currentUser._id }
        );
        dispatch({ type: "FOLLOW", payload: user._id });
      }

      setIsFollow(!isFollow);
    } catch (error) {
      console.log(error);
    }
  };

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
        {user.username !== currentUser.username && (
          <button className="followButton" onClick={handleFollow}>
            {isFollow ? "UnFollow" : "Follow"}
            {isFollow ? <AiOutlineUserDelete /> : <AiOutlineUserAdd />}
          </button>
        )}
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
          {friends.map((user) => (
            <Following key={user._id} user={user} />
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
