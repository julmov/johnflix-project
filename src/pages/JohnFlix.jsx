import React from "react";
import BackgroundImage from "../components/BackgroundImage"; // Import BackgroundImage
import netflixTeaser from "../images/netflixteaser.png"
import netflixTv from "../images/tv.png"
import mobileImg from "../images/mobile.jpg"
import devicesPile from "../images/device-pile.png"
import kidsImage from "../images/kids.png"
import "../css/JohnFlix.css"; 
import NetflixLogo from "../images/Netflix_2015_logo.svg"; 

function JohnFlix() {
  return (
    <div className="johnflix-container">
      <BackgroundImage imageUrl={netflixTeaser}>
        <div className="top-container">
          <img src={NetflixLogo} alt="Netflix Logo" className="logo" />

          <select className="selectLanguage">
            <option>English</option>
            <option>Netherland</option>
            <option>Francais</option>
          </select>
          <button className="signInButton">Sign In</button>
        </div>
        <h1>Unlimited movies, TV shows, and more</h1>
        <p className="text-ready-to-watch">Watch anywhere. Cancel anytime.</p>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="input-container">
          <input
            type="email"
            placeholder="Enter your email"
            className="inputGetStarted"
          />
          <button className="getStartedButton">Get Started</button>
        </div>
      </BackgroundImage>
      <div className="tvContainer">
        <div className="text-from-tv-container">
          <h2>Enjoy on your TV</h2>
          <p>Watch on Smart TVs, Playstation, Xbox,</p>
          <p>Chromecast, Apple TV, Blu-ray players, and more.</p>
        </div>
        <img src={netflixTv} alt="Netflix TV" className="tv-picture" />
      </div>
      <div className="stranger-things-container">
        <img src={mobileImg} alt="Netflix Mobile" className="mobile-picture" />
        <h2>Download your shows to watch offline</h2>
        <p>Save your favorites easily and always have something to watch.</p>
      </div>
      <div className="watch-everywhere-container">
        <h2>Watch everywhere</h2>
        <p>
          Stream unlimited movies and TV shows on your phone, tablet, laptop,
          and TV.
        </p>
        <img
          src={devicesPile}
          alt="Netflix Devices"
          className="devices-picture"
        />
      </div>
      <div className="kids-profiles-container">
        <img src={kidsImage} alt="Image with kids" className="kids-picture" />
        <h2>Create profiles for kids</h2>
        <p>
          Send kids on adventures with their favorite characters in a space made
          just for them—free with your membership.
        </p>
      </div>
      <div className="questions-box">
        <h2>Frequently Asked Questions</h2>
        <select id="menu">
          <option>What can I watch on Netflix?</option>
          <option value="option1">
            Netflix has an extensive library of feature films, documentaries, TV
            shows, anime, award-winning Netflix originals, and more. Watch as
            much as you want, anytime you want. Check out some of our content.
          </option>
        </select>
        <select id="menu">
          <option>What is Netflix? </option>
          <option value="option1">
            Netflix is a streaming service that offers a wide variety of
            award-winning TV shows, movies, anime, documentaries, and more on
            thousands of internet-connected devices. You can watch as much as
            you want, whenever you want without a single commercial – all for
            one low monthly price. There's always something new to discover and
            new TV shows and movies are added every week!
          </option>
        </select>
        <select id="menu">
          <option>How much does Netflix cost?</option>
          <option value="option1">
            Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
            streaming device, all for one fixed monthly fee. Plans range from
            €8.99 to €17.99 a month. No extra costs, no contracts.
          </option>
        </select>
        <select id="menu">
          <option>Where can I watch? </option>
          <option value="option1">
            Watch anywhere, anytime. Sign in with your Netflix account to watch
            instantly on the web at netflix.com from your personal computer or
            on any internet-connected device that offers the Netflix app,
            including smart TVs, smartphones, tablets, streaming media players
            and game consoles. You can also download your favorite shows with
            the iOS, Android, or Windows 10 app. Use downloads to watch while
            you're on the go and without an internet connection. Take Netflix
            with you anywhere.
          </option>
        </select>
        <select id="menu">
          <option>How do I cancel? </option>
          <option value="option1">
            Netflix is flexible. There are no pesky contracts and no
            commitments. You can easily cancel your account online in two
            clicks. There are no cancellation fees – start or stop your account
            anytime.
          </option>
        </select>
        <select id="menu">
          <option>Is Netflix good for kids?</option>
          <option value="option1">
            The Netflix Kids experience is included in your membership to give
            parents control while kids enjoy family-friendly TV shows and movies
            in their own space. Kids profiles come with PIN-protected parental
            controls that let you restrict the maturity rating of content kids
            can watch and block specific titles you don’t want kids to see.
          </option>
        </select>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="input-container">
          <input
            type="email"
            placeholder="Enter your email"
            className="inputGetStarted"
          />
          <button className="getStartedButton">Get Started</button>
        </div>
      </div>
      <div className="footerBox">
        <p>Questions? Call 0800-800-82</p>
        <div id="listBox">
          <ul>
            <li>FAQ</li>
            <li>Investor Relations</li>
            <li>Ways to Watch</li>
            <li>Corporate Information</li>
            <li>Legal Notices</li>
          </ul>
          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Terms of Use</li>
            <li>Contact Us</li>
            <li>Only on Netflix</li>
          </ul>
          <ul>
            <li>Account</li>
            <li>Redeem Gift Cards</li>
            <li>Privacy</li>
            <li>Speed Test</li>
            <li>Ad Choices</li>
          </ul>
          <ul>
            <li>Media Center</li>
            <li>Buy Gift Cards</li>
            <li>Cookie Preferences</li>
            <li>Legal Guarantee</li>
          </ul>
        </div>
        <select className="selectLanguage">
          <option>English</option>
          <option>Netherland</option>
          <option>Francais</option>
        </select>
        <p>Netflix Belgium</p>
      </div>
    </div>
  );
}

export default JohnFlix;
