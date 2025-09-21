import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import "./Carousel.css"; // custom css

export default function Carousel() {
  return (
    <div
      id="multiItemCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">

        {/* Slide 1 */}
        <div className="carousel-item active">
          <div className="row">
            <div className="col-md-6">
              <img src={img1} className="d-block w-100 carousel-img" alt="First" />
            </div>
            <div className="col-md-6">
              <img src={img2} className="d-block w-100 carousel-img" alt="Second" />
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <div className="row">
            <div className="col-md-6">
              <img src={img2} className="d-block w-100 carousel-img" alt="Second" />
            </div>
            <div className="col-md-6">
              <img src={img3} className="d-block w-100 carousel-img" alt="Third" />
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <div className="row">
            <div className="col-md-6">
              <img src={img3} className="d-block w-100 carousel-img" alt="Third" />
            </div>
            <div className="col-md-6">
              <img src={img1} className="d-block w-100 carousel-img" alt="Fourth" />
            </div>
          </div>
        </div>

        {/* Slide 4 */}
        
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#multiItemCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#multiItemCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
