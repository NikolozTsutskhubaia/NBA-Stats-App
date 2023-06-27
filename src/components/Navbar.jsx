import classes from "../modules/App.module.css";

function Navbar() {
  return (
    <nav>
      <div className={classes.nav_bar}>
        <img
          src="src/assets/nba-seeklogo.com.svg"
          alt="Nba Logo"
          className={classes.nba_logo}
        />
        <ul className={classes.nav_items}>
          <li>Players</li>
          <li>Stats</li>
          <li>Ranking</li>
          <li>Teams</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
