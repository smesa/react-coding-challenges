import axios from 'axios';

const DEFAULT_HEADERS = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
};

// We're creating a function named httpClient. This function uses axios to create a new HTTP client.
// This client is pre-configured with a baseURL, which will be prepended to any URLs that we request.
// It also has pre-configured headers, which will be used in all requests unless other headers are provided.
const httpClient = (baseURL, headers) => axios.create({
    baseURL: baseURL,
    headers: headers || DEFAULT_HEADERS,
});

export default httpClient;
