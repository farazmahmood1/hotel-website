import React from 'react'
import { Link } from 'react-router-dom'
const Index = () => {
  return (
    <div>
      <div className="sub-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8">
              <ul className="info">
                <li><i className="fa fa-envelope" /> info@sarayee.co</li>
                <li><i className="fa fa-map" /> 255-C Al Hafeez Heights</li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4">
              <ul className="social-links">
                <li><a href="#"><i className="fab fa-facebook" /></a></li>
                <li><a href="https://x.com/minthu" target="_blank"><i className="fab fa-twitter" /></a></li>
                <li><a href="#"><i className="fab fa-linkedin" /></a></li>
                <li><a href="#"><i className="fab fa-instagram" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* ***** Header Area Start ***** */}
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <a className="logo">
                  <h1>Sarayee</h1>
                </a>

                <ul className="nav">
                  <li><Link to='/' className="active">Home</Link></li>
                  <li><Link to="/SearchRooms">Properties</Link></li>
                  <li><a >Property Details</a></li>
                  <li><a >Contact Us</a></li>
                  <li><a href="#"><i className="fa fa-calendar" /> Schedule a visit</a></li>
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Index