import {useEffect, useState} from "react";
import {PlayersBySeason} from "../services/PlayersBySeason.service.jsx";
import Navbar from "../components/Navbar.jsx";
import classes from "../modules/App.module.css";


function Players(){
    const [PlayersBySeasonData, setPlayersBySeasonData] = useState([]);
    const [currentPageUrl, setCurrentPageUrl] = useState('https://nba-stats-db.herokuapp.com/api/playerdata/season/2023/')
    const [prevPageUrl, setPrevPageUrl] = useState('');
    const [nextPageUrl, setNextPageUrl] = useState('');

    useEffect( () => {
        const fetchData = async () => {
            let response  = await PlayersBySeason(currentPageUrl);
            setPlayersBySeasonData(response.results);
            setNextPageUrl(response.next)
            setPrevPageUrl(response.previous)
        }

        fetchData();
    },[currentPageUrl])

    function prevPage() {
        if (prevPageUrl != null){
        setCurrentPageUrl(prevPageUrl)
        }
    }

    function nextPage() {
        if (nextPageUrl != null){
        setCurrentPageUrl(nextPageUrl)
        }
    }

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
                <button onClick={prevPage}>previous</button>
                <button onClick={nextPage}>next</button>
            </main>
            <footer></footer>
        </>
    );
}

export default Players;