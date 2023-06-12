// We're defining a class named GetFeaturedPlaylistsUseCase.
// This class encapsulates the use case of getting featured playlists from the Spotify repository.
class GetFeaturedPlaylistsUseCase {
  
  // In the constructor, we're injecting the SpotifyRepository instance.
  constructor(spotifyRepository) {
    this.spotifyRepository = spotifyRepository;
  }

  // The execute method is an asynchronous function that uses the spotifyRepository 
  // to fetch the featured playlists from the Spotify API.
  // As this is an async function, it returns a Promise.
  async execute() {
    return await this.spotifyRepository.getFeaturedPlaylists();
  }
}

export default GetFeaturedPlaylistsUseCase;
