import React from "react";
import "./Sidebar.scss";

import { MdGroups } from "react-icons/md";
import { AiFillHome, AiFillMessage, AiFillVideoCamera } from "react-icons/ai";
import { BsFillCalendar2EventFill } from "react-icons/bs";
import { VscFeedback } from "react-icons/vsc";

import friend from "../../images/virat.jfif";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarItems">
          <li className="sidebarList">
            <AiFillHome className="sidebarIcon" />
            <span className="iconText">Wall</span>
          </li>

          <li className="sidebarList">
            <AiFillMessage className="sidebarIcon" />
            <span className="iconText">Chats</span>
          </li>

          <li className="sidebarList">
            <AiFillVideoCamera className="sidebarIcon" />
            <span className="iconText">Videos</span>
          </li>

          <li className="sidebarList">
            <MdGroups className="sidebarIcon" />
            <span className="iconText">Groups</span>
          </li>

          <li className="sidebarList">
            <BsFillCalendar2EventFill className="sidebarIcon" />
            <span className="iconText">Events</span>
          </li>

          <li className="sidebarList">
            <VscFeedback className="sidebarIcon" />
            <span className="iconText">Feedback</span>
          </li>
        </ul>

        <button className="sidebarButton">Show More</button>
        <hr className="sidebarRow" />
        <ul className="showFriend">
          <li className="friendItem">
            <img className="friendProfile" src={friend} alt="profile" />
            <span className="friendName">Virat Kohli</span>
          </li>

          <li className="friendItem">
            <img className="friendProfile" src={friend} alt="profile" />
            <span className="friendName">Virat Kohli</span>
          </li>

          <li className="friendItem">
            <img className="friendProfile" src={friend} alt="profile" />
            <span className="friendName">Virat Kohli</span>
          </li>

          <li className="friendItem">
            <img className="friendProfile" src={friend} alt="profile" />
            <span className="friendName">Virat Kohli</span>
          </li>

          <li className="friendItem">
            <img className="friendProfile" src={friend} alt="profile" />
            <span className="friendName">Virat Kohli</span>
          </li>

          <li className="friendItem">
            <img className="friendProfile" src={friend} alt="profile" />
            <span className="friendName">Virat Kohli</span>
          </li>

          <li className="friendItem">
            <img className="friendProfile" src={friend} alt="profile" />
            <span className="friendName">Virat Kohli</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
