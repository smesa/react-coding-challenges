// We're defining a class named GetNewReleasesUseCase.
// This class encapsulates the use case of getting new releases from the Spotify repository.
class GetNewReleasesUseCase {

  // In the constructor, we're injecting the SpotifyRepository instance.
  constructor(spotifyRepository) {
    this.spotifyRepository = spotifyRepository;
  }

  // The execute method is an asynchronous function that uses the spotifyRepository 
  // to fetch the new releases from the Spotify API.
  // As this is an async function, it will return a Promise.
  async execute() {
    return await this.spotifyRepository.getNewReleases();
  }
}

export default GetNewReleasesUseCase;
