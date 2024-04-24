import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";


const FooterBox = () => {

    return (
      <div>
        <div className="socialMediaIcons">
          <FontAwesomeIcon icon={faFacebookF} className="socialIcon" />{" "}
          {/* Facebook icon */}
          <FontAwesomeIcon icon={faInstagram} className="socialIcon" />{" "}
          {/* Instagram icon */}
          <FontAwesomeIcon icon={faTwitter} className="socialIcon" />{" "}
          {/* Twitter icon */}
          <FontAwesomeIcon icon={faYoutube} className="socialIcon" />
        </div>
        <div className="footer-list-box">
          <ul>
            <li>Audio Description</li>
            <li>Investor Relations</li>
            <li>Legal Notices</li>
            <li>Ad Choices</li>
          </ul>
          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
          </ul>
          <ul>
            <li>Gift Cards</li>
            <li>Terms Of Use</li>
            <li>Corporate Information</li>
          </ul>
          <ul>
            <li>Media Center</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <button className="serviceButton">Service Code</button>
        <p className="copyright">© 1997-2024 Netflix, Inc.</p>
      </div>
    );

};

export default FooterBox;
