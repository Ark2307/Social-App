import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Rightbar from "../../components/Rightbar/Rightbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Wall from "../../components/Wall/Wall";

import "./Profile.scss";

function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <Navbar />
      <div className="profile">
        <Sidebar />

        <div className="profileRight">
          <div className="rightHeader">
            <div className="cover">
              <img className="coverImage" src={PF + "noAvatar.png"} alt="" />
              <img
                className="profileImage"
                src={PF + "RohitCover.jpg"}
                alt=""
              />
            </div>

            <div className="profileInfo">
              <h4 className="profileInfoName">Safak Kocaoglu</h4>
              <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Wall />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
