import React from 'react';
import '../styles/Polymorph.css';
import aboutMeImage from './aboutme.jpg';
import CertificatesGrid from '../components/CertificatesGrid';
import AwardsGrid from '../components/AwardsGrid';

const Polymorph = () => {
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
                <div className="date">Jun 2021 - Present</div>
                <h4>University of Florida</h4>
                <p>Masters • Fine Arts and Design</p>
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
    </div>
  );
};

export default Polymorph;
