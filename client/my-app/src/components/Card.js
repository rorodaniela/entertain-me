import { useHistory } from "react-router";

function Card(props) {
    const history = useHistory()
    const GoToDetail = () => {
        history.push(`/detail/Movies/${props.movie._id}`)
    }
    const rating = Math.floor(props.movie.popularity);
    console.log(rating, "<>>rating")
    const popularity = Array(rating).fill().map((el, i) => i + 1)

    return (
        <div className="d-flex flex-row" style={{ marginRight: "20px" }}>
            <button onClick={GoToDetail} style={{ border: 0, width: "235px" }}>
                <div className="card" style={{ width: "235 px" }}>
                    <img
                        src={props.movie.poster_path}
                        className="card-img-top"
                        alt={props.movie.title}
                        style={{ width: "221px", height: "250px" }}
                    />
                    <div className="card-body">
                        <h5 className="card-title text-center" style={{fontSize: "15px"}}>
                            {props.movie.title}
                        </h5>
                        <div className="flex d-flex justify-content-between">
                            <i class="fas fa-star"></i>
                            {
                                popularity.map((el) => {
                                    return <i class="fas fa-star"></i>;
                                })
                            }

                            {String(props.movie.popularity).length > 1 ? (
                                <i class="fas fa-star"></i>
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                </div>
            </button>
        </div>
    );
}

export default Card