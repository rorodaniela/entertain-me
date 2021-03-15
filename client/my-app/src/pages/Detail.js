import { useQuery } from "@apollo/client";
import { useParams } from "react-router";
import {MOVIEBYID} from '../config/query'

function Detail() {
    const {id, category} = useParams()
    console.log(id, "<<<<")
    const { loading, error, data } = useQuery(MOVIEBYID, {
        variables: {
            userId: id,
        }
    });
    if (loading) {
        return <h1> loading..</h1>
    }
    return (
        <div style={{ marginTop: "13vh" }} className="container">
            <h1> EntertainMe - {category}</h1>
            <br />
            <div className="d-flex flex-row">
                <img
                    src={data.movieById.poster_path}
                    style={{ width: "30vw", height: "60vh" }}
                />
                <div
                    class="card text-black  mb-3"
                    style={{backgroundColor: "#F2F3F4", marginLeft: "30px", height: "60vh", width: "70vw"}}
                >
                    <div class="card-body" >
                        <h1 class="card-title">{data.movieById.title}</h1><hr/>
                        <div style={{marginTop: "40px"}}>
                            <p style={{fontWeight: "bold"}}>
                                Popularity <span style={{fontWeight: "normal", marginLeft: "10px"}}>: {data.movieById.popularity} / 5</span>
                            </p>
                            <p style={{fontWeight: "bold"}}>Category <span style={{fontWeight: "normal", marginLeft: "19px"}}>: {data.movieById.tags.join(', ')}</span></p>
                            <p style={{fontWeight: "bold"}}>Overview  <span style={{fontWeight: "normal", marginLeft: "19px"}}>: {data.movieById.overview}</span></p>
                        </div>
                        <div className="d-flex flex-row-reverse " style={{marginTop: "50px"}}>
                            <button className="btn btn-outline-danger" style={{width: "150px"}}>Add To favorite</button>
                            <button className="btn btn-outline-danger" style={{marginRight: "20px", width: "150px"}}>Edit</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail