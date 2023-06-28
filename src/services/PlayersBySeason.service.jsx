import axios from "axios";

export const PlayersBySeason = async () => {
        let res = await axios.get("https://nba-stats-db.herokuapp.com/api/playerdata/season/2023").then(async (response) => {return response.data.results})
    return(res) ;

}