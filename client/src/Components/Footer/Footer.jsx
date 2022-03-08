import React from "react";
import "./Footer.scss";
import FacebookLogo from "../../Assets/Icons/logo-facebook.svg";
import TwitterLogo from "../../Assets/Icons/logo-twitter.svg";
import InstaLogo from "../../Assets/Icons/logo-instagram.svg";
import TikTokLogo from "../../Assets/Icons/logo-tiktok.svg";
import YoutubeLogo from "../../Assets/Icons/logo-youtube.svg";

const Footer = (props) => {
  const FormSubmitHandler = (event) => {
    event.preventDefault();
  }

  return (
    <footer className="footer">
      <form className="footer__mailing-list">
        <h3 className="footer__mailing-list--title">
          Love my site? Join my mailing list!
        </h3>
        <div className="footer__mailing-list--input-container">
          <input type="email" className="footer__mailing-list--input" placeholder="Enter email address"/>
          <button className="footer__mailing-list--input-button" onClick={FormSubmitHandler}>JOIN</button>
        </div>
      </form>

      <div className="footer__icons">
        <a href="https://www.facebook.com/" className="footer__icon--link">
          <img className="footer__icon" src={FacebookLogo} alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/" className="footer__icon--link">
          <img className="footer__icon" src={InstaLogo} alt="Instagram" />
        </a>
        <a href="https://twitter.com/" className="footer__icon--link">
          <img className="footer__icon" src={TwitterLogo} alt="Twitter" />
        </a>
        <a href="https://www.tiktok.com/" className="footer__icon--link">
          <img className="footer__icon" src={TikTokLogo} alt="Twitter" />
        </a>
        <a href="https://www.youtube.com/" className="footer__icon--link">
          <img className="footer__icon" src={YoutubeLogo} alt="Twitter" />
        </a>
      </div>
      <ul className="footer__list">
        <li className="footer__list-item">ABOUT</li>
        <li className="footer__list-item">FAQs</li>
        <li className="footer__list-item">TERMS</li>
        <li className="footer__list-item">CONTACT ME</li>
        <li className="footer__list-item">PRIVACY</li>
        <li className="footer__list-item">ACCESSIBILITY</li>
      </ul>
    </footer>
  );
};

export default Footer;
