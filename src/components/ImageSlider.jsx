import React from "react";
import classes from "../modules/ImageSlider.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import nba_news from "../assets/nba_news.jpg";
import nba_news_2 from "../assets/nba_news_2.jpg";
import nba_news_3 from "../assets/nba_news_3.jpg";

function ImageSlider() {
  return (
    <>
      <Carousel className={classes.main_slide}>
        <div>
          <img src={nba_news} className={classes.slider_img} />
        </div>
        <div>
          <img src={nba_news_2} className={classes.slider_img} />
        </div>
        <div>
          <img src={nba_news_3} className={classes.slider_img} />
        </div>
      </Carousel>
    </>
  );
}

export default ImageSlider;
