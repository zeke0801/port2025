import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '../styles/Polymorph.css';
import aboutMeImage from './aboutme.jpg';
import collegeDiploma from './Betito_Diploma-1.png';
import CertificatesGrid from '../components/CertificatesGrid';
import AwardsGrid from '../components/AwardsGrid';

const Polymorph = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imagePath) => {
    setSelectedImage(imagePath);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleEmailCopy = () => {
    navigator.clipboard.writeText('jlbetito0801@gmai.com');
    const btn = document.querySelector('.email-button');
    btn.textContent = 'Email Copied!';
    setTimeout(() => {
      btn.textContent = 'Send Email';
    }, 2000);
  };

  return (
    <div className="polymorph-container">
      <div className="nav-section">
        <nav>
          <ul>
            <li>Profile</li>
            <li>Experience</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
          <button className="template-btn">Buy Template</button>
        </nav>
      </div>

      <div className="content-grid">
        <div className="profile-section">
          <div className="profile-image-container">
            <div className="profile-image">
              <img src={aboutMeImage} alt="Zeke Betito" />
            </div>
          </div>
          <div className="profile-info">
            <h1>Floyd Miles</h1>
            <h2>Senior Product Designer</h2>
            <div className="divider"></div>
            <div className="profile-description">
              <h3>Professional Profile</h3>
              <p>I'm a multi-disciplinary entrepreneurial-mindset Product Designer, passionately designing & building software from concept to launch, for over 10 years.</p>
            </div>
          </div>
        </div>

        <div className="details-grid">
          <div className="contact-card">
            <h3>Contact</h3>
            <div className="contact-details">
              <div className="contact-item">
                <h4>Phone</h4>
                <p>123-4567-890</p>
              </div>
              <div className="contact-item">
                <h4>Email</h4>
                <p>myemail@gmail.com</p>
              </div>
              <div className="contact-item">
                <h4>Address</h4>
                <p>6391 Elgin St. Celina, Delaware 10299</p>
              </div>
            </div>
          </div>

          <div className="experience-card">
            <h3>Experience</h3>
            <div className="divider"></div>
            <div className="experience-items">
              <div className="experience-item">
                <div className="experience-left">
                  <div className="date-box">
                    <span className="calendar-icon">📅</span>
                    Jun 2021 - Present
                  </div>
                  <div className="company-name">TechnoD</div>
                </div>
                <div className="experience-right">
                  <h4>Lead Product Designer</h4>
                  <div className="job-type">Full-Time • Remote</div>
                  <p className="description">Proven track record in data science and business consulting, delivering impactful insights and results across industries.</p>
                  <div className="location">
                    <span className="location-icon">📍</span>
                    Based in San Francisco, NYC, USA.
                  </div>
                </div>
              </div>

              <div className="experience-item">
                <div className="experience-left">
                  <div className="date-box">
                    <span className="calendar-icon">📅</span>
                    Jun 2021 - Mar 23
                  </div>
                  <div className="company-name">Designhub</div>
                </div>
                <div className="experience-right">
                  <h4>Prime Design Developer</h4>
                  <div className="job-type">Full-Time • Onsite</div>
                  <p className="description">Established history in data analytics and corporate advice, providing meaningful observation and outcomes across sectors.</p>
                  <div className="location">
                    <span className="location-icon">📍</span>
                    Based in San California, USA.
                  </div>
                </div>
              </div>

              <div className="experience-item">
                <div className="experience-left">
                  <div className="date-box">
                    <span className="calendar-icon">📅</span>
                    Jun 2021 - Apr 22
                  </div>
                  <div className="company-name">LedoDesign</div>
                </div>
                <div className="experience-right">
                  <h4>Chief Design Officer</h4>
                  <div className="job-type">Full-Time • Remote</div>
                  <p className="description">Demonstrated expertise in business advisory and data analysis, providing impactful conclusions and outcomes across various.</p>
                  <div className="location">
                    <span className="location-icon">📍</span>
                    Based in San Miami, LA, USA.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bottom-grid">
            <div className="education-card">
              <h3>Education</h3>
              <div className="divider"></div>
              <div className="education-item">
                <div className="date">2023 - Present</div>
                <h4>Master of Fine Arts</h4>
                <p>University of the Philippines</p>
                <button className="view-diploma-btn" onClick={() => handleImageClick(collegeDiploma)}>
                  View Diploma
                </button>
              </div>
            </div>
          </div>
          <div className="language-card">
              <h3>Language</h3>
              <div className="divider"></div>
              <div className="language-items">
                <div className="language-item">
                  <div className="flag">
                    <img src="https://flagcdn.com/w40/gb.png" alt="English flag"/>
                  </div>
                  <div className="language-info">
                    <div className="language-name">English</div>
                    <div className="language-level">Native</div>
                  </div>
                </div>
                <div className="language-item">
                  <div className="flag">
                    <img src="https://flagcdn.com/w40/ph.png" alt="Filipino flag"/>
                  </div>
                  <div className="language-info">
                    <div className="language-name">Filipino</div>
                    <div className="language-level">Native</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-grid">
            <AwardsGrid />
          </div>
          <CertificatesGrid />
        </div>
      </div>
      <div className="footer">
        <div className="profile-icon">
          <img src={aboutMeImage} alt="Profile" className="footer-profile" />
        </div>
        <h2>Feel Free to Reach Out!</h2>
        <p>Let's Build Amazing Stuff Together</p>
        <div className="footer-buttons">
          <button className="footer-button" onClick={handleEmailCopy}>
            Send Email
          </button>
          <button className="footer-button" onClick={() => window.open('your-resume-url', '_blank')}>
            Get my Resume
          </button>
        </div>
        <div className="divider"></div>
        <p className="copyright"> 2025, All Right Reserved</p>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <span className="close-button" onClick={handleCloseModal}>&times;</span>
            <img src={selectedImage} alt="Full size" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Polymorph;
