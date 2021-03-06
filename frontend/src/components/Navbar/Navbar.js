import React, { useContext } from "react";
import "./Navbar.scss";
import { AuthContext } from "../../context/AuthContext";

import { FiSearch } from "react-icons/fi";
import { IoMdNotifications } from "react-icons/io";
import { BsFillChatDotsFill, BsPersonFill } from "react-icons/bs";

import { Link } from "react-router-dom";

function Navbar() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const { user } = useContext(AuthContext);

  return (
    <div className="navContainer">
      <div className="leftSide">
        <span className="appName">
          <Link className="appLink" to="/">
            AryanBook
          </Link>
        </span>
      </div>

      <div className="center">
        <div className="search">
          <FiSearch className="searchIcon" />
          <input className="searchInput" placeholder="Search for friend" />
        </div>
      </div>

      <div className="rightSide">
        <div className="navLinks">
          <span className="navLinkItem">HomePage</span>
          <span className="navLinkItem">Wall</span>
        </div>

        <div className="navIcons">
          <div className="navIconItem">
            <BsPersonFill />
            <span className="navIconBadge">2</span>
          </div>

          <div className="navIconItem">
            <BsFillChatDotsFill />
            <span className="navIconBadge">4</span>
          </div>

          <div className="navIconItem">
            <IoMdNotifications />
            <span className="navIconBadge">5</span>
          </div>
        </div>

        <Link to={`/${user.username}`}>
          <img
            src={user.profilePic ? PF + user.profilePic : PF + "noAvatar.png"}
            alt="dp"
            className="navbarProfile "
          />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
