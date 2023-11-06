import withDataFetching from "./withDataFetching"

const FetchAndDisplayData = (props)=>{
    return(
        <>
            <h3>Fetch and display data using HOC</h3>
            <button onClick={props.handleDataFetch}>Fetch Data HOC</button>
            {/* {props.data.map((item)=>{
                return(
                    <li>
                        {item.title}
                    </li>
                )
            })} */}
            {props.data}
        </>
    )
}
export default withDataFetching(FetchAndDisplayData);