import classes from "../modules/App.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className={classes.nav_bar}>
        <Link to={"/"}>
          <img
            src="src/assets/nba-seeklogo.com.svg"
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
