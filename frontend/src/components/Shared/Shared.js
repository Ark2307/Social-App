import React from "react";
import "./Shared.scss";
import myself from "../../images/download.jfif";
import { BsEmojiSunglasses, BsTag, BsUpload } from "react-icons/bs";
import { BiMap } from "react-icons/bi";

function Shared() {
  return (
    <div className="upload">
      <div className="uploadWrapper">
        <div className="uploadTop">
          <img className="uploadProfileImage" src={myself} alt="profile" />

          <input
            className="uploadInput"
            placeholder="Share your thoughts mate!"
          />
        </div>

        <hr className="uploadHr" />
        <div className="uploadFooter">
          <div className="uploadOptions">
            <div className="uploadItem">
              <BsUpload className="uploadIcon" htmlColor="tomato" />
              <span className="uploadItemText">Gallery</span>
            </div>

            <div className="uploadItem">
              <BsTag htmlColor="blue" className="uploadIcon" />
              <span className="uploadItemText">Tag</span>
            </div>

            <div className="uploadItem">
              <BiMap className="uploadIcon" htmlColor="green" />
              <span className="uploadItemText">Location</span>
            </div>

            <div className="uploadItem">
              <BsEmojiSunglasses className="uploadIcon" htmlColor="tomato" />
              <span className="uploadItemText">Feelings</span>
            </div>
          </div>

          <button className="uploadButton">Upload</button>
        </div>
      </div>
    </div>
  );
}

export default Shared;
