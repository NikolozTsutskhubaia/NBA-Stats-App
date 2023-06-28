import axios from "axios";

export const PlayersBySeason = async (url) => {
        let res = await axios.get(url).then(async (response) => {return response.data})
    return(res) ;

}