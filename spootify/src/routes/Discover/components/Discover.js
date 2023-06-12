import React, { useState, useEffect } from "react";
import DiscoverBlock from "./DiscoverBlock/components/DiscoverBlock";
import { useSpotify } from "./../../../modules/spotify/infrastructure/ui/hooks/useSpotify";
import "../styles/_discover.scss";

const Discover = () => {

  const [newReleases, setNewReleases] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [categories, setCategories] = useState([]);

  // Call the useSpotify hook to get new releases, featured playlists and categories
  const { newReleasesList, featuredPlaylists, categoriesList } = useSpotify();

  // Sync local state with the data obtained from useSpotify
  useEffect(() => {
    setNewReleases(newReleasesList);
    setPlaylists(featuredPlaylists);
    setCategories(categoriesList);
  }, [newReleasesList, featuredPlaylists, categoriesList]);

  // Render the Discover component
  return (
    <div className="discover">

      {/* Render a DiscoverBlock for new releases */}
      <DiscoverBlock
        text="RELEASED THIS WEEK"
        id="released"
        data={newReleases}
      />

      {/* Render a DiscoverBlock for featured playlists */}
      <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />

      {/* Render a DiscoverBlock for categories */}
      <DiscoverBlock
        text="BROWSE"
        id="browse"
        data={categories}
        imagesKey="icons"
      />
    </div>
  );
};

export default Discover;
