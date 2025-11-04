import React from "react";
import Highlights from "./Highlights";
import { Link } from "react-router";
const Home = () => {
    return (
        <>
            <div id="mainslider" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="banner1">
                            <h1>Escape the Code.Explore the Road</h1>
                            <p>Discover stunning weekend destinations and hidden gems across India.</p>
                            <p>Plan your perfect getaway with ease — only on CodeToRoad.</p>
                            <Link to={'/destinations'}> <button>Plan Your Trip</button> </Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="banner2">
                            <h1>Weekend Getaways, Effortlessly Planned. </h1>
                            <p>Your one-stop travel guide for short trips and quick escapes.</p>
                            <p>Explore more, worry less — travel smarter with CodeToRoad.</p>
                            <Link to={'/services'}> <button>View packages</button></Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="banner3">
                            <h1>Long Drives.Lasting Memories. </h1>
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