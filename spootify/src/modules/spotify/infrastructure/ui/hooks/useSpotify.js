import { useContext } from "react";

// Import the SpotifyContext we have previously created.
import { SpotifyContext } from "./../contexts/spotifyContext";

// Define a custom hook named 'useSpotify'.
export const useSpotify = () => {

  // Use the useContext hook from React to access the context we have defined.
  const context = useContext(SpotifyContext);

  // If the context is undefined, that means this hook is not being used inside a component wrapped with the SpotifyProvider.
  // In this case, we throw an error.
  if (context === undefined) {
    throw new Error("useSpotify must be used within a SpotifyProvider");
  }

  return context;
};
