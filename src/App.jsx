import Navbar from "./components/Navbar";
import classes from "./modules/App.module.css";
import { useEffect, useState } from "react";
import { NbaLatestNewsService } from "./services/NbaLatestNews.service.jsx";
import ImageSlider from "./components/ImageSlider";
import Footer from "./components/Footer";

function App() {
  // const [newsData, setNewsData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     let response = await NbaLatestNewsService();
  //     setNewsData(response);
  //     console.log(response);
  //   };
  //   console.log(newsData);
  //   fetchData();
  // }, []);

  return (
    <>
      <Navbar />
      <ImageSlider />
      <main className={classes.container}>
        <div className={classes.news_section}>
          <div className={classes.feed}>
            <h1 className={classes.news_h1}>LATEST NEWS</h1>
            {/* {newsData.map((news) => (
              <div key={news.title} className={classes.news}>
                <div className={classes.news_text}>
                  <a href={news.url}>{news.title}</a>
                  <p>source:{news.source}</p>
                </div>
              </div>
            ))} */}
          </div>
          <div className={classes.news_content}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum id
            odit architecto? Blanditiis vero voluptatum nemo eius laudantium ex
            cumque aliquid in, non, ratione sequi, iste perspiciatis a suscipit
            dolorem.
          </div>
          {/* <div>
            <img
              src="src/assets/nba_news.jpg"
              alt="nba news photo"
              className={classes.nba_news_img}
            />
            <img
              src="src/assets/nba_news_2.jpg"
              alt="nba news photo"
              className={classes.nba_news_img_2}
            />
          </div> */}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
