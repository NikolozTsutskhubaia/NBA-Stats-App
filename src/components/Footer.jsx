
import classes from "../modules/Footer.module.css";

function Footer() {
  return (
    <>
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
          <div className={classes.footer_section_2_text}>
            <ul>
              <li>
                <span>
                  © 2023 NBA Media Ventures, LLC. All rights reserved.
                </span>
              </li>
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
              <li>
                <h3>
                  <b>Warner</b> Media
                </h3>
              </li>
            </ul>
          </div>
          <div className={classes.footer_section_2_icons}>
            <a href="https://www.facebook.com/nba/">
              <img
                src="../assets/fb.svg"
                alt="icon"
                className={classes.social_media_icon}
              />
            </a>
            <a href="https://www.instagram.com/nba/">
              <img
                src="../assets/instagram.svg"
                alt="icon"
                className={classes.social_media_icon}
              />
            </a>
            <a href="https://www.snapchat.com/add/nba">
              <img
                src="../assets/snapchat.svg"
                alt="icon"
                className={classes.social_media_icon}
              />
            </a>
            <a href="https://www.tiktok.com/@nba?lang=en">
              <img
                src="../assets/tiktok.svg"
                alt="icon"
                className={classes.social_media_icon}
              />
            </a>
            <a href="https://twitter.com/NBA?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
              <img
                src="../assets/twitter.svg"
                alt="icon"
                className={classes.social_media_icon}
              />
            </a>
            <a href="https://www.youtube.com/@NBA">
              <img
                src="../assets/youtube.svg"
                alt="icon"
                className={classes.social_media_icon}
              />
            </a>
            <a href="https://www.twitch.tv/nba">
              <img
                src="../assets/twitch.svg"
                alt="icon"
                className={classes.social_media_icon}
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
