import React from "react";
import "./Shared.scss";
import { BsEmojiSunglasses, BsTag, BsUpload } from "react-icons/bs";
import { BiMap } from "react-icons/bi";

function Shared() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="upload">
      <div className="uploadWrapper">
        <div className="uploadTop">
          <img
            className="uploadProfileImage"
            src={PF + "noAvatar.png"}
            alt="profile"
          />

          <input
            className="uploadInput"
            placeholder="Share your thoughts mate!"
          />
        </div>

        <hr className="uploadHr" />
        <div className="uploadFooter">
          <div className="uploadOptions">
            <div className="uploadItem">
              <BsUpload className="uploadIcon" />
              <span className="uploadItemText">Gallery</span>
            </div>

            <div className="uploadItem">
              <BsTag className="uploadIcon" />
              <span className="uploadItemText">Tag</span>
            </div>

            <div className="uploadItem">
              <BiMap className="uploadIcon" />
              <span className="uploadItemText">Location</span>
            </div>

            <div className="uploadItem">
              <BsEmojiSunglasses className="uploadIcon" />
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
