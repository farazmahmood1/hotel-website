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

      <div>
        <div className="row">
          <div className="col-lg-8">
            <div className='d-flex justify-content-between align-items-center'>
              <div>
              <p className='heading-text'>Super Star Hotel</p>
              <p className='sub-heading-text'>6, Hotel Lane, Queens Road, Lahore</p>
              </div>
<div>
  <div className='review-button'>
4.4 <i className='fa fa-star fa-solid'/>
  </div>
  <div className='rating-button'>
616 Rating
  </div>
</div>
            </div>
            <div className='resturant-type'>
              In House Hotel
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoomInfo