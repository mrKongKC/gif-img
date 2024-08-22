import axios from 'axios';

const API_KEY = "r5XBAaFbwoE0OQAd8ZilqBOGQ3Hm4NV4";
const BASE_URL = 'https://api.giphy.com/v1/gifs';

export const fetchGIFs = async (searchTerm) => {
    const response = await axios.get(`${BASE_URL}/search`, {
        params: {
            api_key: API_KEY,
            q: searchTerm,
            limit: 30,
        },
    });

    return response.data.data;
};
