/* eslint-disable react-hooks/exhaustive-deps */

import { createContext, useEffect, useState } from "react";
import { spotifyControllerCreator } from "./../../factories/spotify.factory";

export const SpotifyContext = createContext(undefined);

// The SpotifyProvider component serves as a context provider for Spotify-related state.

const SpotifyProvider = ({ children }) => {

  // Instantiating the Spotify controller using the factory function.
  const controller = spotifyControllerCreator();

  // Defining state variables for new releases, featured playlists, and categories using React's useState hook.
  const [newReleasesList, setNewReleasesList] = useState([]);
  const [featuredPlaylists, setFeaturedPlaylists] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);

  // Using the useEffect hook to execute code after the component's initial render.
  // The empty array as the second argument ensures this code only runs once after the initial render.

  useEffect(() => {
    // Define asynchronous functions to fetch new releases, featured playlists, and categories from Spotify.
    const getNewReleases = async () => {
      try {
        const songs = await controller.getNewReleases() || [];
        setNewReleasesList(songs);
      } catch (error) {
        console.log(error);
      }
    };

    const getFeaturedPlaylists = async () => {
      try {
        const songs = await controller.getFeaturedPlaylists() || [];;
        setFeaturedPlaylists(songs);
      } catch (error) {
        console.log(error);
      }
    };

    const getCategories = async () => {
      try {
        const songs = await controller.getCategories() || [];;
        setCategoriesList(songs);
      } catch (error) {
        console.log(error);
      }
    };

    // Define an asynchronous function to fetch all Spotify data.
    const getAllSpotifyData = async () => {
      await getNewReleases();
      await getFeaturedPlaylists();
      await getCategories();
    }

    // Call the function to fetch all Spotify data.
    getAllSpotifyData();

  }, []);

  // The context provider component returns a SpotifyContext.Provider component.
  // This allows child components to access the Spotify-related state variables through the context.
  return (
    <SpotifyContext.Provider
      value={{ newReleasesList, featuredPlaylists, categoriesList }}
    >
      {children}
    </SpotifyContext.Provider>
  );
};

export default SpotifyProvider;
