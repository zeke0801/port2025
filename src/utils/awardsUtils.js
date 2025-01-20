import awardsData from '../data/awards.json';

export function getAwards() {
  // Get all images from the awards folder
  const awardsContext = require.context('../assets/awards', false, /\.(png|jpe?g|gif)$/);
  
  // Map through the awards data and add the actual image paths
  return awardsData.awards.map(award => {
    // Get the filename from the award's id
    const imagePath = `./${award.id}.png`;
    
    try {
      // Try to get the image using require.context
      const imageUrl = awardsContext(imagePath);
      return {
        ...award,
        certificateImage: imageUrl // Use the actual image URL
      };
    } catch (error) {
      console.warn(`Image not found for award: ${award.id}`);
      return award; // Return award without image if not found
    }
  });
}
