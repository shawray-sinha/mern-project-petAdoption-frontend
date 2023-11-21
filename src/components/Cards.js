import { Link } from 'react-router-dom';


function Cards(props) {

    return (

        <div className="col-md-3 mb-4 cardborder mt-3 " key={props.obj._id}>

            <div className="card ">
                <img src={props.obj.image} style={{ width: "auto", height: "300px" }} className="card-img-top" alt={props.obj.name} />
                <div className="card-body">
                    <h5 className="card-text" style={{ color: "blue" }} >Breed: {props.obj.breed}</h5>
                    <p className="card-text">Age: {props.obj.age}</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                        {props.obj.place}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gender-ambiguous" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M11.5 1a.5.5 0 0 1 0-1h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-3.45 3.45A4 4 0 0 1 8.5 10.97V13H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V14H6a.5.5 0 0 1 0-1h1.5v-2.03a4 4 0 1 1 3.471-6.648L14.293 1H11.5zm-.997 4.346a3 3 0 1 0-5.006 3.309 3 3 0 0 0 5.006-3.31z" />
                        </svg>
                        {props.obj.gender}
                    </p>

                    <p className="card-text">{props.obj.description}</p>
                    <button href="#" className="btn btn-primary"  >
                        <Link to="/createadoption" class='nav-link' >Adopt {props.obj.breed}</Link>
                    </button>

                </div>
            </div>
        </div>
    )
}
export default Cards;