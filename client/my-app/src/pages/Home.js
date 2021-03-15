import {useQuery} from '@apollo/client'
import {GETALL} from '../config/query'

function Home() {
    const {loading, error, data} = useQuery(GETALL)
    console.log(loading, error, data, "<<< data")
    return (
        <div >
            <h1>Ini dari home...</h1>
            {
                JSON.stringify(data)
            }
        </div>
    );
}

export default Home;
