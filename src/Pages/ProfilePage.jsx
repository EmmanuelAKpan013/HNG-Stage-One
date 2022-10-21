import React from "react";
import "./ProfilePage.css";
import MediaListCard from "../components/MediaListCard";
import ProfilePicture from "../images/emma.jpg";
import ShareIcon from "../images/shareIcon.png";
import slackIcon from "../images/slackIcon.png";
import gitHubIcon from "../images/githubIcon.png";
import Footer from "../components/Footer";

function ProfilePage() {
  return (
    <div className="Profile_container">
      <div className="profile_picture_and_name">
        <div className="profile_picture_container">
          <img src={ProfilePicture} alt="" id="profile__img" />
        </div>
        <p className="profile_name">Emmanuel Akpan</p>
        <div className="profile_shareIcon">
          <img src={ShareIcon} alt="" />
        </div>
      </div>
      <div className="profile_links_container">
        <MediaListCard />
        <div className="social_icons">
          <div>
            <img src={slackIcon} alt="" />
          </div>
          <div>
            <img src={gitHubIcon} alt="" />
          </div>
        </div>
      </div>
      <div className="profile_footer_container">
        <Footer />
      </div>
    </div>
  );
}

export default ProfilePage;
