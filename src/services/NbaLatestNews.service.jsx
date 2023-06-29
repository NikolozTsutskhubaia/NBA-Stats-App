import axios from "axios";

export async function NbaLatestNewsService() {
  const options = {
    method: "GET",
    url: "https://nba-latest-news.p.rapidapi.com/articles",
    headers: {
      "X-RapidAPI-Key": "b16d8796ffmsh9144793135404a6p11fddbjsn98d18dbf80f4",
      "X-RapidAPI-Host": "nba-latest-news.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
