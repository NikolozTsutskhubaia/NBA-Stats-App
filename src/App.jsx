import Navbar from "./components/Navbar";
import classes from "./modules/App.module.css";
import { useEffect, useState } from "react";
import { NbaLatestNewsService } from "./services/NbaLatestNews.service.jsx";
import ImageSlider from "./components/ImageSlider";

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
          <ImageSlider />
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
      <footer>
        <div className={classes.footer_section}>
          <ul>
            <b>NBA ORGANIZATION</b>
            <li>NBA Official</li>
            <li>NBA Careers</li>
          </ul>
          <ul>
            <b>NBA INITIATIVES</b>
            <li>NBA Cares</li>
            <li>Jr. NBA</li>
            <li>NBA Foundation</li>
            <li>Social Justice Coalition</li>
          </ul>
          <ul>
            <b>ACROSS THE LEAGUE</b>
            <li>NBA Communications</li>
            <li>Lockervision</li>
            <li>NBA Transactions</li>
          </ul>
          <ul>
            <b>SHOP</b>
            <li>Global Stores</li>
            <li>NYC Store</li>
            <li>NBA Auctions</li>
            <li>NBA Photostore</li>
          </ul>
        </div>
        <hr />
        <div className={classes.footer_section_2}>
          <div>
            <ul>
              <li>© 2023 NBA Media Ventures, LLC. All rights reserved.</li>
              <li>
                Privacy Policy | Terms of Use | Accessibility and Closed
                Captions | Customer Support | Manage Cookies
              </li>
              <li>
                If you are having difficulty accessing any content on this
                website, please visit our Accessibility page.
              </li>
              <li>
                NBA.com is part of Warner Media, LLC’s Turner Sports &
                Entertainment Digital Network
              </li>
              <li>Warner Media Logo</li>
            </ul>
          </div>
          <div>
            <img
              src="src/assets/lakers.svg"
              alt="icon"
              className={classes.team_logo}
            />
            <img
              src="src/assets/lakers.svg"
              alt="icon"
              className={classes.team_logo}
            />
            <img
              src="src/assets/lakers.svg"
              alt="icon"
              className={classes.team_logo}
            />
            <img
              src="src/assets/lakers.svg"
              alt="icon"
              className={classes.team_logo}
            />
            <img
              src="src/assets/lakers.svg"
              alt="icon"
              className={classes.team_logo}
            />
            <img
              src="src/assets/lakers.svg"
              alt="icon"
              className={classes.team_logo}
            />
            <img
              src="src/assets/lakers.svg"
              alt="icon"
              className={classes.team_logo}
            />
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
