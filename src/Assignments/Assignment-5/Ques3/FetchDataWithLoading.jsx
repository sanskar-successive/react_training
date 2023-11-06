import { useState } from "react";

const FetchDatWithLoading = ()=>{
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleDataFetch = async ()=>{
        setIsLoading(true);
        const apiURL = "https://jsonplaceholder.typicode.com/posts";
        const res = await fetch(apiURL);
        const apiData = await res.json();
        setTimeout(()=>{
            setData(apiData);
            setIsLoading(false);
        },2000)
        
    }
    return (
        <>
            <h3>Fetching data with loading indicator</h3>
            <button onClick={handleDataFetch} >Fetch data</button>

            {isLoading && <h4>Loading..</h4>}
            {!isLoading && data.map((item)=>{
                return (
                    <li>
                        {item.title}
                    </li>
                )
            })}
        </>
    )
}
export default FetchDatWithLoading;