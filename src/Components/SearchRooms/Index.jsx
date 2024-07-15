import React from 'react';
import './SearchRoomStyles.scss'
import { Flex, Layout } from 'antd';
const { Header, Sider, Content } = Layout;

const Index = () => {

    const headerStyle = {
        backgroundColor: '#fff',
    };

    const contentStyle = {
        backgroundColor: '#fff',
    };

    const siderStyle = {
        textAlign: 'center',
        lineHeight: '120px',
        color: '#fff',
        backgroundColor: '#1677ff',
    };

    const layoutStyle = {
        overflow: 'hidden',
    };

    return (
        <div>
            <Flex gap="middle" wrap>

                <Layout style={layoutStyle}>
                    <Sider width="25%" style={siderStyle}>
                        Sider
                    </Sider>
                    <Layout>
                        <Header style={headerStyle}>
                            <div className='row'>
                                <div className='col-lg-5'> <h3>24 Saraye in Around Me</h3></div>
                                <div className='col-lg-3'>
                                    {/* <div className="form-check form-switch">
                                        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Map View</label>
                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" defaultChecked />
                                    </div> */}
                                </div>
                                <div className='col-lg-4'>
                                    <select className="form-select" aria-label="Default select example">
                                        <option value={1}>Sort By</option>
                                        <option value={1}>Popularity</option>
                                        <option value={2}>Ratings</option>
                                        <option value={3}>Pricings</option>
                                    </select>
                                </div>
                            </div>
                            <hr />
                        </Header>
                        <Content style={contentStyle}>
                            <div className='card ms-5 mt-2' style={{ width: "300px", borderLeft: "4px solid green", borderRadius: "0px" }}>
                                <div className='card-body'>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <div className='percent-box'>
                                            %
                                        </div>
                                        <div >
                                            <p className='banner-styles'>upto 75% off. <br /> Valid until 25th Nov 2024.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='rooms-container'>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-lg-5'>

                                        </div>
                                        <div className='col-lg-7'>
                                            <p className='title-room'>Hotel Baverly Inn</p>
                                            <p className='title-room-description'>
                                                Near Airport Road, Lahore Cantt.&nbsp; <i className="fa-solid text-danger fa-location-dot" />&nbsp;44Km
                                            </p>

                                            <div className='d-flex align-items-center mt-3'>
                                                <p className='rating-button' >4.6 &nbsp; <i className="fa-solid fa-star" /></p>
                                                <p>(233) Ratings <i className="fa-solid fa-certificate text-secondary" /> Excellent</p>
                                            </div>
                                            <div className='d-flex align-items-center mt-2'>
                                                <div className='d-flex align-items-center me-3'>
                                                    <i className="fa-solid fs-5 fa-elevator" />
                                                    <p className=' fs-5'>&nbsp;Elevator</p>
                                                </div>
                                                <div className='d-flex align-items-center me-3'>
                                                    <i className="fa-solid fa-bell-concierge" />
                                                    <p className=' fs-5'>&nbsp;Receptionist</p>
                                                </div>
                                                <div className='d-flex align-items-center me-3'>
                                                    <i className="fa-solid fs-5 fa-wifi" />
                                                    <p className=' fs-5'>&nbsp;Free Wifi</p>
                                                </div>
                                                <div className='d-flex align-items-center me-3'>
                                                    <p className=' fs-5'>+8 More</p>
                                                </div>
                                            </div>


                                            <div className='mt-5'>
                                                <div className='row'>
                                                    <div className='col-lg-6'>
                                                        <p className='title-room '>3500 Pkr <span className='room-price-dis'>4000 Pkr</span> <span className='dis-percentage'>25% off</span></p>
                                                        <p>+ 129 Pkr taxes & fees · per room per night</p>
                                                    </div>
                                                    <div className='col-lg-6'>
                                                        <button className='btn btn-outline-secondary'>View Details</button>
                                                        &nbsp;<button className='btn btn-success'>Book Now</button>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Content>
                    </Layout>
                </Layout>
            </Flex>
        </div>
    )
}

export default Index