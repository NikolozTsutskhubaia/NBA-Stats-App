import classes from "../modules/Navbar.module.css";
import { Link } from "react-router-dom";
import NBAlogoURL from "../assets/nba-seeklogo.com.svg";

function Navbar() {
  return (
    <nav>
      <div className={classes.nav_bar}>
        <Link to={"/"}>
          <img
            src={NBAlogoURL}
            alt="Nba Logo"
            className={classes.nba_logo}
          />
        </Link>
        <ul className={classes.nav_items}>
          <Link to={"/players"}>
            <li>Players</li>
          </Link>
          <Link to={"/season_leaders"}>
            <li>Season Leaders</li>
          </Link>
          <Link to={"/teams"}>
            <li>Teams</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
