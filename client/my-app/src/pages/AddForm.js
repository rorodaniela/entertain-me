import { useMutation } from "@apollo/client";
import { useHistory, useParams } from "react-router";
import { POSTMOVIE, POSTSERIE, GETALL } from "../config/query";
import FormTemp  from "../components/FormTemp"

function AddForm() {
    let query

    const history = useHistory();
    const {category} = useParams()

    if (category === "Movies") {
        query = POSTMOVIE;
    } else if (category === "Series") {
        query = POSTSERIE;
    }
    // eslint-disable-next-line
    const [addData, { data }] = useMutation(query, {
        refetchQueries: [{ query: GETALL }],
    });    

    const submitData = (value) => {
        addData({
            variables: { newData: value },
        });
        history.push("/");
    };

    return (
        <div>
            <FormTemp saveAdd={submitData} category="add"/>
        </div>
    );
}

export default AddForm;