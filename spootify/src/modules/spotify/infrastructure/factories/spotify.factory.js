// We're importing the SpotifyRepositoryImpl class, which is an implementation of the SpotifyRepository interface.
import {SpotifyRepositoryImpl} from './../repository/spotify.repository'

// We're defining an object named envs.
// This object maps different environments (like 'local' and 'test') to corresponding instances of SpotifyRepositoryImpl.
// This allows us to use different configurations based on the current environment.
const envs = {
  local: new SpotifyRepositoryImpl(),
  // test: new SpotifyRepositoryImpl(),
};

const env = process.env.ENVIRONMENT;

// We're defining and exporting a function named spotifyControllerCreator.
// This function returns the SpotifyRepositoryImpl instance that corresponds to the current environment.
// If no matching instance is found, it will create a new instance of SpotifyRepositoryImpl.
// This provides a way to easily switch between different configurations based on the environment.
export const spotifyControllerCreator = () =>
  envs[env] || new SpotifyRepositoryImpl();
