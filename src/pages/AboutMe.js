import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Header from '../components/Header';
import Footer from '../components/Footer';
import aboutMeImage from './aboutme.png';
import '../styles/AboutMe.css';

const AboutMe = () => {
  const navigate = useNavigate();
  const [copySuccess, setCopySuccess] = useState('');
  const email = 'jlbetito0801@gmail.com';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopySuccess('Email copied!');
      setTimeout(() => setCopySuccess(''), 2000);
    } catch (err) {
      setCopySuccess('Failed to copy');
    }
  };

  const experiences = [
    {
      title: "Senior Software Developer",
      company: "Tech Solutions Inc.",
      period: "2020 - Present",
      description: "Led development of enterprise-level web applications using MERN stack.",
      images: [
        "https://source.unsplash.com/random/400x300?tech,1",
        "https://source.unsplash.com/random/400x300?code,1"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations",
      period: "2018 - 2020",
      description: "Developed and maintained multiple client websites and applications.",
      images: [
        "https://source.unsplash.com/random/400x300?tech,2",
        "https://source.unsplash.com/random/400x300?code,2"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Creative Web Solutions",
      period: "2017 - 2018",
      description: "Specialized in creating responsive and interactive user interfaces.",
      images: [
        "https://source.unsplash.com/random/400x300?tech,3",
        "https://source.unsplash.com/random/400x300?code,3"
      ]
    },
    {
      title: "Web Developer Intern",
      company: "StartUp Hub",
      period: "2016 - 2017",
      description: "Gained hands-on experience in modern web development practices.",
      images: [
        "https://source.unsplash.com/random/400x300?tech,4",
        "https://source.unsplash.com/random/400x300?code,4"
      ]
    },
    {
      title: "Freelance Developer",
      company: "Self-Employed",
      period: "2015 - 2016",
      description: "Worked on various client projects focusing on web development.",
      images: [
        "https://source.unsplash.com/random/400x300?tech,5",
        "https://source.unsplash.com/random/400x300?code,5"
      ]
    },
    {
      title: "Junior Developer",
      company: "Tech Academy",
      period: "2014 - 2015",
      description: "Started career with focus on fundamental web technologies.",
      images: [
        "https://source.unsplash.com/random/400x300?tech,6",
        "https://source.unsplash.com/random/400x300?code,6"
      ]
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      year: "2023"
    },
    {
      name: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      year: "2022"
    }
  ];

  return (
    <div className="page-container">
      <Header />
      <main className="about-me-container">
        {/* Who I Am Section */}
        <section className="section who-am-i">
          <div className="content-wrapper">
            <div className="text-content">
              <h1>Hi I'm Zeke Betito</h1>
              <p className="lead">
              Experienced programmer and designer with a strong background in operations management, 
              having the skills in negotiation, problem-solving, and client satisfaction. 
              Proven ability to work under-pressure and in multiple teams.
              </p>
              <div className="contact-wrapper">
                <button className="contact-btn" onClick={handleCopyEmail}>
                  Contact me
                </button>
                {copySuccess && <div className="copy-notification">{copySuccess}</div>}
              </div>
              
              <div className="social-links-vertical">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} />
                  <span className="social-text">Facebook</span>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} />
                  <span className="social-text">Twitter</span>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} />
                  <span className="social-text">LinkedIn</span>
                </a>
                <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faWhatsapp} />
                  <span className="social-text">WhatsApp</span>
                </a>
              </div>
            </div>
            <div className="profile-image">
              <img src={aboutMeImage} alt="John Alvin" />
            </div>
          </div>
        </section>

        <div className="section-divider"></div>

        {/* Work Experience Section */}
        <section className="section experience">
          <h2>Work Experience</h2>
          <div className="experience-grid">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-item">
                <div className="experience-content">
                  <h3>{exp.title}</h3>
                  <h4>{exp.company}</h4>
                  <p className="period">{exp.period}</p>
                  <p>{exp.description}</p>
                </div>
                <div className="experience-images">
                  {exp.images.map((img, imgIndex) => (
                    <div key={imgIndex} className="experience-image">
                      <img 
                        src={img} 
                        alt={`${exp.company} work ${imgIndex + 1}`}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `https://source.unsplash.com/random/400x300?portfolio=${index}-${imgIndex}`;
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="section-divider"></div>

        {/* Certifications Section */}
        <section className="section certifications">
          <h2>Certifications</h2>
          <div className="certification-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-item">
                <h3>{cert.name}</h3>
                <p>{cert.issuer} - {cert.year}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="section-divider"></div>

        {/* Portfolio Button Section */}
        <section className="section portfolio-section">
          <button 
            className="portfolio-btn"
            onClick={() => navigate('/portfolio')}
          >
            View My Work
          </button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutMe;
