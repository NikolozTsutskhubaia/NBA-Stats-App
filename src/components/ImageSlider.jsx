import React from "react";
import classes from "../modules/App.module.css";
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

// const slideImages = [
//   {
//     url: "https://www.shutterstock.com/image-illustration/watercolor-seamless-pattern-vintage-flowers-600w-601900247.jpg",
//     caption: "First Slide",
//   },
//   {
//     url: "https://www.shutterstock.com/image-illustration/watercolor-seamless-pattern-vintage-flowers-600w-601900247.jpg",
//     caption: "Second Slide",
//   },
//   {
//     url: "https://www.shutterstock.com/image-illustration/watercolor-seamless-pattern-vintage-flowers-600w-601900247.jpg",
//     caption: "Third Slide",
//   },
// ];

// const divStyle = {
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   height: "400px",
//   backgroundSize: "cover",
//   backgroundColor: "#6d6a6a",
// };

// const spanStyle = {
//   fontSize: "20px",
//   background: "#efefef",
//   color: "#000000",
// };

// function ImageSlider() {
//   return (
//     <>
//       <div className={classes.mt_500}>
//         <Fade>

//           {slideImages.map((image, index) => {
//             <div key={index}>

//               <div
//                 style={{ ...divStyle, backgroundImage: `url(${image.url})` }}
//               >

//                 <span style={spanStyle}>{image.caption}</span>
//               </div>
//             </div>;
//           })}
//         </Fade>
//       </div>
//     </>
//   );
// }

export default ImageSlider;
