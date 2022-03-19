import React, { useContext } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Rightbar from "../../components/Rightbar/Rightbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Wall from "../../components/Wall/Wall";
import { AuthContext } from "../../context/AuthContext";
import "./HomePage.css";

function Homepage() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Navbar />
      <div className="homePage">
        <Sidebar />
        <Wall username={user.username} />
        <Rightbar />
      </div>
    </>
  );
}

export default Homepage;
