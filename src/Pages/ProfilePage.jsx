import React from "react";
import "./ProfilePage.css";
import MediaListCard from "../components/MediaListCard";
import ProfilePicture from "../images/emma.jpg";

function ProfilePage() {
  return (
    <div className="Profile_container">
      <div className="profile_picture_container">
        <img src={ProfilePicture} alt="" id="profile__img" />
      </div>
      <MediaListCard />
    </div>
  );
}

export default ProfilePage;
