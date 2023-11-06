import { useState } from "react";
import axios from 'axios'

const withDataFetching = WrappedComponent => {
    const WithDataFecthing = ()=>{
        const [data, setData] = useState([]);
        const apiURL = "https://jsonplaceholder.typicode.com/posts";

        const handleDataFetch = ()=>{
            const response = axios.get(apiURL);
            setData(response.data);

        }
        return (
            <WrappedComponent data={data} handleDataFetch = {handleDataFetch}/>
        )
    }
    return WithDataFecthing;
}
export default withDataFetching;