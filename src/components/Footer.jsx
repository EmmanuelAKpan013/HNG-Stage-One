import "./Footer.css";
import IngresiveLogo from "../images/I4GLogo.png";
import ZuriLogo from "../images/zuriInternshipLogo.png";

function Footer() {
  return (
    <div className="footer">
      <div>
        <img src={ZuriLogo} alt="" />
      </div>
      <div>
        <p>HNG Internship 9 Frontend Task</p>
      </div>
      <div>
        <img src={IngresiveLogo} alt="" />
      </div>
    </div>
  );
}

export default Footer;
