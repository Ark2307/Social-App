import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Rightbar from "../../components/Rightbar/Rightbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Wall from "../../components/Wall/Wall";
import download from "../../images/download.jfif";
import download1 from "../../images/download1.jfif";

import "./Profile.scss";

function Profile() {
  return (
    <>
      <Navbar />
      <div className="profile">
        <Sidebar />

        <div className="profileRight">
          <div className="rightHeader">
            <div className="cover">
              <img className="coverImage" src={download} alt="" />
              <img className="profileImage" src={download1} alt="" />
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
