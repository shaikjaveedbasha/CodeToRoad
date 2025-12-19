import React from "react";
import Highlights from "./Highlights";
import { Link } from "react-router";
import Typewriter from 'typewriter-effect';
const Home = () => {
    return (
        <>
            <div id="mainslider" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">


                    <div className="carousel-item active">
                        <div className="banner1" data-bs-interval="4000">
                            <h1 className="">
                                <Typewriter
                                    options={{
                                        strings: ['Escape the Code Explore the Road','Beyond the Code. Into the Open Road'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />

                            </h1>
                            <p>Discover stunning weekend destinations and hidden gems across India.</p>
                            <p>Plan your perfect getaway with ease — only on CodeToRoad.</p>
                            <Link to={'/destinations'}> <button>Plan Your Trip</button> </Link>
                        </div>
                    </div>


                    <div className="carousel-item" data-bs-interval="4000">
                        <div className="banner2">
                            <h1>
                                <Typewriter
                                    options={{
                                        strings: ['Weekend Getaways', 'Effortlessly Planned. '],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </h1>
                            <p>Your one-stop travel guide for short trips and quick escapes.</p>
                            <p>Explore more, worry less — travel smarter with CodeToRoad.</p>
                            <Link to={'/services'}> <button>View packages</button></Link>
                        </div>
                    </div>

                    <div className="carousel-item" data-bs-interval="4000">
                        <div className="banner3">
                            <h1>
                                <Typewriter
                                    options={{
                                        strings: ['Long Drives', 'Lasting Memories. '],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </h1>
                            
                            <p>Less Code. More Road. Let’s make your weekends memorable.</p>
                            <p>Start exploring today with CodeToRoad!</p>
                            <Link to={'/destinations'}> <button>Explore Destinations</button></Link>
                        </div>
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#mainslider" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#mainslider" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <Highlights />

        </>
    )
}
export default Home