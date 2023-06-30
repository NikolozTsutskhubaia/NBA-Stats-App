import { useEffect, useState } from "react";
import { PlayersBySeason } from "../services/PlayersBySeason.service.jsx";
import Navbar from "../components/Navbar.jsx";
import classes from "../modules/Players.module.css";
import Footer from "../components/Footer";

function Players() {
  const [PlayersBySeasonData, setPlayersBySeasonData] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://nba-stats-db.herokuapp.com/api/playerdata/season/2023/"
  );
  const [prevPageUrl, setPrevPageUrl] = useState("");
  const [nextPageUrl, setNextPageUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      let response = await PlayersBySeason(currentPageUrl);
      setPlayersBySeasonData(response.results);
      setNextPageUrl(response.next);
      setPrevPageUrl(response.previous);
    };

    fetchData();
  }, [currentPageUrl]);

  function prevPage() {
    if (prevPageUrl != null) {
      setCurrentPageUrl(prevPageUrl);
    }
  }

  function nextPage() {
    if (nextPageUrl != null) {
      setCurrentPageUrl(nextPageUrl);
    }
  }

  return (
    <>
      <header></header>
      <Navbar />
      <main>
        <div className={classes.container}>
          <div className={classes.tables_container}>
            <div className={classes.table_headers}>
              <span>NAME</span>
              <span>AGE</span>
              <span>GAMES</span>
              <span>FG</span>
              <span>FG%</span>
            </div>
            <div className={classes.table_container}>
              <table>
                <tbody>
                  {PlayersBySeasonData.map((player) => (
                    <tr key={player.id}>
                      <td>{player.player_name}</td>
                      <td>{player.age}</td>
                      <td>{player.games}</td>
                      <td>
                        {player.field_goals}/{player.field_attempts}
                      </td>
                      <td>{player.field_percent}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className={classes.page_buttons}>
            <button onClick={prevPage} className={classes.page_button}>
              Previous
            </button>
            <button onClick={nextPage} className={classes.page_button}>
              Next
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Players;
