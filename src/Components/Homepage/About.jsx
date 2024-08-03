import React from 'react'
import { Link } from 'react-router-dom'
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;
const range = (start, end) => {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
};

// eslint-disable-next-line arrow-body-style
const disabledDate = (current) => {
  // Can not select days before today and today
  return current && current < dayjs().endOf('day');
};
const disabledDateTime = () => ({
  disabledHours: () => range(0, 24).splice(4, 20),
  disabledMinutes: () => range(30, 60),
  disabledSeconds: () => [55, 56],
});
const disabledRangeTime = (_, type) => {
  if (type === 'start') {
    return {
      disabledHours: () => range(0, 60).splice(4, 20),
      disabledMinutes: () => range(30, 60),
      disabledSeconds: () => [55, 56],
    };
  }
  return {
    disabledHours: () => range(0, 60).splice(20, 4),
    disabledMinutes: () => range(0, 31),
    disabledSeconds: () => [55, 56],
  };
};

const About = () => {

  const { RangePicker } = DatePicker;




  return (
    <div>
      <div className='row'>

        <div className="col-lg-10 mx-auto">
          <h2 className='text-center mt-5 mb-3 '>Over 160+ hotels across nation</h2>
          <div className='card'>
            <div className='card-body'>
              <div className='row'>
                <div className="col-lg-3">
                  <input type="text" placeholder='Search a place, or location' className='form-control' style={{ border: "none" }} />

                </div>
                <div className="col-lg-5">
                  <RangePicker
                    className='custom-range-picker mt-1'
                    disabledDate={disabledDate}
                    disabledTime={disabledRangeTime}
                    showTime={{
                      hideDisabledOptions: true,
                      defaultValue: [dayjs('00:00', 'HH:mm'), dayjs('11:59', 'HH:mm')],
                    }}
                    format="YYYY-MM-DD HH:mm"
                  />
                </div>
                <div className="col-lg-3">
                  <input type="text" className='form-control' defaultValue={"1 Room 2 Guests"} style={{ border: "none" }} />

                </div>
                <div className="col-lg-1">
                  <Link to='/SearchRooms' className='btn btn-success mx-auto'>Search</Link>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='col-lg-10 mt-5 mx-auto'>
          <div className='col-lg-12'>
            <div style={{ width: '100%' }}><iframe width="100%" height={400} frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=highq%20tower,%20jail%20road%20,%20Lahore%20Cantt+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed">&lt;a href="https://www.gps.ie/"&gt;gps systems&lt;/a&gt;</iframe></div>
          </div>
        </div>

      </div>


      <div className="featured section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="left-image">
                <img src="assets/images/featured.jpg" alt />
                <a href="property-details.html"><img src="assets/images/featured-icon.png" alt style={{ maxWidth: 60, padding: 0 }} /></a>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="section-heading">
                <h6>| Featured</h6>
                <h2>Best Appartment &amp; Sea view</h2>
              </div>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Best useful links ?
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Get <strong>the best villa</strong> website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the <a href="https://www.google.com/search?q=best+free+css+templates" target="_blank">best free CSS templates</a> in the world. Please tell your friends about it.</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      How does this work ?
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur <code>adipiscing</code> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Why is Villa Agency the best ?
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur <code>adipiscing</code> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="info-table">
                <ul>
                  <li>
                    <img src="assets/images/info-icon-01.png" alt style={{ maxWidth: 52 }} />
                    <h4>250 m2<br /><span>Total Flat Space</span></h4>
                  </li>
                  <li>
                    <img src="assets/images/info-icon-02.png" alt style={{ maxWidth: 52 }} />
                    <h4>Contract<br /><span>Contract Ready</span></h4>
                  </li>
                  <li>
                    <img src="assets/images/info-icon-03.png" alt style={{ maxWidth: 52 }} />
                    <h4>Payment<br /><span>Payment Process</span></h4>
                  </li>
                  <li>
                    <img src="assets/images/info-icon-04.png" alt style={{ maxWidth: 52 }} />
                    <h4>Privacy<br /><span>Privacy and Security</span></h4>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About