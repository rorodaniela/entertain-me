import { useEffect, useState } from "react";

function FormTemp(props) {

    const [title, setTitle] = useState("")
    const [popularity, setPopularity] = useState("");
    const [overview, setOverview] = useState("");
    const [tags, setTags] = useState("");
    const [poster_path, setPosterPath] = useState("");

    useEffect(() => {
        if (props.category === "edit") {
            setTitle(props.oldData.title);
            setPopularity(props.oldData.popularity);
            setOverview(props.oldData.overview);
            setTags(props.oldData.tags.join(","));
            setPosterPath(props.oldData.poster_path);
        }
        // eslint-disable-next-line
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault();
        const dataInput = {
            title,
            popularity: parseFloat(popularity),
            overview,
            tags: tags.split(","),
            poster_path,
        };
        if (props.category === "add") {
            props.saveAdd(dataInput)
        } else if (props.category === "edit") {
            props.saveEdit(dataInput);
        }
    };

    return (
        <div
            className="container"
            style={{
                marginTop: "10vh",
                width: "50vw",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                padding: "50px",
            }}
        >
            <form onSubmit={(e) => handleSubmit(e)}>
                <div style={{ fontWeight: "bold" }}>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input
                            onChange={(e) => setTitle(e.target.value)}
                            name="title"
                            type="text"
                            className="form-control"
                            value={title}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Overview</label>
                        <input
                            onChange={(e) => setOverview(e.target.value) }
                            name="overview"
                            type="text"
                            className="form-control"
                            value={overview}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Poster Path</label>
                        <input
                            onChange={(e) => setPosterPath(e.target.value) }
                            name="poster_path"
                            type="text"
                            className="form-control"
                            value={poster_path}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Popularity</label>
                        <input
                            onChange={(e) => setPopularity(e.target.value) }
                            name="popularity"
                            type="text"
                            className="form-control"
                            value={popularity}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Tags</label>
                        <input
                            onChange={(e) => setTags(e.target.value) }
                            name="tags"
                            type="text"
                            className="form-control"
                            value={tags}
                        />
                    </div>
                </div>
                <div
                    id="emailHelp"
                    className="form-text mb-3"
                    style={{ color: "black" }}
                >
                    You can add tag more than 1. Please use " , " as separator.
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default FormTemp