import { useState } from "react";
import axios from 'axios'

const withDataFetching = (OriginalComponent) => {
    const EnhancedComponent = ()=>{
        const [data, setData] = useState([]);
        const apiURL = "https://jsonplaceholder.typicode.com/posts";

        const handleDataFetch = ()=>{
            const response = axios.get(apiURL);
            setData(response.data);
        }
        
        return (
            <OriginalComponent data={data} handleDataFetch = {handleDataFetch}/>
        )
    }
    return EnhancedComponent;
}
export default withDataFetching;