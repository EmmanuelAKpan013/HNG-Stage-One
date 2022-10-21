import React from "react";
import "./ProfilePage.css";
import MediaListCard from "../components/MediaListCard";
import ProfilePicture from "../images/emma.jpg";

function ProfilePage() {
  return (
    <div className="Profile_container">
      <div className="profile_picture_and_name">
        <div className="profile_picture_container">
          <img src={ProfilePicture} alt="" id="profile__img" />
        </div>
        <p className="profile_name">Emmanuel Akpan</p>
      </div>
      <div className="profile_links_container">
        <MediaListCard />
        <div className="social_icons"></div>
      </div>
    </div>
  );
}

export default ProfilePage;
