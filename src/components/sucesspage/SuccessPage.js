
function SuccessPage() {
  return (
    <div style={{ backgroundColor: '#FAF8F1' }}>
      <div className="container mt-3">
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          {/* Indicators */}
          <ol className="carousel-indicators">
            <li data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="3"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="4"></li>

          </ol>

          {/* Wrapper for slides */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://animalhaven.org/hubfs/Success%20Stories/Elina/IMG_8548--feature.jpg"  alt="1" className="d-block w-100" />
              <div className="carousel-caption fa fa-beat" style={{ backgroundColor: '#C58940', marginTop: '50px' }}>
                <p style={{ color: '#FAF8F1', fontSize: '1rem', fontFamily: 'cursive' }}><b style={{ fontSize: '2rem' }}>"</b>Elina (now Margot) arrived at Tails&Paws<i className="fa fa-solid fa-paw"></i> all the way from Saudia Arabia, where she’d been rescued from the streets.

                  Missing her front left leg and suffering from a hernia, we can only imagine what her life had been like before. But Elina’s affectionate, happy spirit shined through and she was adopted in no time!<b style={{ fontSize: '2rem' }}>"</b></p>
              </div>
            </div>

            <div className="carousel-item">
              <img src="https://animalhaven.org/hubfs/Success%20Stories/Melody/image_72192707--feature.jpg" alt="2" className="d-block w-100" />
              <div className="carousel-caption fa fa-beat" style={{ backgroundColor: '#C58940', marginTop: '50px' }}>
                <p style={{ color: '#FAF8F1', fontSize: '1rem', fontFamily: 'cursive' }}><b style={{ fontSize: '2rem' }}>"</b>We adopted Stella (formerly Melody) in July of 2021. We traveled from Upstate NY to meet her and we instantly fell in love and brought her home that same day.

                  She has really taken a liking to living upstate as well as having a built in best friend her brother Frank the Dachshund!<b style={{ fontSize: '2rem' }}>"</b></p>
              </div>
            </div>

            <div className="carousel-item">
              <img src="https://animalhaven.org/hs-fs/hubfs/Success%20Stories/Pearl/pearl-norissa.jpeg?width=746&height=600&name=pearl-norissa.jpeg" alt="3" className="d-block w-100" />
              <div className="carousel-caption fa fa-beat" style={{ backgroundColor: '#C58940', marginTop: '50px' }}>
                <p style={{ color: '#FAF8F1', fontSize: '1rem', fontFamily: 'cursive' }}><b style={{ fontSize: '2rem' }}>"</b>When Anthony received a wonderful job opportunity, Pearl moved to Washington DC with her parents. She had been diagnosed with heart failure but Norissa and Anthony ensured that she was always comfortable. She received top quality medical care at Tails&Paws<i className="fa fa-solid fa-paw"></i> and also explored holistic care. Sadly, on June 6th, Pearl crossed the rainbow bridge.<b style={{ fontSize: '2rem' }}>"</b></p>
              </div>
            </div>

            <div className="carousel-item">
              <img src="https://animalhaven.org/hs-fs/hubfs/Success%20Stories/Bill/c_bill.jpg?width=776&height=776&name=c_bill.jpg" alt="4" className="d-block w-100" />
              <div className="carousel-caption fa fa-beat" style={{ backgroundColor: '#C58940', marginTop: '50px' }}>
                <p style={{ color: '#FAF8F1', fontSize: '1rem', fontFamily: 'cursive' }}><b style={{ fontSize: '2rem' }}>"</b>My partner and I went to Tails&Paws<i className="fa fa-solid fa-paw"></i> looking for a senior cat to bring into our home, and volunteers suggested we meet Bill, a 10-year-old who had recently been released from a 6-month quarantine after sustaining an animal bite in another shelter. We knew from his calm disposition and the love that the volunteers expressed for him that Bill was our perfect pet! We were able to take him home that same day.<b style={{ fontSize: '2rem' }}>"</b></p>
              </div>
            </div>

            <div className="carousel-item">
              <img src="https://animalhaven.org/hubfs/Success%20Stories/Monkey/monkey--feature.jpg" alt="2" className="d-block w-100" />
              <div className="carousel-caption fa fa-beat" style={{ backgroundColor: '#C58940', marginTop: '50px' }}>
                <p style={{ color: '#FAF8F1', fontSize: '1rem', fontFamily: 'cursive' }}><b style={{ fontSize: '2rem' }}>"</b>He is the most amazing little dog we could have ever hoped for and we love him beyond measure. He gives us so much joy each day and we’re so grateful that we found him at Tails&Paws<i className="fa fa-solid fa-paw"></i> !<b style={{ fontSize: '2rem' }}>"</b></p>
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
    </div>
  );
}

export default SuccessPage;