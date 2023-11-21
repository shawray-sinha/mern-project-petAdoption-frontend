import React, { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"


function Login() {

    const history = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e) {
        e.preventDefault();

        try {

            await axios.post("https://mern-project-petadoption-backend.onrender.com/loginRoute/login", {
                email, password
            })
                .then(res => {
                    if (res.data === "exist") {
                        history("/home")
                    }
                    else if (res.data === "notexist") {
                        alert("User have not sign up")
                    }
                })
                .catch(e => {
                    alert("wrong details")
                    console.log(e);
                })

        }
        catch (e) {
            console.log(e);

        }

    }


    return (
        <center>
            <div className="login">

                <h1>Login</h1>

                <form action="POST" style={{ width: "30%" }} >
                    <input type="email" class="form-control" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" required />
                    <input type="password" class="form-control" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  required/>
                    <button type="submit" class="btn btn-primary mt-2" onClick={submit} >submit</button>
                </form>

                <br />
                <p>OR</p>
                <br />

                <Link to="/signup" >Signup Page</Link>

            </div>
        </center>
    )
}

export default Login