import React from 'react';
import image1 from '../Images/image1.jpg';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div class="pt-3" style={{ backgroundColor: '#FAF8F1' }}>
      
      <div className="container">
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          {/* Indicators */}
          <ol className="carousel-indicators">
            <li data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
          </ol>

          {/* Wrapper for slides */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={image1} alt="1" className="d-block w-100" />
              <div className="carousel-caption">

                <h1 style={{ fontWeight: 'bolder' }}>Be a proud foster parent</h1>
                <Link to="/dog-adoption" class="btn"> Adopt Now</Link>
              </div>
            </div>

            <div className="carousel-item">
              <img src="https://vetmed.illinois.edu/wp-content/uploads/2021/04/pc-kanwal-brush.jpg" alt="2" className="d-block w-100" />
              <div className="carousel-caption">
                <h1 style={{ fontWeight: 'bolder' }}>Consult a vet</h1>
                <Link to="/petdoctor" class="btn" >Book your Appoinment</Link>
              </div>
            </div>

            <div className="carousel-item">
              <img src="https://us.123rf.com/450wm/andriiborodai/andriiborodai2309/andriiborodai230900151/212134814-healthy-diet-for-pets-dog-and-cat-mealtime.jpg?ver=6" alt="3" className="d-block w-100" />
              <div className="carousel-caption">
                <p>We Are trusted</p>
                <h1 style={{ fontWeight: 'bolder' }}>Buy food and medicines</h1>
                <Link to="/petfood" class="btn">Buy Now</Link>
              </div>
            </div>
          </div>

          {/* Left and right controls */}
          <a className="carousel-control-prev" href="#myCarousel" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </a>
          <a className="carousel-control-next" href="#myCarousel" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </a>
        </div>
      </div>
      <div className="container">
        <p style={{ color: '#C58940', fontFamily: 'cursive', fontSize: '2rem' }}><b>About us </b><i class="fa fa-duotone fa-bullhorn fa-shake fa-lg"></i></p>
        <p style={{ color: '#C58940', fontFamily: 'cursive' }} >At Paws&Tails<i className='fa fa-solid fa-paw'></i>, we are passionate about connecting loving families with adorable pets in need of forever homes. Our mission is to create a world where every pet has a chance to experience the joy of a caring family and a warm home.
          <br />
          Founded on the belief that every animal deserves love and compassion, our dedicated team works tirelessly to rescue, rehabilitate, and rehome pets from various backgrounds. From playful puppies and kittens to wise seniors, we offer a diverse selection of animals, each with its unique personality and charm.</p>
      </div>
    </div>



  );
}
export default Home;

