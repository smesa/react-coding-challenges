// We're importing the useCallback hook from React.
// This hook returns a memoized version of the callback function that only changes if one of the dependencies has changed.
import { useCallback } from "react";
import GetNewReleasesUseCase from "./../../application/usecases/getNewReleases.usecase";
import GetFeaturedPlaylistsUseCase from "./../../application/usecases/getFeaturedPlaylists.usecase";
import GetCategoriesUseCase from "./../../application/usecases/getCategories.usecase";

// We're defining a function named SpotifyController. 
// This function accepts an object with a spotifyRepository property as an argument.
// The function returns an object with methods to execute each of the use cases.
function SpotifyController({ spotifyRepository }) {

    // For each use case, we're defining a callback with useCallback.
    // This ensures that the use case is only re-created if spotifyRepository changes.

    // The getNewReleasesUseCase creates a new instance of the GetNewReleasesUseCase class and executes it.
    const getNewReleasesUseCase = useCallback(async () => {
      const useCase = new GetNewReleasesUseCase(spotifyRepository);
      await useCase.execute();
    }, [spotifyRepository]);
  
    // The getFeaturedPlaylistsUseCase creates a new instance of the GetFeaturedPlaylistsUseCase class and executes it.
    const getFeaturedPlaylistsUseCase = useCallback(async () => {
      const useCase = new GetFeaturedPlaylistsUseCase(spotifyRepository);
      await useCase.execute();
    }, [spotifyRepository]);
  
    // The getCategoriesUseCase creates a new instance of the GetCategoriesUseCase class and executes it.
    const getCategoriesUseCase = useCallback(async () => {
      const useCase = new GetCategoriesUseCase(spotifyRepository);
      await useCase.execute();
    }, [spotifyRepository]);

    return {
        getNewReleasesUseCase,
        getFeaturedPlaylistsUseCase,
        getCategoriesUseCase
    }
  
  }
  
  export default SpotifyController;
