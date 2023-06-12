const apiConfig = {
  baseUrl: "https://api.spotify.com/v1",
  authUrl: "https://accounts.spotify.com",
  clientId: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
  clientSecret: process.env.REACT_APP_SPOTIFY_CLIENT_SECRET,
};

export default apiConfig;