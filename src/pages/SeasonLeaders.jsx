import Navbar from "../components/Navbar.jsx";
import {TopScorers, TopAssists, TopRebounders} from "../services/SeasonLeaders.service.jsx";
import {useEffect, useState} from "react";

const SeasonLeaders = () => {
    const[topScorers, setTopScorers] = useState([]);
    const[topAssists, setTopAssists] = useState([]);
    const[topRebounders, setTopRebounders] = useState([]);
    const[currentSeason, setCurrentSeason] = useState('2023');

    useEffect(()=>{
        const fetchData = async () => {
            let topScorersResponse  = await TopScorers(`https://nba-stats-db.herokuapp.com/api/playerdata/topscorers/total/season/${currentSeason}/`);
            setTopScorers(topScorersResponse.results);

            let topAssistsResponse = await TopAssists(`https://nba-stats-db.herokuapp.com/api/top_assists/totals/${currentSeason}/`);
            setTopAssists(topAssistsResponse.results);

            let topReboundersResponse = await TopRebounders(`https://nba-stats-db.herokuapp.com/api/top_rebounds/totals/${currentSeason}/`);
            setTopRebounders(topReboundersResponse.results)
        }

        fetchData();
    },[currentSeason])
    return(
        <>
            <Navbar/>
            <main>
                <select onChange={(e)=>{setCurrentSeason(e.target.value)}}>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
                <div>
                    <h1>SCORING LEADERS</h1>
                {topScorers.slice(0,10).map(scorer => <div key={scorer.id}>{scorer.player_name} | Total Points:{scorer.PTS}</div>)}
                </div>
                <div>
                    <h1>ASSISTS LEADERS</h1>
                    {topAssists.slice(0,10).map(player => <div key={player.id}>{player.player_name} | Total Assists:{player.AST}</div>)}
                </div>
                <div>
                    <h1>REBOUNDS LEADERS</h1>
                    {topRebounders.slice(0,10).map(rebounder => <div key={rebounder.id}>{rebounder.player_name} | Total Rebounds:{rebounder.TRB}</div>)}
                </div>
            </main>
        </>
    )
}

export default SeasonLeaders;