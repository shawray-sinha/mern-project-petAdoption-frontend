import Axios from "axios";
import { useState, useEffect } from "react";
import Cards from './Cards';
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";

function CatAdoption() {
  const [data, setData] = useState([])

  useEffect(() => {
    Axios.get("https://mern-project-petadoption-backend.onrender.com/catRoute")
      .then((res) => {
        if (res.status === 200) {
          setData(res.data);
        }
        else {
          Promise.reject();
        }
      })
      .catch((err) => { alert(err); })
  }, [])

  const listCards = () => {
    return data.filter((val) => {
      return search.toLowerCase() === ''
        ? val
        : val.breed.toLowerCase().includes(search);
    }).map((val) => {
      return <Cards obj={val} />
    })
  }
  const [search,setSearch]= useState('');

  return (
    <div class="body">
      <h1 className="text-center mb-4 head">Available Cats for Adoption</h1>
      <div className="container mt-4 "  >
        <Form class="m-4 " style={{ width: "30%" }} >
          <FormControl
            type="text"
            placeholder="Search the Breed you are looking for..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </Form>
        <div class="row">
          {listCards()}
        </div>
      </div>

    </div>
  )
}
export default CatAdoption;