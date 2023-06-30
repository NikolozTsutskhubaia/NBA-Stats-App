import axios from "axios";

export async function NbaLatestNewsService() {
  const options = {
    method: "GET",
    url: "https://nba-latest-news.p.rapidapi.com/articles",
    headers: {
      "X-RapidAPI-Key": "5cedd758b3msh5da4cd09cb8f609p1248b2jsn9d195f919c9b",
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
