import React, { useState, useEffect } from 'react';
import '../styles/Projects.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageCarousel from '../components/ImageCarousel';
import { getProjects } from '../utils/projectUtils';
import aboutMeImage from './aboutme.jpg';

// Get all project images dynamically
const projectImages = require.context('../assets/projects', false, /\.(png|jpe?g|gif)$/);
const imageMap = {};
projectImages.keys().forEach(key => {
  // Remove './' from the start of the key and create the mapping
  const filename = key.replace('./', '');
  imageMap[filename] = projectImages(key);
});

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleEmailCopy = () => {
    navigator.clipboard.writeText('ezekiel.betita@gmail.com');
  };

  useEffect(() => {
    const loadedProjects = getProjects();
    // Map the image paths to imported images
    const projectsWithImages = loadedProjects.map(project => ({
      ...project,
      images: project.images.map(imagePath => {
        // Extract filename from path
        const filename = imagePath.split('/').pop();
        return imageMap[filename] || imagePath;
      })
    }));
    setProjects(projectsWithImages);
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects-container">
      <div className="gradient"></div>
      <Header />
      
      <main className="projects-content">
        <h1 className="projects-title">Project Showcase</h1>
        <div className="projects-grid">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="project-card"
              style={{ backgroundColor: project.bgColor }}
              onClick={() => handleProjectClick(project)}
            >
              <div className="card-image">
                <img 
                  src={project.images[0]} 
                  alt={project.title}
                  className="project-image"
                />
              </div>
              <div className="card-content">
                <h2>{project.title}</h2>
                <p>{project.subtitle}</p>
                {project.technologies && (
                  <div className="technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="project-modal" onClick={handleCloseModal}>
          <div className="modal-wrapper" onClick={e => e.stopPropagation()}>
            <div className="modal-content-projects">
              <div className="modal-body">
                <div className="modal-header">
                  <h2>{selectedProject.title}</h2>
                </div>
                <div className="modal-carousel">
                  <ImageCarousel images={selectedProject.images} dotsPosition="below-content" />
                </div>
                <div className="project-details">
                  <p className="description-project">{selectedProject.description}</p>
                  <div className="technologies">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  {selectedProject.link && (
                    <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="view-project">
                      View Project
                    </a>
                  )}
                </div>
              </div>
            </div>
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

export default Projects;
