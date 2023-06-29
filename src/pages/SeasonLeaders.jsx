import classes from "../modules/App.module.css";
import Navbar from "../components/Navbar.jsx";
import {
  TopScorers,
  TopAssists,
  TopRebounders,
} from "../services/SeasonLeaders.service.jsx";
import { useEffect, useState } from "react";

const SeasonLeaders = () => {
  const [topScorers, setTopScorers] = useState([]);
  const [topAssists, setTopAssists] = useState([]);
  const [topRebounders, setTopRebounders] = useState([]);
  const [currentSeason, setCurrentSeason] = useState("2023");

  useEffect(() => {
    const fetchData = async () => {
      let topScorersResponse = await TopScorers(
        `https://nba-stats-db.herokuapp.com/api/playerdata/topscorers/total/season/${currentSeason}/`
      );
      setTopScorers(topScorersResponse.results);

      let topAssistsResponse = await TopAssists(
        `https://nba-stats-db.herokuapp.com/api/top_assists/totals/${currentSeason}/`
      );
      setTopAssists(topAssistsResponse.results);

      let topReboundersResponse = await TopRebounders(
        `https://nba-stats-db.herokuapp.com/api/top_rebounds/totals/${currentSeason}/`
      );
      setTopRebounders(topReboundersResponse.results);
    };

    fetchData();
  }, [currentSeason]);
  return (
    <>
      <Navbar />
      <main className={classes.leaders_main}>
        <div className={classes.container}>
          <div className={classes.leaders_section}>
            <div className={classes.year_selector}>
              <select
                onChange={(e) => {
                  setCurrentSeason(e.target.value);
                }}
              >
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
              </select>
            </div>
            <div className={classes.player_stats}>
              <div>
                <h1 className={classes.leaders_h1}>SCORING LEADERS</h1>
                <hr className={classes.leaders_hr} />
                {topScorers.slice(0, 10).map((scorer) => (
                  <div key={scorer.id} className={classes.player_info}>
                    <span>{scorer.player_name}</span>
                    <span className={classes.stats}>{scorer.PTS}</span>
                  </div>
                ))}
              </div>
              <div>
                <h1 className={classes.leaders_h1}>ASSISTS LEADERS</h1>
                <hr className={classes.leaders_hr} />
                {topAssists.slice(0, 10).map((player) => (
                  <div key={player.id} className={classes.player_info}>
                    <span>{player.player_name}</span>
                    <span className={classes.stats}>{player.AST}</span>
                  </div>
                ))}
              </div>
              <div>
                <h1 className={classes.leaders_h1}>REBOUNDS LEADERS</h1>
                <hr className={classes.leaders_hr} />
                {topRebounders.slice(0, 10).map((rebounder) => (
                  <div key={rebounder.id} className={classes.player_info}>
                    <span>{rebounder.player_name}</span>
                    <span className={classes.stats}>{rebounder.TRB}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SeasonLeaders;
