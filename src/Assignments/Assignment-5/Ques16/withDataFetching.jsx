import { useState } from "react";
import axios from 'axios'

const withDataFetching = (OriginalComponent) => {
    const EnhancedComponent = ()=>{
        const [apiData, setApiData] = useState([]);
        const apiURL = "https://jsonplaceholder.typicode.com/posts";
        const handleDataFetch = async ()=>{
            const response = await axios.get(apiURL);
            setApiData(response.data);
        }
        return (
            <OriginalComponent data={apiData} handleDataFetch={handleDataFetch}/>
        )
    }
    return EnhancedComponent;
}
export default withDataFetching;