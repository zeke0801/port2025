import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { getGalleryImages, getRequiredImages, shuffleArray } from '../utils/imageUtils';
import AnimatedBackground from '../components/AnimatedBackground';
import { useNavigate } from 'react-router-dom';
import '../styles/LandingPage.css';

const TypingText = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const toRotate = useMemo(() => [
    'Zeke Betito',
    'Project Management',
    'Full Stack Developer',
    'UI/UX Designer',
    'Consultant',
    'Freelancer',
  ], []);

  useEffect(() => {
    let ticker = setTimeout(() => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];

      if (isDeleting) {
        setText(prev => prev.slice(0, -1));
        setTypingSpeed(50);
      } else {
        setText(prev => fullText.slice(0, prev.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(prev => prev + 1);
      }
    }, typingSpeed);

    return () => clearTimeout(ticker);
  }, [text, isDeleting, loopNum, typingSpeed, toRotate]);

  return (
    <div className="typing-text">
      <span>{text}</span>
      <span className="cursor">|</span>
    </div>
  );
};

const LandingPage = () => {
  const navigate = useNavigate();
  const [galleryImages, setGalleryImages] = useState([]);
  const [currentLayout, setCurrentLayout] = useState([]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const FADE_DURATION = 2000; // 2s for fade transitions
  const DISPLAY_DURATION = 4000; // 4s to display image
  const TRANSITION_DELAY = 100; // Delay between each image transition

  // Layout configurations for different grid positions
  const layoutConfigs = useMemo(() => [
    { wide: false, tall: false },
    { wide: true, tall: false },
    { wide: false, tall: false },
    { wide: false, tall: true },
    { wide: false, tall: false },
    { wide: true, tall: false },
    { wide: false, tall: true },
    { wide: false, tall: false },
  ], []);

  // Array of fixed texts for each position
  const positionTexts = useMemo(() => [
    "Crafting Digital Experiences",
    "Building Tomorrow's Web",
    "Design Meets Innovation",
    "Creative Solutions",
    "Pushing Boundaries",
    "Pixel Perfect Design",
    "Web Development Artistry",
    "Modern Technologies",
    "Elegant Code",
    "User-Centric Design"
  ], []);

  // Function to handle smooth image transition
  const transitionImages = useCallback(async (newImages) => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    try {
      const images = Array.from(document.querySelectorAll('.gallery-item img'));

      // Step 1: Fade out current images
      for (let i = 0; i < images.length; i++) {
        const img = images[i];
        await new Promise(resolve => {
          img.classList.remove('visible');
          setTimeout(resolve, TRANSITION_DELAY);
        });
      }

      // Step 2: Short pause with black background
      await new Promise(resolve => setTimeout(resolve, FADE_DURATION));

      // Step 3: Update images
      setCurrentLayout(newImages.map(image => ({
        ...image,
        key: Math.random(),
      })));

      // Step 4: Fade in new images
      await new Promise(resolve => {
        requestAnimationFrame(() => {
          const newImages = document.querySelectorAll('.gallery-item img');
          newImages.forEach((img, index) => {
            setTimeout(() => {
              img.classList.add('visible');
            }, index * TRANSITION_DELAY);
          });
          setTimeout(resolve, FADE_DURATION + (newImages.length * TRANSITION_DELAY));
        });
      });

      // Step 5: Hold the images visible
      await new Promise(resolve => setTimeout(resolve, DISPLAY_DURATION));

    } catch (error) {
      console.error('Transition error:', error);
    } finally {
      setIsTransitioning(false);
    }
  }, [isTransitioning, TRANSITION_DELAY, FADE_DURATION, DISPLAY_DURATION]);

  // Initialize gallery
  useEffect(() => {
    try {
      const images = getGalleryImages();
      const requiredImages = getRequiredImages(images, layoutConfigs.length);
      setGalleryImages(requiredImages);
      
      const initialLayout = requiredImages.map((image, index) => ({
        url: image,
        ...layoutConfigs[index],
        text: positionTexts[index],
        key: Math.random(),
      }));
      setCurrentLayout(initialLayout);

      // Initial fade in
      setTimeout(() => {
        const images = document.querySelectorAll('.gallery-item img');
        images.forEach((img, index) => {
          setTimeout(() => {
            img.classList.add('visible');
          }, index * TRANSITION_DELAY);
        });
      }, 30);
    } catch (error) {
      console.error('Error loading images:', error);
      const placeholders = Array(layoutConfigs.length).fill(null).map((_, index) => ({
        url: `https://source.unsplash.com/random/800x800?portfolio=${index + 1}`,
        ...layoutConfigs[index],
        text: positionTexts[index],
        key: Math.random(),
      }));
      setCurrentLayout(placeholders);
    }
  }, [layoutConfigs, positionTexts, TRANSITION_DELAY]);

  // Rotate images periodically
  useEffect(() => {
    if (galleryImages.length === 0) return;

    const rotateImages = () => {
      const shuffledImages = shuffleArray([...galleryImages]);
      const newLayout = currentLayout.map((item, index) => ({
        ...item,
        url: shuffledImages[index],
        text: item.text,
      }));
      transitionImages(newLayout);
    };

    const scheduleNextRotation = () => {
      if (!isTransitioning) {
        rotateImages();
      }
    };

    const interval = setInterval(scheduleNextRotation, DISPLAY_DURATION + (FADE_DURATION * 2));
    return () => clearInterval(interval);
  }, [
    galleryImages,
    currentLayout,
    isTransitioning,
    transitionImages,
    DISPLAY_DURATION,
    FADE_DURATION
  ]);

  return (
    <div className="landing-container">
      <AnimatedBackground />
      <div className="landing-content">
        {/* Gallery Section */}
        <div className="gallery-section">
          {currentLayout.map((image, index) => (
            <div
              key={image.key}
              className={`gallery-item ${image.wide ? 'wide' : ''} ${image.tall ? 'tall' : ''}`}
            >
              <img
                src={image.url}
                alt={`Portfolio item ${index + 1}`}
                onError={(e) => {
                  e.target.src = `https://source.unsplash.com/random/800x800?portfolio=${index + 1}`;
                }}
              />
              <div className="text-overlay">
                <p>{image.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Login Section */}
        <div className="login-section">
          <div className="instagram-logo">Wolf</div>
          <form className="login-form">
           
            <TypingText />
            <input
              type="text"
              placeholder="Phone number, username, or email"
            />
            <input
              type="password"
              placeholder="Password"
            />
            <button type="button" className="login-btn">
              Log in
            </button>
            <div className="divider-landingpage">
              <span>OR</span>
            </div>
            <button 
              type="button" 
              className="client-login-btn"
              onClick={() => navigate('/about')}
            >
              Client Login
            </button>
          </form>
          <div className="social-section">
            <p>You can also find me at:</p>
            <div className="social-links">
              <a
                href="https://github.com/zeke0801"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.linkedin.com/in/joseph-raphael-betito-8b4523227/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
