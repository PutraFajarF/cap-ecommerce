import axios from 'axios';

const baseURL = 'https://63043b070de3cd918b43bc9b.mockapi.io/';

const mockApi = axios.create({
  baseURL: String(baseURL)
});

export default mockApi;