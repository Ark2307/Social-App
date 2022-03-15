import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Rightbar from "../../components/Rightbar/Rightbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Wall from "../../components/Wall/Wall";

import "./Profile.scss";

function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const [user, setUser] = useState({});
  const params = useParams();
  const username = params.username;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`users?username=${username}`);
      //console.log(res);
      setUser(res.data.responseData);
    };
    fetchUser();
  }, [username]);

  return (
    <>
      <Navbar />
      <div className="profile">
        <Sidebar />

        <div className="profileRight">
          <div className="rightHeader">
            <div className="cover">
              <img
                className="coverImage"
                src={PF + user.coverPic || PF + "noAvatar.png"}
                alt=""
              />
              <img
                className="profileImage"
                src={PF + user.profilePic || PF + "noAvatar.png"}
                alt=""
              />
            </div>

            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.description}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Wall username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
