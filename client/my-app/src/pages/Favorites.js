import { useReactiveVar } from "@apollo/client";
import { favoriteMovies, favoriteSeries } from "../vars/favorites";
import Card from "../components/Card";

function Favorites() {
    const favMovies = useReactiveVar(favoriteMovies)
    const favSeries = useReactiveVar(favoriteSeries)
   
        return (
            <div>
                <div className="container" style={{ marginTop: "100px" }}>
                    <h3>FAVORITE MOVIES</h3>
                    <div style={{ padding: "10px" }}>
                        <div className="row">
                            {favMovies?.map((el) => {
                                return (
                                    <div className="col-3">
                                        <Card data={el} key={el.id} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <h3>FAVORITE SERIES</h3>
                    <div style={{ padding: "10px" }}>
                        <div className="row">
                            {favSeries?.map((el) => {
                                return (
                                    <div className="col-3">
                                        <Card data={el} key={el.id} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );

}

export default Favorites;
