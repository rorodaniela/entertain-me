import { useMutation, useQuery, useReactiveVar } from "@apollo/client";
import { useHistory, useParams } from "react-router";
import { favoriteMovies, favoriteSeries } from "../vars/favorites";
import Swal from 'sweetalert2'
import {
    MOVIEBYID,
    DELETEMOVIE,
    DELETESERIE,
    GETALL,
    SERIEBYID
} from "../config/query";

function Detail() {
    let query
    let queryDelete
    let result;

    const history = useHistory()
    const {id, category} = useParams()
    const favMovies = useReactiveVar(favoriteMovies);
    const favSeries = useReactiveVar(favoriteSeries);

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
        Swal.fire({
            title: `Are you sure want to remove this?`,
            showCancelButton: true,
            confirmButtonText: `Delete`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                deleted({
                    variables: { itemId: { _id: result._id } },
                });
                history.push("/");
            }
        });
        
    }

    const handleFavorite = () => {
        let existingData
        if (category === "Movie") {
            const double = favMovies.filter(el => {
                return el.title === data.movieById.title
            })
            if (double.length  > 0) {
                Swal.fire({
                    icon: "error",
                    title: `${data.movieById.title} already exist`,
                    timer: 1500,
                    showConfirmButton: false,
                });
            }else {
                existingData = favoriteMovies()
                favoriteMovies([result, ...existingData]);
                Swal.fire({
                    icon: "success",
                    title: `${data.movieById.title} saved to your favorites`,
                    timer: 1500,
                    showConfirmButton: false,
                });
            }
        } else if (category === "Serie") {
            const double2 = favSeries.filter((el) => {
                return el.title === data.serieById.title;
            });
            if (double2.length > 0) {
                Swal.fire({
                    icon: "error",
                    title: `${data.serieById.title} already exist`,
                    timer: 1500,
                    showConfirmButton: false,
                });
            } else {
                existingData = favoriteSeries();
                favoriteSeries([result, ...existingData]);
                Swal.fire({
                    icon: "success",
                    title: `${data.serieById.title} saved to your favorites`,
                    timer: 1500,
                    showConfirmButton: false,
                });
            }
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