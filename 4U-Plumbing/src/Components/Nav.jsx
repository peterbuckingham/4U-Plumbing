import React from "react";
import Logo from "../images/logo-transparent.png";
import "../styles/index.css";
import { CiAlarmOn } from "react-icons/ci";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons"; // Import icons

function Nav() {
  return (
    <div>
      <div className="top-nav">
        <div className="topNavShape"></div>
        <div>
          <img className="fouruPlumbingLogo" src={Logo} alt="4U-PlumbingLogo" />
          <p className="fouruPlumbingLogo-text">4U Plumbing</p>
        </div>
        <span className="top-nav-emailUs">
          <p className="email-Us">E-mail us:</p>
          <p>4U-Plumbing.co.za</p>
        </span>
        <span className="top-nav-operatingTimes">
          <div>
            <CiAlarmOn className="clockIcon" />
          </div>
          <p className="topnav-times">Operating Times: </p><p>Weekdays (Monday to Friday)</p>
          <p className="topnav-contact">Contact: </p><p>+27 82 590 7453</p>
        </span>
        <span className="top-nav-socialMedia">
          <p className="Follow-us">Follow us:</p>
          <a
            href="https://www.facebook.com/profile.php?id=61569138837348"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              size="1x"
              style={{ color: "#f7f9ff", marginRight: "20px" }}
            />
          </a>
          <a
            href="https://www.tiktok.com/@4u_plumbing?is_from_webapp=1&sender_device=pc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faTiktok}
              size="1x"
              style={{ color: "#f7f9ff", marginRight: "20px" }}
            />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              size="1x"
              style={{ color: "#f7f9ff" }}
            />
          </a>
        </span>
      </div>

      <div className="main-Nav">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
