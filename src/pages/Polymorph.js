import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '../styles/Polymorph.css';
import aboutMeImage from './aboutme.jpg';
import collegeDiploma from './Betito_Diploma-1.png';
import CertificatesGrid from '../components/CertificatesGrid';
import AwardsGrid from '../components/AwardsGrid';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Polymorph = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imagePath) => {
    setSelectedImage(imagePath);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleEmailCopy = (e) => {
    navigator.clipboard.writeText('jlbetito0801@gmail.com');
    const btn = e.target;
    const originalText = btn.textContent;
    btn.textContent = 'Email Copied!';
    setTimeout(() => {
      btn.textContent = originalText;
    }, 2000);
  };

  return (
    <div className="polymorph-container">
      <Header />

      <div className="content-grid">
        <div className="profile-section">
          <div className="profile-image-container">
            <div className="profile-image">
              <img src={aboutMeImage} alt="Zeke Betito" />
            </div>
          </div>
          <div className="profile-info">
            <h1>Joseph Raphael Betito</h1>
            <h2>Full Stack Developer UI/UX Designer</h2>
            <div className="divider"></div>
            <div className="profile-description">
              <h3>Professional Profile</h3>
              <p>Experienced programmer and
                designer with a strong background
                in operations management, having

                the skills in negotiation, problem-solving,
                 and client satisfaction.

                Proven ability to work under-pressure
                 and in multiple teams.
              </p>
            </div>
          </div>
        </div>

        <div className="details-grid">
          <div className="contact-card">
            <h3>Contact</h3>
            <div className="divider"></div>
            <div className="contact-details">
              <div className="contact-item">
                <h4>Phone</h4>
                <p>+63 917-123-7040</p>
              </div>
              <div className="contact-item">
                <h4>Email</h4>
                <p>jlbetito0801@gmail.com</p>
              </div>
              <div className="contact-item">
                <h4>Address</h4>
                <p>Naga City, Bicol, Philippines 4402</p>
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
                    December 2024
                  </div>
                  <div className="company-name">Ateneo De Naga University JHS</div>
                </div>
                <div className="experience-right">
                  <h4>Front End Consultant & Project Manager</h4>
                  <div className="job-type">Consultancy • Onsite</div>
                  <p className="description">Primary Consultant for Front-End Design of a new student information management system. <br/>
                  Lead Front-End Designer utilizing modern trend on user experience and interface <br/>
                  Suggested new frameworks to make the system reliable and up-to current standards both in university standards and latest front-end designs
                  </p>
                  <div className="location">
                    <span className="location-icon">📍</span>
                    Naga City, Bicol, Philippines
                  </div>
                </div>
              </div>

              <div className="experience-item">
                <div className="experience-left">
                  <div className="date-box">
                    <span className="calendar-icon">📅</span>
                    May 2024 - August 2024
                  </div>
                  <div className="company-name">Vet Ping</div>
                </div>
                <div className="experience-right">
                  <h4>Project Manager & Lead Designer</h4>
                  <div className="job-type">Full-Time • Remote</div>
                  <p className="description">
                  Built a front-end for an application to be used by a local veterinarian. <br/>
                  Increased client and vet interactivity by making a dedicated app for faster response in times of emergency and consultation. <br/>
                  Added features that boosts client retention by giving them the convenience of able to request a consultation whenever the vet is within the area.
                  </p>
                  <div className="location">
                    <span className="location-icon">📍</span>
                    Naga City, Bicol, Philippines
                  </div>
                </div>
              </div>

              <div className="experience-item">
                <div className="experience-left">
                  <div className="date-box">
                    <span className="calendar-icon">📅</span>
                    December 2023 - May 2024
                  </div>
                  <div className="company-name">Dalan; StartUp</div>
                </div>
                <div className="experience-right">
                  <h4>Founder, Project Manager, & Lead Designer</h4>
                  <div className="job-type">Full-Time • Remote</div>
                  <p className="description">
                  Designed a system that enhances public and government interaction. <br/>
                  Built a sustainable front-end that adapts to new features and technologies using Flutter Front End. <br/>
                  Utilizing cooperation apps to enhance team productivity and increase chances of meeting client expectations and deadlines.
                  </p><div className="location">
                    <span className="location-icon">📍</span>
                    Naga City, Bicol, Philippines
                  </div>
                </div>
              </div>

              <div className="experience-item">
                <div className="experience-left">
                  <div className="date-box">
                    <span className="calendar-icon">📅</span>
                    June 2023 - July 2023
                  </div>
                  <div className="company-name">Department of Agrarian Reform</div>
                </div>
                <div className="experience-right">
                  <h4>Intern - Front End, Lead Design, QA Tester, & Project Manager</h4>
                  <div className="job-type">Full-Time • Onsite</div>
                  <p className="description">
                  Built an attendance system for interns. <br/>
                  Encoded and checked integrity of current employees database. <br/>
                  Enhanced current method of tracking different leaves such as PTO and Sick Leave by making another application for employees to use.
                  </p>
                  <div className="location">
                    <span className="location-icon">📍</span>
                    Naga City, Bicol, Philippines
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
                <h4>Bachelor of Science in Computer Science</h4>
                <p>Ateneo De Naga University</p>
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

      {selectedImage && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content">
            <img src={selectedImage} alt="Certificate" />
            <button className="close-button" onClick={handleCloseModal}>×</button>
          </div>
        </div>
      )}

      <Footer 
        profileImage={aboutMeImage} 
        onEmailCopy={handleEmailCopy}
      />
    </div>
  );
};

export default Polymorph;
