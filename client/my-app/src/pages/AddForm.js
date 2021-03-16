import { useMutation } from "@apollo/client";
import { useHistory, useParams } from "react-router";
import { POSTMOVIE, GETALL } from "../config/query";
import FormTemp  from "../components/FormTemp"

function AddForm() {
    const history = useHistory();
    // // const {category} = useParams()

    // eslint-disable-next-line
    const [addData, { data }] = useMutation(POSTMOVIE, {
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