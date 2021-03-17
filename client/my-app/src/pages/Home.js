import {useQuery} from '@apollo/client'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
import {GETALL} from '../config/query'

function Home() {
    const {loading, data} = useQuery(GETALL)
    
    if (loading) {
        return <h1>loading...</h1>
    } else {
        return (
            <div>
                <Carousel />
                <div className="container" style={{ marginTop: "20px" }}>
                    <h3>MOVIES</h3>

                    <div style={{ overflow: "auto", padding: "10px" }}>
                        <div className="d-flex flex-row">
                            {data.movies?.map((el) => {
                                return <Card data={el} key={el.id} />;
                            })}
                        </div>
                    </div>
                    <br />
                    <h3>SERIES</h3>
                    <div style={{ overflow: "auto", padding: "10px" }}>
                        <div className="d-flex flex-row">
                            {data.series?.map((el) => {
                                return <Card data={el} key={el.id}/>;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default Home;
