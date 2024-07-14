import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {


  var settings = {
    dots: true,
    infinite: true,                
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>

      <div className="main-banner">
        <div className="">

          <Slider {...settings}>
            <div>
              <div className="item item-1">
                <div className="header-text">
                  <span className="category">Lahore, <em>Punjab</em></span>
                  <h2>Hurry!<br />Get the Best Room for you</h2>
                </div>
              </div>
            </div>
            <div>
              <div className="item item-2">
                <div className="header-text">
                  <span className="category">Karachi, <em>Sindh</em></span>
                  <h2>Be Quick!<br />Get the best Flat in town</h2>
                </div>
              </div>
            </div>
            <div>
              <div className="item item-3">
                <div className="header-text">
                  <span className="category">Islambad, <em></em></span>
                  <h2>Act Now!<br />Get the highest level venue</h2>
                </div>
              </div>
            </div>
          </Slider>

        </div>
      </div>
    </div>
  )
}

export default Hero