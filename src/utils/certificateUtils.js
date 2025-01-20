// Sample certificates data - you can modify this array to add/remove certificates
export const certificates = [
  {
    id: 'cert1',
    path: '/certificates/google_ux_design.jpg',
    title: 'Google UX Design',
    organization: 'Google'
  },
  {
    id: 'cert2',
    path: '/certificates/meta_frontend.jpg',
    title: 'Frontend Development',
    organization: 'Meta'
  },
  {
    id: 'cert3',
    path: '/certificates/aws_cloud.jpg',
    title: 'Cloud Practitioner',
    organization: 'AWS'
  }
  // Add more certificates here as needed
];

export function getCertificates() {
  // Use require.context to get all images from the Certifications folder (note the capital C)
  const certificatesContext = require.context('../assets/Certifications', false, /\.(png|jpe?g|gif)$/);
  const certificateFiles = certificatesContext.keys();
  
  return certificateFiles.map(file => {
    // Get the filename without extension and path
    const name = file.replace('./', '').replace(/\.[^/.]+$/, '');
    // Convert filename to title (replace underscores/hyphens with spaces and capitalize)
    const title = name.replace(/[_-]/g, ' ')
                     .replace(/-\d+$/, '') // Remove trailing numbers after hyphen
                     .split(' ')
                     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                     .join(' ');
    
    return {
      id: name,
      path: certificatesContext(file), // This will return the actual image
      title: title,
      organization: '' // You can add organization info if needed
    };
  });
}
