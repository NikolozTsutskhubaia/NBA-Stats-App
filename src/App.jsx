import Navbar from "./components/Navbar";
import {useEffect, useState} from "react";
import {NbaLatestNewsService} from "./services/NbaLatestNews.service.jsx";

function App() {

    const[newsData, setNewsData] = useState([])

    useEffect(()=>{
        const fetchData = async () => {
            let response  = await NbaLatestNewsService();
            setNewsData(response);
            console.log(response)
        }
        console.log(newsData)
        fetchData()
    },[])


    return(
        <>
            <Navbar/>
            <main>
                {
                    newsData.map(news =>
                        <div key={news.title}><a href={news.url}>{news.title} / source:{news.source}</a></div>
                )
                }
            </main>
            <footer>
            </footer>
        </>
    )
}

export default App;
