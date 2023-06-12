import React from "react";
import Discover from "./Discover";
import SpotifyProvider from "./../modules/spotify/infrastructure/ui/contexts/spotifyContext";
export default function Routes() {
  return (
    <SpotifyProvider>
      <Discover />
    </SpotifyProvider>
  );
}
