import React from 'react';
import '../styles/Footer.css';

const Footer = ({ profileImage, onEmailCopy }) => {
  return (
    <div className="footer">
      <div className="center-orb"></div>
      <div className="profile-icon">
        <img src={profileImage} alt="Profile" className="footer-profile" />
      </div>
      <h2>Feel Free to Reach Out!</h2>
      <p>Let's Build Amazing Stuff Together</p>
      <div className="footer-buttons">
        <button className="footer-button" onClick={onEmailCopy}>
          Send Email
        </button>
        <button 
          className="footer-button" 
          onClick={() => window.open('https://drive.google.com/file/d/1f533OCj9q1mmRL4F6SZH7hLj4-xRjzID/view?usp=drive_link', '_blank')}
        >
          Get my Resume
        </button>
      </div>
      <div className="divider"></div>
      <p className="copyright">© {new Date().getFullYear()}, All Rights Reserved</p>
    </div>
  );
};

export default Footer;
