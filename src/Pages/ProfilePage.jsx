import React from "react";
import MediaListCard from "../components/MediaListCard";

function ProfilePage() {
  return (
    <div className="Profile_container">
      <div className="profile_picture_container">
        <img src={""} alt="" id="profile__img" />
      </div>
      <MediaListCard />
    </div>
  );
}

export default ProfilePage;
