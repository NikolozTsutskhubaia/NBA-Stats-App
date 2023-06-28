import Navbar from "./components/Navbar";
import {PlayersBySeason} from "./services/PlayersBySeason.service.jsx";
import {useEffect, useState} from "react";
import classes from "./modules/App.module.css";

function App() {

    const [PlayersBySeasonData, setPlayersBySeasonData] = useState([]);

    useEffect( () => {
        const fetchData = async () => {
            let response  = await PlayersBySeason();
            setPlayersBySeasonData(response);
        }

        fetchData();
    },[])
  return (
    <>
      <header></header>
      <Navbar />
      <main>
          <div className={classes.table_container}>
          <table>
              <thead>
              <tr>
                  <th>NAME</th>
                  <th>AGE</th>
                  <th>GAMES</th>
                  <th>FG</th>
                  <th>FG%</th>
              </tr>
              </thead>
              <tbody>
              {PlayersBySeasonData.map(player =>
                  <tr key={player.id}>
                      <td>{player.player_name}</td>
                      <td>{player.age}</td>
                      <td>{player.games}</td>
                      <td>{player.field_goals}/{player.field_attempts}</td>
                      <td>{player.field_percent}%</td>
                  </tr>
              )}
              </tbody>
          </table>
          </div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
