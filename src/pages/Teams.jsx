import Navbar from "../components/Navbar.jsx";
import classes from "../modules/Teams.module.css";
import Footer from "../components/Footer";
import denverIMG from "../assets/nuggets.svg";
import netsIMG from "../assets/nets.svg";
import pacersIMG from "../assets/pacers.svg";
import pelicansIMG from "../assets/pelicans.svg";
import pistonsIMG from "../assets/pistons.svg";
import raptorsIMG from "../assets/raptors.svg";
import rocketsIMG from "../assets/rockets.svg";
import spursIMG from "../assets/spurs.svg";
import sunsIMG from "../assets/suns.svg";
import thunderIMG from "../assets/thunder.svg";
import timberwolvesIMG from "../assets/timberwolves.svg";
import warriorsIMG from "../assets/warriors.svg";
import wizardsIMG from "../assets/wizards.svg";
import sixersIMG from "../assets/76ers.svg";
import blazersIMG from "../assets/blazers.svg";
import bucksIMG from "../assets/bucks.svg";
import bullsIMG from "../assets/bulls.svg";
import cavsIMG from "../assets/cavs.svg";
import celticsIMG from "../assets/celtics.svg";
import grizzliesIMG from "../assets/grizzlies.svg";
import hawksIMG from "../assets/hawks.svg";
import hornetsIMG from "../assets/hornets.svg";
import jazzIMG from "../assets/jazz.svg";
import kingsIMG from "../assets/kings.svg";
import knicksIMG from "../assets/knicks.svg";
import lakersIMG from "../assets/lakers.svg";
import mavsIMG from "../assets/mavs.svg";
import magicIMG from "../assets/magic.svg";
import heatIMG from "../assets/heat.svg";
import clippersIMG from "../assets/clippers.svg"

function Teams() {
  return (
    <>
      <Navbar />
      <main className={classes.container}>
        <div className={`${classes.teams_section} ${classes.desktop}`}>
          <h1>ALL TEAMS</h1>
          <hr />
          <div className={classes.teams_one}>
            <div className={classes.teams_div}>
              <span>ATLANTIC</span>
              <ul>
                <li>
                  <img
                    src={celticsIMG}
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/celtics">Boston Celtics</a>
                </li>
                <li>
                  <img
                    src={netsIMG}
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/nets">Brooklyn Nets</a>
                </li>
                <li>
                  <img
                    src={knicksIMG}
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/knicks"> New York Knicks</a>
                </li>
                <li>
                  <img
                    src={sixersIMG}
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/sixers">Philadelphia 76ers</a>
                </li>
                <li>
                  <img
                    src={raptorsIMG}
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/raptors">Toronto Raptors</a>
                </li>
              </ul>
            </div>
            <div className={classes.teams_div}>
              <span>CENTRAL</span>
              <ul>
                <li>
                  <img
                    src={bullsIMG}
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/bulls">Chicago Bulls</a>
                </li>
                <li>
                  <img
                    src={cavsIMG}
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/cavaliers">
                    Cleveland Cavaliers
                  </a>
                </li>
                <li>
                  <img
                    src={pistonsIMG}
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/pistons">Detroit Pistons</a>
                </li>
                <li>
                  <img
                    src={pacersIMG}
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/pacers">Indiana Pacers</a>
                </li>
                <li>
                  <img
                    src={bucksIMG}
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/bucks">Milwaukee Bucks</a>
                </li>
              </ul>
            </div>
            <div className={classes.teams_div}>
              <span>SOUTHEAST</span>
              <ul>
                <li>
                  <img
                    src={hawksIMG}
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/hawks">Atlanta Hawks</a>
                </li>
                <li>
                  <img
                    src={hornetsIMG}
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/hornets">Charlotte Hornets</a>
                </li>
                <li>
                  <img
                    src={heatIMG}
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/heat">Miami Heat</a>
                </li>
                <li>
                  <img
                    src={magicIMG}
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/magic">Orlando Magic</a>
                </li>
                <li>
                  <img
                    src={wizardsIMG}
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/wizards">Washington Wizards</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={`${classes.teams_two} ${classes.desktop}`}>
            <div className={classes.teams_div}>
              <span>NORTHWEST</span>
              <ul>
                <li>
                  <img
                    src={denverIMG}
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/nuggets">Denver Nuggets</a>
                </li>
                <li>
                  <img
                    src={timberwolvesIMG}
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/timberwolves">
                    Minnesota Timberwolves
                  </a>
                </li>
                <li>
                  <img
                    src={thunderIMG}
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/thunder">
                    Oklahoma City Thunder
                  </a>
                </li>
                <li>
                  <img
                    src={blazersIMG}
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/blazers">
                    Portland Trail Blazers
                  </a>
                </li>
                <li>
                  <img
                    src={jazzIMG}
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/jazz">Utah Jazz</a>
                </li>
              </ul>
            </div>
            <div className={classes.teams_div}>
              <span>PACIFIC</span>
              <ul>
                <li>
                  <img
                    src={warriorsIMG}
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/warriors">
                    Golden State Warriors
                  </a>
                </li>
                <li>
                  <img
                    src={clippersIMG}
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/clippers">LA Clippers</a>
                </li>
                <li>
                  <img
                    src={lakersIMG}
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/lakers">Los Angeles Lakers</a>
                </li>
                <li>
                  <img
                    src={sunsIMG}
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/suns">Phoenix Suns</a>
                </li>
                <li>
                  <img
                    src={kingsIMG}
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/kings">Sacramento Kings</a>
                </li>
              </ul>
            </div>
            <div className={classes.teams_div}>
              <span>SOUTHWEST</span>
              <ul>
                <li>
                  <img
                    src={mavsIMG}
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/mavericks">Dallas Mavericks</a>
                </li>
                <li>
                  <img
                    src={rocketsIMG}
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/rockets">Houston Rockets</a>
                </li>
                <li>
                  <img
                    src={grizzliesIMG}
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/grizzlies">Memphis Grizzlies</a>
                </li>
                <li>
                  <img
                    src={pelicansIMG}
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/pelicans">
                    New Orleans Pelicans
                  </a>
                </li>
                <li>
                  <img
                    src={spursIMG}
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/spurs">San Antonio Spurs</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={`${classes.mobile} ${classes.teams_section}`}>
          <h1>ALL TEAMS</h1>
          <hr />
          <div className={classes.teams_one}>
            <div className={classes.teams_div}>
              <span>ATLANTIC</span>
              <ul>
                <li>
                  <img
                    src={celticsIMG}
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/celtics">Boston Celtics</a>
                </li>
                <li>
                  <img
                    src={netsIMG}
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/nets">Brooklyn Nets</a>
                </li>
                <li>
                  <img
                    src={knicksIMG}
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/knicks"> New York Knicks</a>
                </li>
                <li>
                  <img
                    src={sixersIMG}
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/sixers">Philadelphia 76ers</a>
                </li>
                <li>
                  <img
                    src="../assets/raptors.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/raptors">Toronto Raptors</a>
                </li>
              </ul>
            </div>
            <div className={classes.teams_div}>
              <span>CENTRAL</span>
              <ul>
                <li>
                  <img
                    src="../assets/bulls.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/bulls">Chicago Bulls</a>
                </li>
                <li>
                  <img
                    src="../assets/cavs.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/cavaliers">
                    Cleveland Cavaliers
                  </a>
                </li>
                <li>
                  <img
                    src="../assets/pistons.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/pistons">Detroit Pistons</a>
                </li>
                <li>
                  <img
                    src="../assets/pacers.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/pacers">Indiana Pacers</a>
                </li>
                <li>
                  <img
                    src="../assets/bucks.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/bucks">Milwaukee Bucks</a>
                </li>
              </ul>
            </div>
            <div className={classes.teams_div}>
              <span>SOUTHEAST</span>
              <ul>
                <li>
                  <img
                    src="../assets/hawks.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/hawks">Atlanta Hawks</a>
                </li>
                <li>
                  <img
                    src="../assets/hornets.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/hornets">Charlotte Hornets</a>
                </li>
                <li>
                  <img
                    src="../assets/heat.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/heat">Miami Heat</a>
                </li>
                <li>
                  <img
                    src="../assets/magic.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/magic">Orlando Magic</a>
                </li>
                <li>
                  <img
                    src="../assets/wizards.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/wizards">Washington Wizards</a>
                </li>
              </ul>
            </div>
            <div className={classes.teams_div}>
              <span>NORTHWEST</span>
              <ul>
                <li>
                  <img
                    src="../assets/nuggets.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/nuggets">Denver Nuggets</a>
                </li>
                <li>
                  <img
                    src="../assets/timberwolves.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/timberwolves">
                    Minnesota Timberwolves
                  </a>
                </li>
                <li>
                  <img
                    src="../assets/thunder.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/thunder">
                    Oklahoma City Thunder
                  </a>
                </li>
                <li>
                  <img
                    src="../assets/blazers.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/blazers">
                    Portland Trail Blazers
                  </a>
                </li>
                <li>
                  <img
                    src="../assets/jazz.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/jazz">Utah Jazz</a>
                </li>
              </ul>
            </div>
            <div className={classes.teams_div}>
              <span>PACIFIC</span>
              <ul>
                <li>
                  <img
                    src="../assets/warriors.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/warriors">
                    Golden State Warriors
                  </a>
                </li>
                <li>
                  <img
                    src="../assets/clippers.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/clippers">LA Clippers</a>
                </li>
                <li>
                  <img
                    src="../assets/lakers.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/lakers">Los Angeles Lakers</a>
                </li>
                <li>
                  <img
                    src="../assets/suns.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/suns">Phoenix Suns</a>
                </li>
                <li>
                  <img
                    src="../assets/kings.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/kings">Sacramento Kings</a>
                </li>
              </ul>
            </div>
            <div className={classes.teams_div}>
              <span>SOUTHWEST</span>
              <ul>
                <li>
                  <img
                    src="../assets/mavs.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/mavericks">Dallas Mavericks</a>
                </li>
                <li>
                  <img
                    src="../assets/rockets.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/rockets">Houston Rockets</a>
                </li>
                <li>
                  <img
                    src="../assets/grizzlies.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/grizzlies">Memphis Grizzlies</a>
                </li>
                <li>
                  <img
                    src="../assets/pelicans.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/pelicans">
                    New Orleans Pelicans
                  </a>
                </li>
                <li>
                  <img
                    src="../assets/spurs.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/spurs">San Antonio Spurs</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Teams;
