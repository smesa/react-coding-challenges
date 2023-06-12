// We're importing the SpotifyRepository interface from the domain layer.
// This interface defines the methods that a SpotifyRepository must implement.
// We're also importing the services that interact with the Spotify API.
import { SpotifyRepository } from "./../../domain/repository/spotify.repository";
import {
  getNewReleasesService,
  getFeatutedPlaylistsService,
  getCategoriesService,
} from "./../services/spotifyServices";

// We're defining a class named SpotifyRepositoryImpl, which extends the SpotifyRepository.
// This means that it inherits from the SpotifyRepository and must implement its methods.
// This class provides an implementation of the SpotifyRepository for the Spotify API.
class SpotifyRepositoryImpl extends SpotifyRepository {
  
  // The getNewReleases method is an asynchronous function that uses the getNewReleasesService to fetch new releases from the Spotify API.
  async getNewReleases() {
    const response = getNewReleasesService();
    return response;
  }

  // The getFeaturedPlaylists method is an asynchronous function that uses the getFeatutedPlaylistsService to fetch featured playlists from the Spotify API.
  async getFeaturedPlaylists() {
    const response = getFeatutedPlaylistsService();
    return response;
  }

  // The getCategories method is an asynchronous function that uses the getCategoriesService to fetch the categories from the Spotify API.
  async getCategories() {
    const response = getCategoriesService();
    return response;
  }
}

export { SpotifyRepositoryImpl };
