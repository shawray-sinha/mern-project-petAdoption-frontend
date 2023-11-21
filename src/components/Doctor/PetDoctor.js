import './style.css'
import vet from '../../Images/vet.jpg';
import care from '../../Images/care.jpg';
import food from '../../Images/food.jpg';
import health from '../../Images/health.jpg';
import wellbeing from '../../Images/wellbeing.jpg';
import { useState } from 'react';
import AdoptionForm from './AdoptionForm';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Form from "react-bootstrap/Form";

function PetDoctor() {

    const [arr, setArr] = useState([]);


    const handlesubmit = () => {
        alert("creating");
        const data = { petname: arr[0], pettype: arr[1], appoinmentdate: arr[2], appoinmenttime: arr[3] };
        Axios.post("https://mern-project-petadoption-backend.onrender.com/petdoctorRoute/create-appoinment", data)
            .then((res) => {
                if (res.status === 200){
                    alert("Appoinment Booked");
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
        <div>
            <center>
                <br></br><br></br>
                <h1> Online Vet Help Is Just a Click Away </h1>
                <br></br>
                <p>Get timely advice from our licensed veterinary team and leave with a personalized consult report. Virtual consults are a supplement to clinic visits</p> <br></br>
                <img src={vet} alt='image5' ></img><br></br><br></br>
                <h2>No Question Is Too Big or Small</h2>
                <br></br><br></br>
                <div className="appointment">
                    <h2>Book an Online Vet Appointment</h2>
                    <Form onSubmit={handlesubmit}>
                        <AdoptionForm getState={getState} />
                    </Form>
                </div>
                <div class="head h3">
                    To Know about your appoinment <Link to="/appoinmentlist" class='nav-link ' >click Appoinment list</Link>
                </div>

                <div class="tips">
                    <div class="tip-card">
                        <img src={health} alt="image1" width="300px" height="300px"></img>
                        <br></br><br></br>
                        <h3>Health Concerns</h3><br></br>
                        <p>Online vets and vet techs talk through your pet’s symptoms and provide information about illnesses, allergies, injuries and more.</p>
                    </div>
                    <div class="tip-card">
                        <img src={wellbeing} alt="image2" width="300px" height="300px"></img>
                        <br></br><br></br>
                        <h3>Lifelong Well-Being</h3><br></br>
                        <p>Discover the secrets of a well-groomed and happy pet.Learn how to support your pet’s well-being at every age, from supplements to dental care.</p>
                    </div>
                    <div class="tip-card">
                        <img src={food} alt="image3" width="300px" height="300px"></img>
                        <br></br><br></br>
                        <h3>Food and Nutrition</h3><br></br>
                        <p>We'll help take the guesswork out of food and treats for your cat or dog , with healthy and happy tips for your furry friends.</p>
                    </div>
                    <div class="tip-card">
                        <img src={care} alt="image4" width="300px" height="300px"></img>
                        <br></br><br></br>
                        <h3>Behavior Questions</h3><br></br>
                        <p>Find out how to bring out your pet's best behavior, plus tips for everything from potty training to walking on a leash.</p>
                    </div>
                </div>
                <br></br><br></br>
                <h2>Ask a Virtual Vet </h2><br></br>
                <button class="button"  >
                    <Link to="/petdoctor" class='nav-link '>Connect</Link>
                </button> <br></br> <br></br>
            </center>
        </div>
    )
}
export default PetDoctor;