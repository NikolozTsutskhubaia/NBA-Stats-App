import axios from "axios";

export async function TopAssists(url){
    let res = await axios.get(url).then(async (response) => {return response.data})
    return(res) ;
}

export async function TopScorers(url){
    let res = await axios.get(url).then(async (response) => {return response.data})
    return(res) ;
}

export async function TopRebounders(url){
    let res = await axios.get(url).then(async (response) => {return response.data})
    return(res) ;
}