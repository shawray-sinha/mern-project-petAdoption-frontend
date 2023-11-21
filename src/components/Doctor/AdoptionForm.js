import { useState } from "react";

function AdoptionForm(props) {

    const [petname, setPetName] = useState(props.petnameValue);
    const [pettype, setPetType] = useState(props.pettypeValue);
    const [appoinmentdate, setAppoinmentDate] = useState(props.appoinmentdateValue);
    const [appoinmenttime, setAppoinmentTime] = useState(props.appoionmenttimeValue);


    const arr = [petname, pettype, appoinmentdate, appoinmenttime];
    const handleclick = () => {
        props.getState(arr);
    }

    return (

        <div>
            <h4 class="head">Fill The Form And We will Reach You Soon</h4>
            <div style={{ maxWidth: "40%", margin: "0px auto" }}>
                <label class="formlabel label">Pet Name</label>
                <input defaultValue={props.petnameValue} onChange={(event) => setPetName(event.target.value)} class="form-control my-3" placeholder="Pet Name " required />
                <label class="formlabel label">Pet Type</label>
                <input defaultValue={props.pettypeValue} onChange={(event) => setPetType(event.target.value)} class="form-control my-3" placeholder="Pet Type" required />
                <label class="formlabel label">Appoinment Date</label>
                <input defaultValue={props.appoinmentdateValue} onChange={(event) => setAppoinmentDate(event.target.value)} type="date" class="form-control my-3" placeholder="Appoinment Date" required />
                <label class="formlabel label">Appoinment Time</label>
                <input defaultValue={props.appoinmenttimeValue} onChange={(event) => setAppoinmentTime(event.target.value)} type="time" class="form-control my-3" placeholder="Enter The Time " required />

                <button onClick={handleclick} class="btn btn-success d-block mx-auto my-3" type="submit">Submit</button>
            </div>
        </div>
    )
}

export default AdoptionForm;