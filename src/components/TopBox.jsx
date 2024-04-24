import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faPlay,
  faInfo,
  faPencilAlt,
  faShareSquare,
  faUser,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import {
  faBell as regularBell,
  faShareSquare as farShareSquare,
  faUser as farUser,
  faQuestionCircle as farQuestionCircle,
} from "@fortawesome/free-regular-svg-icons";
import NetflixLogo from "../images/Netflix_2015_logo.svg";
import ProfileRedImg from "../images/profile-red.jpg";
import "../css/TopBox.css"; // Import your CSS file

const TopBox = ({ title, description }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollBackground, setScrollBackground] = useState(false);

  const handleMouseEnter = () => {
    setShowMenu(true);
  };

  const handleMouseLeave = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrollBackground(true);
      } else {
        setScrollBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const topBoxClass = `topBox ${scrollBackground ? "scroll-background" : ""}`;

  return (
    <div>
      <div className={topBoxClass}>
        <img src={NetflixLogo} alt="Netflix Logo" className="logo" />
        <div className="menuTop">
          <p>Home</p>
          <p>TV Shows</p>
          <p>Movies</p>
          <p>New & Popular</p>
          <p>My List</p>
          <p>Browse By Languages</p>
        </div>
        <div className="right-menu-top">
          <FontAwesomeIcon icon={faSearch} className="faSearch" />
          <p className="kids">Kids</p>
          <FontAwesomeIcon icon={regularBell} className="faSearch" />
          <div
            className="bell-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={ProfileRedImg}
              alt="Profile red image with smile"
              className="smallIcon"
            />
            {showMenu && (
              <div className="menu-options">
                <div className="optionBox">
                  <FontAwesomeIcon
                    icon={faPencilAlt}
                    className="profileIcons"
                  />
                  <p className="iconText">Manage Profiles</p>
                </div>
                <div className="optionBox">
                  <FontAwesomeIcon
                    icon={farShareSquare}
                    className="profileIcons"
                  />
                  <p className="iconText">Transfer Profile</p>
                </div>
                <div className="optionBox">
                  <FontAwesomeIcon icon={farUser} className="profileIcons" />
                  <p className="iconText">Account</p>
                </div>
                <div className="optionBox">
                  <FontAwesomeIcon
                    icon={farQuestionCircle}
                    className="profileIcons"
                  />
                  <p className="iconText">Help Center</p>
                </div>
                <button className="signOut">Sign out of Netflix</button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div>
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
      </div>
      <div className="buttonsBox">
        <button className="playButton">
          <FontAwesomeIcon icon={faPlay} className="playIcon" />
          Play
        </button>
        <button className="moreInfoButton">
          <FontAwesomeIcon icon={faInfo} className="infoIcon" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default TopBox;
