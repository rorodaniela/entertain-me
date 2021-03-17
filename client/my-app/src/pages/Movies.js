import {GETMOVIES} from "../config/query"
import { useQuery } from "@apollo/client";
import Carousel from "../components/Carousel"
import Card from "../components/Card"

function Movies() {
    const { loading, data } = useQuery(GETMOVIES);
    if (loading) {
        return <h1>loading...</h1>;
    } else if (data){
        return (
            <div>
                <Carousel />
                <div className="container" style={{ marginTop: "20px" }}>
                    <h3>MOVIES</h3>
                    <div style={{ padding: "10px" }}>
                        <div className="row">
                            {data.movies?.map((el) => {
                                return (
                                    <div className ="col-3">
                                        <Card data={el} key={el.id} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Movies;
