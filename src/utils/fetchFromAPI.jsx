import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: '50',
  },
 headers: {
  'X-RapidAPI-Key':'3289fab521mshb5e8d79149007e2p17095fjsn1e75c8c14204',
  'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
}
};


export const fetchFromAPI = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    // Handle the error, log it, or return a custom error message
    console.error("API Error:", error);
    throw error; // Rethrow the error for the caller to handle
  }
};