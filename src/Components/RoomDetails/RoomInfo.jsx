import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../SourceFiles/property-01.jpg'
import img2 from '../SourceFiles/property-02.jpg'
import img3 from '../SourceFiles/property-03.jpg'
import img4 from '../SourceFiles/property-04.jpg'
import img5 from '../SourceFiles/property-05.jpg'
import img6 from '../SourceFiles/property-06.jpg'

import './styles.scss'
const RoomInfo = () => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.2,
    slidesToScroll: 1
  };


  return (
    <div>
      <Slider {...settings}>
        <div>
          <img className='img-fluid img-banner' src={img1} />
        </div>
        <div>
          <img className='img-fluid img-banner' src={img2} />
        </div>
        <div>
          <img className='img-fluid img-banner' src={img3} />
        </div>
        <div>
          <img className='img-fluid img-banner' src={img4} />
        </div>
        <div>
          <img className='img-fluid img-banner' src={img5} />
        </div>
      </Slider>

      <div className='container-fluid'>
        <div className="row">
          <div className="col-lg-8">
            <div className='d-flex justify-content-between align-items-center'>
              <div>
                <p className='heading-text'>Super Star Hotel</p>
                <p className='sub-heading-text'>6, Hotel Lane, Queens Road, Lahore</p>
              </div>
              <div>
                <div className='review-button'>
                  4.4 <i className='fa fa-star fa-solid' />
                </div>
                <div className='rating-button'>
                  616 Rating
                </div>
              </div>
            </div>
            <div className='resturant-type'>
              In House Hotel
            </div>

            <p className='text-heading' style={{ margin: "27px 0px" }}>Amenities</p>
            <div className='row'>
              <div className="col-lg-4"><i className="fa-solid fa-fan"></i>&nbsp;AC</div>
              <div className="col-lg-4"><i className="fa-solid fa-fan"></i>&nbsp;TV</div>
              <div className="col-lg-4"><i className="fa-solid fa-fan"></i>&nbsp;Free Wifi</div>
              <div className="col-lg-4"><i className="fa-solid fa-fan"></i>&nbsp;King Sized Bed</div>
              <div className="col-lg-4"><i className="fa-solid fa-fan"></i>&nbsp;Seating Area</div>
              <div className="col-lg-4"><i className="fa-solid fa-fan"></i>&nbsp;Geyser</div>
            </div>
            <p className='text-heading2' style={{ margin: "27px 0px" }}>Show More</p>
            <p className='text-heading' style={{ margin: "27px 0px" }}>About this Sarayee</p>
            <p>OYO 4038 Hotel Winner Inn is a budget hotel, located 3 km from Sri Harmandir Sahib and 4 km from Jallianwala Bagh. The hotel offers amenities such as in-house restaurant and kitchen, with a main road property.</p>
            <p className='text-heading2' style={{ margin: "27px 0px" }}>Read More</p>
            <p className='text-heading' style={{ margin: "27px 0px" }}>Choose your room</p>
            <div className='card'>
              <div className="card-header" style={{ background: "linear-gradient(to right, #797f9d, #d4d1da)", fontSize: "14px", color: "#fff", fontWeight: 600 }}>
                <i className='fa fa-solid fa-start text-primary' /> Select Category
              </div>
              <h4>fdshaajk</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoomInfo