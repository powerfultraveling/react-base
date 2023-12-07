import axios from "axios";

const ACCESS_KEY = "2X8UNd5jRa78A-kqszFu-QfvsSK7w3UvzuOgtN8XNBM";
const BASE_URL = "https://api.unsplash.com/search/photos";

async function fetchImage(term: string) {
  const response = await axios({
    baseURL: BASE_URL,
    headers: { Authorization: `Client-ID ${ACCESS_KEY}` },
    params: {
      query: term,
    },
  });

  return response.data;
}

export default fetchImage;
