import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { useHistory, useParams } from "react-router";
import { GETALL, MOVIEBYID, UPDATEMOVIES } from "../config/query";
import FormTemp from "../components/FormTemp"

function EditForm() {
    const history = useHistory();
    const {id} = useParams()

    // eslint-disable-next-line
    const [editData, { data: dataEdit }] = useMutation(UPDATEMOVIES, {
        refetchQueries: [{ query: GETALL }],
    });

    const { loading, data: oldData } = useQuery(MOVIEBYID, {
        variables: {
            userId: id,
        },
    });

    const submitData = (value) => {
        const newData = {
            _id: oldData.movieById._id,
            title: value.title,
            overview: value.overview,
            poster_path: value.poster_path,
            popularity: value.popularity,
            tags: value.tags,

        };
        editData({
            variables: { updateMovie: newData },
        });
        history.push("/");
    };
    if (loading) {
        return <h1>loading...</h1>
    } else {
        return (
            <div>
                <FormTemp saveEdit={submitData} category="edit" oldData={oldData.movieById} />
            </div>
        );
    }
}

export default EditForm;