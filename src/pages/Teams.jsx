import Navbar from "../components/Navbar.jsx";
import classes from "../modules/App.module.css";

function Teams() {
  return (
    <>
      <Navbar />
      <main className={classes.container}>
        <div className={classes.teams_section}>
          <h1>ALL TEAMS</h1>
          <div className={classes.teams}>
            <div className={classes.teams_div}>
              <span>ATLANTIC</span>
              <ul>
                <li>Boston Celtics</li>
                <li>Brooklyn Nets</li>
                <li>New York Knicks</li>
                <li>Philadelphia 76ers</li>
                <li>Toronto Raptors</li>
              </ul>
            </div>
            <div className={classes.teams_div}>
              <span>CENTRAL</span>
              <ul>
                <li>Chicago Bulls</li>
                <li>Cleveland Cavaliers</li>
                <li>Detroit Pistons</li>
                <li>Indiana Pacers</li>
                <li>Milwaukee Bucks</li>
              </ul>
            </div>
            <div className={classes.teams_div}>
              <span>SOUTHEAST</span>
              <ul>
                <li>Atlanta Hawks</li>
                <li>Charlotte Hornets</li>
                <li>Miami Heat</li>
                <li>Orlando Magic</li>
                <li>Washington Wizards</li>
              </ul>
            </div>
          </div>
          <div className={classes.teams}>
            <div className={classes.teams_div}>
              <span>NORTHWEST</span>
              <ul>
                <li>Denver Nuggets</li>
                <li>Minnesota Timberwolves</li>
                <li>Oklahoma City Thunder</li>
                <li>Portland Trail Blazers</li>
                <li>Utah Jazz</li>
              </ul>
            </div>
            <div className={classes.teams_div}>
              <span>PACIFIC</span>
              <ul>
                <li>Golden State Warriors</li>
                <li>LA Clippers</li>
                <li>Los Angeles Lakers</li>
                <li>Phoenix Suns</li>
                <li>Sacramento Kings</li>
              </ul>
            </div>
            <div className={classes.teams_div}>
              <span>SOUTHWEST</span>
              <ul>
                <li>Dallas Mavericks</li>
                <li>Houston Rockets</li>
                <li>Memphis Grizzlies</li>
                <li>New Orleans Pelicans</li>
                <li>San Antonio Spurs</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Teams;
