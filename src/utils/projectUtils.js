import projectsData from '../data/projects.json';

export const getProjects = () => {
  return projectsData.projects;
};

export const addProject = (newProject) => {
  // This function would typically interact with a backend
  // For now, it just returns the new project
  return newProject;
};
