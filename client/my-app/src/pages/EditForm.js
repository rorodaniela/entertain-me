import { useMutation, useQuery } from "@apollo/client";
import { useHistory, useParams } from "react-router";
import { GETALL, MOVIEBYID, SERIEBYID, UPDATEMOVIE, UPDATESERIE } from "../config/query";
import FormTemp from "../components/FormTemp"

function EditForm() {
    let query
    let queryUpdate
    let temp;

    const history = useHistory();
    const {id, category} = useParams()
    
    if (category === "Movie") {
        query = MOVIEBYID
        queryUpdate = UPDATEMOVIE;
    } else if (category === "Serie") {
        query = SERIEBYID
        queryUpdate = UPDATESERIE;
    }

    // eslint-disable-next-line
    const [editData, { data: dataEdit }] = useMutation(queryUpdate, {
        refetchQueries: [{ query: GETALL }],
    });

    const { loading, data: oldData } = useQuery(query, {
        variables: {
            userId: id,
        },
    });

    const submitData = (value) => {
        const newData = {
            _id: temp._id,
            title: value.title,
            overview: value.overview,
            poster_path: value.poster_path,
            popularity: value.popularity,
            tags: value.tags,

        };
        console.log(newData, "<< new data");
        editData({
            variables: { input: newData },
        });
        history.push("/");
    };
    if (loading) {
        return <h1>loading...</h1>
    } else {
        if (category === "Movie") {
            temp = oldData.movieById
        } else if (category === "Serie") {
            temp = oldData.serieById
        }
        return (
            <div>
                <FormTemp saveEdit={submitData} category="edit" oldData={temp} />
            </div>
        );
    }
}

export default EditForm;