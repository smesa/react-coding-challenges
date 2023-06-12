// We're importing our API configuration, axios for making HTTP requests, our custom httpClient, and the SongEntity class.
import apiConfig from "../config/config";
import axios from "axios";
import httpClient from "../api/http-client";
import SongEntity from "./../../domain/entities/song.entity";

// The getSpotyfyTokenService function is responsible for obtaining an access token from Spotify's API.
// It first attempts to get the token from the session storage.
// If the token doesn't exist or is expired, it makes a request to the '/api/token' endpoint to get a new token.
const getSpotyfyTokenService = async () => {
  // This code gets token info from the session storage if it exists.
  let { expirationDate, access_token } = JSON.parse(
    sessionStorage.getItem("token") || "{}"
  );

  // This code checks if the token is still valid and returns it if it is.
  if (new Date(expirationDate) > new Date()) {
    return access_token;
  }

  // This code runs if no valid token is found in the session storage. It attempts to get a new token from the API.
  try {
    const response = await axios.post(
      "/api/token",
      new URLSearchParams({
        grant_type: "client_credentials",
        client_id: apiConfig.clientId,
        client_secret: apiConfig.clientSecret,
      })
    );

    const { expires_in, access_token } = response.data;

    // determine the expiration date
    const expirationDate = new Date();
    expirationDate.setSeconds(expirationDate.getSeconds() + expires_in);

    // save the token and expiration date in the session storage
    const tokenToSave = {
      access_token,
      expirationDate,
    };

    sessionStorage.setItem("token", JSON.stringify(tokenToSave));

    return access_token;
  } catch (error) {
    console.error("Error getting the token: ", error);
  }

  return null;
};

// The getNewReleasesService function gets the new releases from Spotify's API using the token.
const getNewReleasesService = async () => {
  const token = await getSpotyfyTokenService();

  const http = httpClient(apiConfig.baseUrl);
  const response = await http.get(`/browse/new-releases`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const { albums: { items = [] } = {} } = response.data || {};
  return SongEntity.fromJSONArray(items);
};

// The getFeatutedPlaylistsService function gets the featured playlists from Spotify's API using the token.
const getFeatutedPlaylistsService = async () => {
  const token = await getSpotyfyTokenService();

  const http = httpClient(apiConfig.baseUrl);
  const response = await http.get(`/browse/featured-playlists`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const { playlists: { items = [] } = {} } = response.data || {};
  return SongEntity.fromJSONArray(items);
};

// The getCategoriesService function gets the categories from Spotify's API using the token.
const getCategoriesService = async () => {
  const token = await getSpotyfyTokenService();

  const http = httpClient(apiConfig.baseUrl);
  const response = await http.get(`/browse/categories`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const { categories: { items = [] } = {} } = response.data || {};
  return SongEntity.fromJSONArray(items);
  
};

export {
  getSpotyfyTokenService,
  getNewReleasesService,
  getFeatutedPlaylistsService,
  getCategoriesService,
};
