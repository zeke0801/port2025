import awardsData from '../assets/awards/awards.json';

export function getAwards() {
  try {
    const awardsContext = require.context('../assets/awards', false, /\.(png|jpe?g|gif)$/);
    
    // Get all awards from the JSON file
    return awardsData.awards.map(award => ({
      ...award,
      certificateImage: awardsContext(`./${award.certificateImage}`)
    }));

  } catch (error) {
    console.error('Error loading awards:', error);
    return [];
  }
}
