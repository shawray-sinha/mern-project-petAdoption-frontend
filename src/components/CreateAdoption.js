import { useState } from 'react';
import Axios from 'axios';
import AdoptionForm from './AdoptionForm';
import Form from "react-bootstrap/Form";


function CreateAdoption(props) {
    const [arr, setArr] = useState([]);


    const handlesubmit = () => {
        alert("creating");
        const data = { pet: arr[0], breed: arr[1], age: arr[2], place: arr[3], gender: arr[4], email: arr[5], number: arr[6] };
        Axios.post("https://mern-project-petadoption-backend.onrender.com/adoptionRoute/create-adoption", data)
            .then((res) => {
                if (res.status === 200) {
                    alert("Record added to DB");
                    window.location.reload();
                }
                else {
                    alert("res.status:" + res.status)
                    Promise.reject();
                }
            })
            .catch((err) => console.log(err));
    }


    const getState = (out) => {
        setArr(out);
    }
    return (
        <Form onSubmit={handlesubmit}>
            <AdoptionForm getState={getState} />
        </Form>
    )
}
export default CreateAdoption;