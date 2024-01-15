export const preloadData = () => {
  console.log('preload data utils')
}

export const preloadImages = (selectedWords) => {
  selectedWords.forEach((word) => {
    const img = new Image();
    img.src = word.picture;
    // console.log('Preloading image:', img.src);
  });
  console.log('Images preloading...');
};

export const capitalizeFirstLetter = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};