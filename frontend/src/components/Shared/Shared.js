import React, { useContext, useRef, useState } from "react";
import "./Shared.scss";
import { BsEmojiSunglasses, BsTag, BsUpload } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

function Shared() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const { user } = useContext(AuthContext);
  const description = useRef();

  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      description: description.current.value,
    };

    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("file", file);
      data.append("name", fileName);
      newPost.img = fileName;
      try {
        await axios.post("/upload", data);
      } catch (error) {
        console.log(error);
      }
    }

    try {
      await axios.post("/post/create", newPost);
      window.location.reload();
    } catch (error) {}
  };

  return (
    <div className="upload">
      <div className="uploadWrapper">
        <div className="uploadTop">
          <img
            className="uploadProfileImage"
            src={user.profilePic ? PF + user.profilePic : PF + "noAvatar.png"}
            alt="profile"
          />

          <input
            className="uploadInput"
            placeholder={`Share your thoughts ${user.username}`}
            ref={description}
          />
        </div>

        <hr className="uploadHr" />
        <form className="uploadFooter" onSubmit={handleSubmit}>
          <div className="uploadOptions">
            <label htmlFor="file" className="uploadItem">
              <BsUpload className="uploadIcon" />
              <span className="uploadItemText">Gallery</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png , .jpeg , .jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>

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

          <button className="uploadButton" type="submit">
            Upload
          </button>
        </form>
      </div>
    </div>
  );
}

export default Shared;
