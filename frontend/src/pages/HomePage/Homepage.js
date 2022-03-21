import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Rightbar from "../../components/Rightbar/Rightbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Wall from "../../components/Wall/Wall";
import "./HomePage.css";

function Homepage() {
  return (
    <>
      <Navbar />
      <div className="homePage">
        <Sidebar />
        <Wall />
        <Rightbar />
      </div>
    </>
  );
}

export default Homepage;
