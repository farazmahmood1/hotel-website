import React from 'react'

const Footer = () => {
    return (
        <div>
            {/* Footer */}
            <footer className=" text-center">
                {/* Grid container */}
                <div className="container">
                    {/* Section: Social media */}
                    <section className="mb-4">
                        {/* Facebook */}
                        <a data-mdb-ripple-init className="btn btn-outline-secondary rounded-circle btn-floating m-1" href="#!" role="button"><i className="fab text-white fa-facebook-f" /></a>
                        {/* Twitter */}
                        <a data-mdb-ripple-init className="btn btn-outline-secondary rounded-circle btn-floating m-1" href="#!" role="button"><i className="fab text-white fa-twitter" /></a>
                        {/* Google */}
                        <a data-mdb-ripple-init className="btn btn-outline-secondary rounded-circle btn-floating m-1" href="#!" role="button"><i className="fab text-white fa-google" /></a>
                        {/* Instagram */}
                        <a data-mdb-ripple-init className="btn btn-outline-secondary rounded-circle btn-floating m-1" href="#!" role="button"><i className="fab text-white fa-instagram" /></a>
                        {/* Linkedin */}
                        <a data-mdb-ripple-init className="btn btn-outline-secondary rounded-circle btn-floating m-1" href="#!" role="button"><i className="fab text-white fa-linkedin-in" /></a>
                        {/* Github */}
                        <a data-mdb-ripple-init className="btn btn-outline-secondary rounded-circle btn-floating m-1" href="#!" role="button"><i className="fab text-white fa-github" /></a>
                    </section>
                    <hr className='text-secondary' />
                    {/* Section: Social media */}
                    {/* Section: Form */}
                    <section >
                        <form action>
                            {/*Grid row*/}
                            <div className="row ">
                                <div className='d-flex justify-content-center align-items-center'>

                                    <p className='mb-4'>
                                        <strong>Sign up for our newsletter</strong>
                                    </p>&nbsp;&nbsp;


                                    <div className="col-md-5 col-12">
                                        {/* Email input */}
                                        <div data-mdb-input-init className="form-outline">
                                            <input type="email" id="form5Example24" placeholder='johnsmith@yahoo.com' className="form-control" />
                                            <label className="form-label text-white" htmlFor="form5Example24">Email address</label>
                                        </div>
                                    </div>

                                    <div className="col-auto ms-2" style={{marginBottom:"32px"}}>
                                        {/* Submit button */}
                                        <button data-mdb-ripple-init type="submit" className="btn btn-outline-secondary">
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/*Grid row*/}
                        </form>
                    </section>
                    {/* Section: Form */}
                    {/* Section: Text */}
                  <p>Lorem ipsum dolor sit amet consectetur Ratione nam nisi quae necessitatibus! Natus quisquam repellendus ea expedita, qui sunt?</p>
              
                    <section >
                        {/*Grid row*/}
                        <div className="row">
                            {/*Grid column*/}
                            <div className="col-lg-3 col-md-6  mb-md-0">
                                <h5 className="text-uppercase text-white">Links</h5>
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a className=" text-white" href="#!">Link 1</a>
                                    </li>
                                    <li>
                                        <a className=" text-white" href="#!">Link 2</a>
                                    </li>
                                    <li>
                                        <a className=" text-white" href="#!">Link 3</a>
                                    </li>
                                    <li>
                                        <a className=" text-white" href="#!">Link 4</a>
                                    </li>
                                </ul>
                            </div>
                            {/*Grid column*/}
                            {/*Grid column*/}
                            <div className="col-lg-3 col-md-6  mb-md-0">
                                <h5 className="text-uppercase text-white">Links</h5>
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a className=" text-white" href="#!">Link 1</a>
                                    </li>
                                    <li>
                                        <a className=" text-white" href="#!">Link 2</a>
                                    </li>
                                    <li>
                                        <a className=" text-white" href="#!">Link 3</a>
                                    </li>
                                    <li>
                                        <a className=" text-white" href="#!">Link 4</a>
                                    </li>
                                </ul>
                            </div>
                            {/*Grid column*/}
                            {/*Grid column*/}
                            <div className="col-lg-3 col-md-6  mb-md-0">
                                <h5 className="text-uppercase text-white">Links</h5>
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a className=" text-white" href="#!">Link 1</a>
                                    </li>
                                    <li>
                                        <a className=" text-white" href="#!">Link 2</a>
                                    </li>
                                    <li>
                                        <a className=" text-white" href="#!">Link 3</a>
                                    </li>
                                    <li>
                                        <a className=" text-white" href="#!">Link 4</a>
                                    </li>
                                </ul>
                            </div>
                            {/*Grid column*/}
                            {/*Grid column*/}
                            <div className="col-lg-3 col-md-6  mb-md-0">
                                <h5 className="text-uppercase text-white">Links</h5>
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a className=" text-white" href="#!">Link 1</a>
                                    </li>
                                    <li>
                                        <a className=" text-white" href="#!">Link 2</a>
                                    </li>
                                    <li>
                                        <a className=" text-white" href="#!">Link 3</a>
                                    </li>
                                    <li>
                                        <a className=" text-white" href="#!">Link 4</a>
                                    </li>
                                </ul>
                            </div>
                            {/*Grid column*/}
                        </div>
                        {/*Grid row*/}
                    </section>
                    {/* Section: Links */}
                </div>
                {/* Grid container */}
                {/* Copyright */}
                <div className="text-center text-white p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2020 Copyright:
                    &nbsp;<a className="text-white fw-bold" href="https://mdbootstrap.com/">saraye.com</a>
                </div>
                {/* Copyright */}
            </footer>
            {/* Footer */}

        </div>
    )
}

export default Footer