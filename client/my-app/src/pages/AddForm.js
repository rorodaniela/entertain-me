import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useHistory } from "react-router";
import { POSTMOVIE, GETALL } from "../config/query"

function AddForm() {
    const [addData, { data }] = useMutation(POSTMOVIE, {
        refetchQueries: [{query: GETALL}]
    });

    const [input, setInput] = useState({
        title: '',
        popularity: 0,
        overview: '',
        tags: [],
        poster_path: ''
    })

    const history = useHistory()

    const handleChange = (e) => {
        setInput({
           ...input,
           [e.target.name] :e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const dataInput = input
        dataInput.tags = input.tags.split(',')
        dataInput.popularity = parseFloat(input.popularity)
        console.log(dataInput, "<<<");
        addData({
            variables: { newData: dataInput },
        });
        history.push("/")
    }

    return (
        <div className="container" style={{marginTop: "10vh", width: "50vw", backgroundColor: "rgba(0, 0, 0, 0.4)", padding:"50px"}}>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div style={{fontWeight:"bold"}}>
                    <div class="mb-3">
                        <label class="form-label">Title</label>
                        <input onChange={(e) =>handleChange(e)} name="title" type="text" class="form-control"/>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Overview</label>
                        <input onChange={(e) =>handleChange(e)} name="overview" type="text" class="form-control"/>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Poster Path</label>
                        <input onChange={(e) =>handleChange(e)} name="poster_path" type="text" class="form-control"/>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Popularity</label>
                        <input onChange={(e) =>handleChange(e)} name="popularity" type="text" class="form-control"/>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Tags</label>
                        <input onChange={(e) =>handleChange(e)} name="tags" type="text" class="form-control" placeholde="Input Title"/>
                    </div>
                </div>
                    <div id="emailHelp" class="form-text mb-3" style={{color: "black"}}>You can add tag more than 1. Please use " , " as separator.</div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}

export default AddForm