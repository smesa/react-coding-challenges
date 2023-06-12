// We're defining a class named GetCategoriesUseCase.
// This class encapsulates the use case of getting categories from the Spotify repository.
// The use case pattern separates the business logic from the UI and data access logic.
class GetCategoriesUseCase {
  
  // In the constructor, we're injecting the SpotifyRepository instance.
  // This is an example of dependency injection, which makes the code more flexible and testable.
  constructor(spotifyRepository) {
    this.spotifyRepository = spotifyRepository;
  }

  // The execute method is an asynchronous function that uses the spotifyRepository 
  // to fetch the categories from the Spotify API.
  // As this is an async function, it returns a Promise.
  async execute() {
    return await this.spotifyRepository.getCategories();
  }
}

export default GetCategoriesUseCase;
