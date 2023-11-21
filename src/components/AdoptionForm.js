import { useState } from "react";

function AdoptionForm(props) {

    const [pet, setPet] = useState();
    const [breed, setBreed] = useState();
    const [age, setAge] = useState();
    const [place, setPlace] = useState();
    const [gender, setGender] = useState();
    const [email, setEmail] = useState();
    const [number, setNumber] = useState();

    const arr = [pet, breed, age, place, gender, email, number];
    const handleclick = () => {
        props.getState(arr);
    }

    return (

        <div>
            <h4 class="head">Fill The Form And We will Reach You Soon</h4>
            <div style={{ maxWidth: "40%", margin: "0px auto" }}>

                <div class="mt-3"> <h4 class="head">Animal Details:</h4>
                    <input onChange={(event) => setPet(event.target.value)} class="form-control my-3" placeholder="what are you adopting ? Dog or Cat " required />
                    <input onChange={(event) => setBreed(event.target.value)} class="form-control my-3" placeholder="Enter The Breed as mentioned on website" required />
                    <input onChange={(event) => setAge(event.target.value)} class="form-control my-3" placeholder="Enter the age as mentioned on website" required />
                    <input onChange={(event) => setPlace(event.target.value)} class="form-control my-3" placeholder="Enter the place " required />
                    <input onChange={(event) => setGender(event.target.value)} class="form-control my-3" placeholder="Enter the gender " required />
                </div>
                <div> <h4 class="head">Your Details:</h4>
                    <input onChange={(event) => setEmail(event.target.value)} type="email" class="form-control my-3" placeholder="Enter your email-Id " required />
                    <input onChange={(event) => setNumber(event.target.value)} type="tel" class="form-control my-3" placeholder="Enter the Number " required />
                </div>
                <button onClick={handleclick} class="btn btn-success d-block mx-auto my-3" type="submit">Submit</button>
            </div>
        </div>
    )
}
export default AdoptionForm;