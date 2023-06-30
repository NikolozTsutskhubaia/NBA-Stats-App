import Navbar from "./components/Navbar";
import classes from "./modules/App.module.css";
import { useEffect, useState } from "react";
import { NbaLatestNewsService } from "./services/NbaLatestNews.service.jsx";

function App() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let response = await NbaLatestNewsService();
      setNewsData(response);
      console.log(response);
    };
    console.log(newsData);
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <main className={classes.news_section}>
        <div className={classes.container}>
          {/* <img
            src="src/assets/nba_news.jpg"
            alt="nba news photo"
            className={classes.nba_news_img}
          />
          <img
            src="src/assets/nba_news_2.jpg"
            alt="nba news photo"
            className={classes.nba_news_img_2}
          /> */}
          <div className={classes.feed}>
            <h1 className={classes.news_h1}>LATEST</h1>
            {newsData.map((news) => (
              <div key={news.title} className={classes.news}>
                <div className={classes.news_text}>
                  <a href={news.url}>{news.title}</a>
                  <p>source:{news.source}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
