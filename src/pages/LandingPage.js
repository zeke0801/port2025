import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { getGalleryImages, getRequiredImages, shuffleArray } from '../utils/imageUtils';
import AnimatedBackground from '../components/AnimatedBackground';
import '../styles/LandingPage.css';

const LandingPage = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [currentLayout, setCurrentLayout] = useState([]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const FADE_DURATION = 2000; // 2s for fade transitions
  const DISPLAY_DURATION = 4000; // 4s to display image
  const TRANSITION_DELAY = 100; // Delay between each image transition

  // Layout configurations for different grid positions
  const layoutConfigs = [
    { wide: false, tall: false },
    { wide: true, tall: false },
    { wide: false, tall: false },
    { wide: false, tall: true },
    { wide: false, tall: false },
    { wide: true, tall: false },
    { wide: false, tall: true },
    { wide: false, tall: false },
    { wide: true, tall: false },
    { wide: false, tall: false },
    { wide: false, tall: true },
    { wide: false, tall: false },
  ];

  // Array of fixed texts for each position
  const positionTexts = [
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
  ];

  // Initialize gallery
  useEffect(() => {
    try {
      const images = getGalleryImages();
      const requiredImages = getRequiredImages(images, layoutConfigs.length);
      setGalleryImages(requiredImages);
      
      const initialLayout = requiredImages.map((image, index) => ({
        url: image,
        ...layoutConfigs[index],
        text: positionTexts[index], // Fixed text based on position
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
        text: positionTexts[index], // Fixed text based on position
        key: Math.random(),
      }));
      setCurrentLayout(placeholders);
    }
  }, []);

  // Function to handle smooth image transition
  const transitionImages = async (newImages) => {
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
  };

  // Rotate images periodically
  useEffect(() => {
    if (galleryImages.length === 0) return;

    const rotateImages = () => {
      const shuffledImages = shuffleArray([...galleryImages]);
      const newLayout = currentLayout.map((item, index) => ({
        ...item,
        url: shuffledImages[index],
        // Keep the same text as before
        text: currentLayout[index].text,
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
  }, [galleryImages, currentLayout, isTransitioning]);

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
            <div className="divider">
              <span>OR</span>
            </div>
            <h4>Client Login</h4>
          </form>
          <div className="social-section">
            <p>You can also find me at:</p>
            <div className="social-links">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
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
