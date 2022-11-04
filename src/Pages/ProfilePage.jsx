import { Link } from "react-router-dom";

import "./ProfilePage.css";
import MediaListCard from "../components/MediaListCard";
import ProfilePicture from "../images/emma.jpg";
import ShareIcon from "../images/shareIcon.png";
import DottedIcon from "../images/DottedIcon.png";
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
        <div className="profile_dottedIcon">
          <img src={DottedIcon} alt="" />
        </div>
      </div>
      <div className="profile_links_container">
        <MediaListCard />
        <Link to="/contact" className="link_button" id="contact">
          Contact Me
        </Link>

        <div className="social_icons">
          <div>
            <a
              href="https://app.slack.com/client/T042F7V19Q8/D0489GA9H61/rimeto_profile/U048CEXLZH8"
              target="_blank"
              rel="noreferrer"
              // id="slack"
            >
              <img src={slackIcon} alt="slack_logo" />
            </a>
          </div>
          <div>
            <a
              href="https://github.com/EmmanuelAKpan013"
              id="github"
              target="_blank"
              rel="noreferrer"
            >
              <img src={gitHubIcon} alt="gitHub_logo" />
            </a>
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
