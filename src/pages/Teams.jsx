import Navbar from "../components/Navbar.jsx";
import classes from "../modules/Teams.module.css";
import Footer from "../components/Footer";

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
                    src="../images/celtics.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/celtics">Boston Celtics</a>
                </li>
                <li>
                  <img
                    src="./nets.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/nets">Brooklyn Nets</a>
                </li>
                <li>
                  <img
                    src="../images/knicks.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/knicks"> New York Knicks</a>
                </li>
                <li>
                  <img
                    src="../images/76ers.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/sixers">Philadelphia 76ers</a>
                </li>
                <li>
                  <img
                    src="../images/raptors.svg"
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
                    src="../images/bulls.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/bulls">Chicago Bulls</a>
                </li>
                <li>
                  <img
                    src="../images/cavs.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/cavaliers">
                    Cleveland Cavaliers
                  </a>
                </li>
                <li>
                  <img
                    src="../images/pistons.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/pistons">Detroit Pistons</a>
                </li>
                <li>
                  <img
                    src="../images/pacers.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/pacers">Indiana Pacers</a>
                </li>
                <li>
                  <img
                    src="../images/bucks.svg"
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
                    src="../images/hawks.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/hawks">Atlanta Hawks</a>
                </li>
                <li>
                  <img
                    src="../images/hornets.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/hornets">Charlotte Hornets</a>
                </li>
                <li>
                  <img
                    src="../images/heat.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/heat">Miami Heat</a>
                </li>
                <li>
                  <img
                    src="../images/magic.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/magic">Orlando Magic</a>
                </li>
                <li>
                  <img
                    src="../images/wizards.svg"
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
                    src="../images/nuggets.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/nuggets">Denver Nuggets</a>
                </li>
                <li>
                  <img
                    src="../images/timberwolves.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/timberwolves">
                    Minnesota Timberwolves
                  </a>
                </li>
                <li>
                  <img
                    src="../images/thunder.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/thunder">
                    Oklahoma City Thunder
                  </a>
                </li>
                <li>
                  <img
                    src="../images/blazers.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/blazers">
                    Portland Trail Blazers
                  </a>
                </li>
                <li>
                  <img
                    src="../images/jazz.svg"
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
                    src="../images/warriors.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/warriors">
                    Golden State Warriors
                  </a>
                </li>
                <li>
                  <img
                    src="../images/clippers.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/clippers">LA Clippers</a>
                </li>
                <li>
                  <img
                    src="../images/lakers.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/lakers">Los Angeles Lakers</a>
                </li>
                <li>
                  <img
                    src="../images/suns.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/suns">Phoenix Suns</a>
                </li>
                <li>
                  <img
                    src="../images/kings.svg"
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
                    src="../images/mavs.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/mavericks">Dallas Mavericks</a>
                </li>
                <li>
                  <img
                    src="../images/rockets.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/rockets">Houston Rockets</a>
                </li>
                <li>
                  <img
                    src="../images/grizzlies.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/grizzlies">Memphis Grizzlies</a>
                </li>
                <li>
                  <img
                    src="../images/pelicans.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/pelicans">
                    New Orleans Pelicans
                  </a>
                </li>
                <li>
                  <img
                    src="../images/spurs.svg"
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
                    src="../images/celtics.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/celtics">Boston Celtics</a>
                </li>
                <li>
                  <img
                    src="../images/nets.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/nets">Brooklyn Nets</a>
                </li>
                <li>
                  <img
                    src="../images/knicks.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/knicks"> New York Knicks</a>
                </li>
                <li>
                  <img
                    src="../images/76ers.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/sixers">Philadelphia 76ers</a>
                </li>
                <li>
                  <img
                    src="../images/raptors.svg"
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
                    src="../images/bulls.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/bulls">Chicago Bulls</a>
                </li>
                <li>
                  <img
                    src="../images/cavs.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/cavaliers">
                    Cleveland Cavaliers
                  </a>
                </li>
                <li>
                  <img
                    src="../images/pistons.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/pistons">Detroit Pistons</a>
                </li>
                <li>
                  <img
                    src="../images/pacers.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/pacers">Indiana Pacers</a>
                </li>
                <li>
                  <img
                    src="../images/bucks.svg"
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
                    src="../images/hawks.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/hawks">Atlanta Hawks</a>
                </li>
                <li>
                  <img
                    src="../images/hornets.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/hornets">Charlotte Hornets</a>
                </li>
                <li>
                  <img
                    src="../images/heat.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/heat">Miami Heat</a>
                </li>
                <li>
                  <img
                    src="../images/magic.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/magic">Orlando Magic</a>
                </li>
                <li>
                  <img
                    src="../images/wizards.svg"
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
                    src="../images/nuggets.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/nuggets">Denver Nuggets</a>
                </li>
                <li>
                  <img
                    src="../images/timberwolves.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/timberwolves">
                    Minnesota Timberwolves
                  </a>
                </li>
                <li>
                  <img
                    src="../images/thunder.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/thunder">
                    Oklahoma City Thunder
                  </a>
                </li>
                <li>
                  <img
                    src="../images/blazers.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/blazers">
                    Portland Trail Blazers
                  </a>
                </li>
                <li>
                  <img
                    src="../images/jazz.svg"
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
                    src="../images/warriors.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/warriors">
                    Golden State Warriors
                  </a>
                </li>
                <li>
                  <img
                    src="../images/clippers.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/clippers">LA Clippers</a>
                </li>
                <li>
                  <img
                    src="../images/lakers.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/lakers">Los Angeles Lakers</a>
                </li>
                <li>
                  <img
                    src="../images/suns.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/suns">Phoenix Suns</a>
                </li>
                <li>
                  <img
                    src="../images/kings.svg"
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
                    src="../images/mavs.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/mavericks">Dallas Mavericks</a>
                </li>
                <li>
                  <img
                    src="../images/rockets.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/rockets">Houston Rockets</a>
                </li>
                <li>
                  <img
                    src="../images/grizzlies.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/grizzlies">Memphis Grizzlies</a>
                </li>
                <li>
                  <img
                    src="../images/pelicans.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  <a href="https://www.nba.com/pelicans">
                    New Orleans Pelicans
                  </a>
                </li>
                <li>
                  <img
                    src="../images/spurs.svg"
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
