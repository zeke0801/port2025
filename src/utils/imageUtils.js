// Function to get all images from the gallery-images folder
export function getGalleryImages() {
  // Use require.context to get all images from the gallery-images folder
  const imageContext = require.context('../assets/gallery-images', false, /\.(png|jpe?g|gif)$/);
  const images = imageContext.keys().map(imageContext);
  return images;
}

// Function to ensure we have enough images by reusing existing ones
export function getRequiredImages(images, count) {
  const result = [];
  let currentIndex = 0;

  while (result.length < count) {
    result.push(images[currentIndex % images.length]);
    currentIndex++;
  }

  return result;
}

// Function to shuffle array randomly
export function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}
