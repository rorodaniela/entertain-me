import { useMutation, useQuery } from "@apollo/client";
import { useHistory, useParams } from "react-router";
import {MOVIEBYID, DELETEMOVIE, DELETESERIE, GETALL, SERIEBYID} from '../config/query'
import { favoriteMovies, favoriteSeries } from "../vars/favorites";

function Detail() {
    let query
    let queryDelete
    let result;

    const {id, category} = useParams()
    const history = useHistory()

    if (category ==="Movie") {
        query = MOVIEBYID;
        queryDelete = DELETEMOVIE;
    } else if (category === "Serie") {
        query = SERIEBYID;
        queryDelete = DELETESERIE;
        console.log(queryDelete, "<<< query serie");
    }

    const { loading, data } = useQuery(query, {
        variables: {
            userId: id,
        }
    });

    // eslint-disable-next-line
    const [deleted, { data: deleteData }] = useMutation(queryDelete, {
        refetchQueries: [{ query: GETALL }],
    });

    const GoToEdit = () => {
        history.push(`/edit/${category}/${result._id}`);
    }
    
    const handleDelete = () => {
        console.log(result._id, "<<< id serie delete");
        deleted({
            variables: { itemId: {_id: result._id} }
        });
        history.push("/")
    }

    const handleFavorite = () => {
        let existingData
        if (category === "Movie") {
            existingData = favoriteMovies()
            favoriteMovies([result, ...existingData]);
        } else if (category === "Serie") {
            existingData = favoriteSeries()
            favoriteSeries([result, ...existingData]);
        }
        
    }

    if (loading) {

        return <h1> loading..</h1>

    } else if (data){

        if (category === "Movie") {
            result = data.movieById;
        } else if (category === "Serie") {
            result = data.serieById;
        }
        
        return (
        
            <div style={{ marginTop: "13vh" }} className="container">
                <h1> EntertainMe - {category}</h1>
                <br />
                <div className="d-flex flex-row">
                    <img
                        src={result.poster_path}
                        alt={result.title}
                        style={{ width: "30vw", height: "60vh" }}
                    />
                    <div
                        className="card text-black  mb-3"
                        style={{backgroundColor: "#F2F3F4", marginLeft: "30px", height: "60vh", width: "70vw"}}
                    >
                        <div className="card-body" >
                            <h1 className="card-title">{result.title.toUpperCase()}</h1><hr/>
                            <div style={{marginTop: "40px"}}>
                                <p style={{fontWeight: "bold"}}>
                                    Popularity <span style={{fontWeight: "normal", marginLeft: "10px"}}>: {result.popularity} / 5</span>
                                </p>
                                <p style={{fontWeight: "bold"}}>Category <span style={{fontWeight: "normal", marginLeft: "19px"}}>: {result.tags.join(', ')}</span></p>
                                <p style={{fontWeight: "bold"}}>Overview  <span style={{fontWeight: "normal", marginLeft: "19px"}}>: {result.overview}</span></p>
                            </div>
                            <div className="d-flex flex-row-reverse " style={{padding: "5px"}}>
                                <button onClick={handleFavorite} className="btn btn-outline-danger" style={{width: "150px"}}>Add To favorite</button>
                                <button onClick={GoToEdit} className="btn btn-outline-danger" style={{marginRight: "20px", width: "150px"}}>Edit</button>
                                <button style={{border: "none", width: "40px", marginRight: "20px", marginTop:"2px"}}>
                                    <i onClick={handleDelete} className="fas fa-trash-alt fa-2x text-danger" ></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Detail