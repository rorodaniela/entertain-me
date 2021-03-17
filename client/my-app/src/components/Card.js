import { useHistory } from "react-router";

function Card(props) {
    
    const history = useHistory()
    const GoToDetail = () => {
        history.push(`/detail/${props.data.__typename}/${props.data._id}`);
    }
    const rating = Math.floor(props.data.popularity);
    const popularity = Array(rating).fill().map((el, i) => i + 1)

    return (
        <div className="d-flex flex-row" style={{ margin: "5px" }}>
            <button onClick={GoToDetail} style={{ border: 0, width: "235px" }}>
                <div className="card" style={{ width: "235 px" }}>
                    <img
                        src={props.data.poster_path}
                        className="card-img-top"
                        alt={props.data.title}
                        style={{ width: "221px", height: "250px" }}
                    />
                    <div className="card-body">
                        <h5
                            className="card-title text-center"
                            style={{ fontSize: "15px" }}
                        >
                            {props.data.title}
                        </h5>
                        <div className="flex d-flex ">
                            {
                                popularity.map((el) => {
                                    return <i className="fas fa-star"></i>
                                })
                            }
                        </div>
                    </div>
                </div>
            </button>
        </div>
    );
}

export default Card