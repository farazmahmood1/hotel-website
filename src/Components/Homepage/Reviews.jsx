import React from 'react'
import './style.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };


    return (
        <div>
            <div className="section best-deal">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-heading text-center">
                                <h6>| customer reviews</h6>
                                <h2>What our clients say for us</h2>
                            </div>
                        </div>
                        <div>
                            <div className='row'>
                                <Slider {...settings}>
                                    <figure class="snip1533">
                                        <figcaption>
                                            <blockquote>
                                                <p>If you do the job badly enough, sometimes you don't get asked to do it again.</p>
                                            </blockquote>
                                            <h3>Wisteria Ravenclaw</h3>
                                            <h4>Google Inc.</h4>
                                        </figcaption>
                                    </figure>
                                    <figure class="snip1533">
                                        <figcaption>
                                            <blockquote>
                                                <p>I'm killing time while I wait for life to shower me with meaning and happiness.</p>
                                            </blockquote>
                                            <h3>Ursula Gurnmeister</h3>
                                            <h4>Facebook</h4>
                                        </figcaption>
                                    </figure>
                                    <figure class="snip1533">
                                        <figcaption>
                                            <blockquote>
                                                <p>The only skills I have the patience to learn are those that have no real application in life. </p>
                                            </blockquote>
                                            <h3>Ingredia Nutrisha</h3>
                                            <h4>Twitter</h4>
                                        </figcaption>
                                    </figure>
                                </Slider>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews