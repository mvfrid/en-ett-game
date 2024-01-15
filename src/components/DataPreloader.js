/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { game } from './reducers/game';

const DataPreloader = ({ selectedWords }) => {
  const dispatch = useDispatch();

  // Function to load an image and return a promise
  const loadImage = (imageURL) => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = () => reject(new Error('Failed to load image'));
      image.src = imageURL;
    });
  };

  // Function to preload data and dispatch it to the store
  const preloadData = async (words) => {
    const cachedData = {}; // Your cache object
    const imagePromises = []; // Declare the imagePromises array

    // Loop through the selectedWords array using forEach with index
    words.forEach((word, index) => {
      const { picture } = word;

      // Load the image for each word
      if (picture) {
        const imagePromise = loadImage(picture); // Function to load images
        imagePromises.push(imagePromise);
      }

      // Store word data in the cache with the index as the key
      cachedData[index] = word;
    });

    // Wait for all image promises to resolve
    await Promise.all(imagePromises);

    // Now, your data and images are preloaded and cached
    return cachedData;
  };

  // Call the preload function when the component mounts
  useEffect(() => {
    const preloadAndDispatchData = async () => {
      try {
        const preloadedData = await preloadData(selectedWords);
        // Dispatch an action with the preloaded data to store it
        dispatch(game.actions.preloadGameData(preloadedData)); // Replace with your Redux action
      } catch (error) {
        // Handle errors if necessary
      }
    };

    preloadAndDispatchData();
  }, [selectedWords, dispatch]);

  return null; // You can return null since this component is mainly for utility functions
};

export default DataPreloader;

//

/*

// Function to load an image and return a promise
function loadImage(imageURL) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error('Failed to load image'));
    image.src = imageURL;
  });
}

async function preloadData(selectedWords) {
  try {
    const preloadedData = await fetchDataFromJSON(); // Perform asynchronous data loading and
    image preloading
    dispatch(game.actions.startTheGame(preloadedData)); // Dispatch an action with preloaded data
  } catch (error) {
    // Handle errors
  }
}

/*
async function preloadData(selectedWords) {
  const cachedData = {}; // Your cache object
  const imagePromises = []; // Declare the imagePromises array

  // Loop through the selectedWords array using forEach with index
  selectedWords.forEach((word, index) => {
    const { picture } = word;

    // Load the image for each word
    if (picture) {
      const imagePromise = loadImage(picture); // Function to load images
      imagePromises.push(imagePromise);
    }

    // Store word data in the cache with the index as the key
    cachedData[index] = word;
  });

  // Wait for all image promises to resolve
  await Promise.all(imagePromises);

  // Now, your data and images are preloaded and cached
  console.log('cachedData', cachedData)
  return cachedData;
}

export { preloadData }; // Exporting the preloadData function

export const DataPreloader = () => {
  // It serves as a container for the preloadData function and potentially other utility
  // functions, allowing you to export and reuse those functions across your application
  // without needing to render any UI elements.
  console.log('preloadData from DataPreloader', preloadData)

  return null; // You can return null here since this component is mainly for utility functions
}

/*
export const DataPreloader = () => {
  console.log('DataPreloader running')

  async function preloadData({ selectedWords }) {
    const cachedData = {}; // Your cache object
    const imagePromises = []; // Declare the imagePromises array

    // Loop through the selectedWords array using forEach with index
    selectedWords.forEach((word, index) => {
      const { picture } = word;

      // Load the image for each word
      if (picture) {
        const imagePromise = loadImage(picture); // Function to load images
        imagePromises.push(imagePromise);
      }

      // Store word data in the cache with the index as the key
      cachedData[index] = word;
    });

    // Wait for all image promises to resolve
    await Promise.all(imagePromises);

    // Now, your data and images are preloaded and cached
    return cachedData;
  }

  // Function to load an image and return a promise
  function loadImage(imageURL) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = () => reject(new Error('Failed to load image'));
      image.src = imageURL;
    });
  }

  console.log('preloadData', preloadData)
  return null; // You can return null here since this component is mainly for utility functions
}

export { preloadData };

// The line export { preloadData }; at the end of your DataPreloader component file
// is an ES6 module export statement.
// It allows you to export the preloadData function from the module so that it
// can be imported and used in other parts
// of your application.

*/