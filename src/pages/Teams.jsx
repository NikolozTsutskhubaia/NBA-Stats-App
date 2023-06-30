import Navbar from "../components/Navbar.jsx";
import classes from "../modules/App.module.css";

function Teams() {
  return (
    <>
      <Navbar />
      <main className={classes.container}>
        <div className={classes.teams_section}>
          <h1>ALL TEAMS</h1>
          <div className={classes.teams_one}>
            <div className={classes.teams_div}>
              <span>ATLANTIC</span>
              <ul>
                <li>
                  <img
                    src="src/assets/celtics.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  Boston Celtics
                </li>
                <li>
                  <img
                    src="src/assets/nets.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  Brooklyn Nets
                </li>
                <li>
                  <img
                    src="src/assets/knicks.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  New York Knicks
                </li>
                <li>
                  <img
                    src="src/assets/76ers.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  Philadelphia 76ers
                </li>
                <li>
                  <img
                    src="src/assets/raptors.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  Toronto Raptors
                </li>
              </ul>
            </div>
            <div className={classes.teams_div}>
              <span>CENTRAL</span>
              <ul>
                <li>
                  <img
                    src="src/assets/bulls.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  Chicago Bulls
                </li>
                <li>
                  <img
                    src="src/assets/cavs.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  Cleveland Cavaliers
                </li>
                <li>
                  <img
                    src="src/assets/pistons.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  Detroit Pistons
                </li>
                <li>
                  <img
                    src="src/assets/pacers.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  Indiana Pacers
                </li>
                <li>
                  <img
                    src="src/assets/bucks.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  Milwaukee Bucks
                </li>
              </ul>
            </div>
            <div className={classes.teams_div}>
              <span>SOUTHEAST</span>
              <ul>
                <li>
                  <img
                    src="src/assets/hawks.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  Atlanta Hawks
                </li>
                <li>
                  <img
                    src="src/assets/hornets.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  Charlotte Hornets
                </li>
                <li>
                  <img
                    src="src/assets/heat.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  Miami Heat
                </li>
                <li>
                  <img
                    src="src/assets/magic.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  Orlando Magic
                </li>
                <li>
                  <img
                    src="src/assets/wizards.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  Washington Wizards
                </li>
              </ul>
            </div>
          </div>
          <div className={classes.teams_two}>
            <div className={classes.teams_div}>
              <span>NORTHWEST</span>
              <ul>
                <li>
                  <img
                    src="src/assets/nuggets.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  Denver Nuggets
                </li>
                <li>
                  <img
                    src="src/assets/timberwolves.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  Minnesota Timberwolves
                </li>
                <li>
                  <img
                    src="src/assets/thunder.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  Oklahoma City Thunder
                </li>
                <li>
                  <img
                    src="src/assets/blazers.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  Portland Trail Blazers
                </li>
                <li>
                  <img
                    src="src/assets/jazz.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  Utah Jazz
                </li>
              </ul>
            </div>
            <div className={classes.teams_div}>
              <span>PACIFIC</span>
              <ul>
                <li>
                  <img
                    src="src/assets/warriors.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  Golden State Warriors
                </li>
                <li>
                  <img
                    src="src/assets/clippers.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  LA Clippers
                </li>
                <li>
                  <img
                    src="src/assets/lakers.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  Los Angeles Lakers
                </li>
                <li>
                  <img
                    src="src/assets/suns.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  Phoenix Suns
                </li>
                <li>
                  <img
                    src="src/assets/kings.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  Sacramento Kings
                </li>
              </ul>
            </div>
            <div className={classes.teams_div}>
              <span>SOUTHWEST</span>
              <ul>
                <li>
                  <img
                    src="src/assets/mavs.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  Dallas Mavericks
                </li>
                <li>
                  <img
                    src="src/assets/rockets.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  Houston Rockets
                </li>
                <li>
                  <img
                    src="src/assets/grizzlies.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  Memphis Grizzlies
                </li>
                <li>
                  <img
                    src="src/assets/pelicans.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  New Orleans Pelicans
                </li>
                <li>
                  <img
                    src="src/assets/spurs.svg"
                    alt="Denver Nuggers logo"
                    className={classes.team_logo}
                  />
                  San Antonio Spurs
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Teams;
