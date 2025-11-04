import React from 'react'
import Destination from './assets/destinationimage.jpg'
import Travels from './assets/Travel-planning-assistance-500x500.webp'
import Hotel from './assets/Hotelimage.webp'
import trevel from './assets/travel-image.jpg'
import amezing from './assets/amezing-image.jpg'
import eco from './assets/Eco-exploring.jpg'
const Services = () => {
    return (
        <>
            <section  className="services py-5 bg-light">
                <div className="container text-center">
                    <h2 className="fw-bold text-primary mb-4">Our Services</h2>
                    <p className="text-muted mb-5">
                        We make your travel planning simple, smart, and stress-free.
                        Discover destinations, plan trips, and explore like never before.
                    </p>

                    <div className="row g-4 images">
                        <div className="col-md-4 col-lg-4">
                            <div className="card border-0 shadow-sm h-100 ">
                                <img src={Destination} className='w-100' alt='' />
                                <div className="mb-3"><i className="bi bi-map fs-1 text-primary"></i></div>
                                <h5 className="fw-bold">Destination Discovery</h5>
                                <p className="text-muted small">
                                    Explore weekend getaways, hidden gems, and trending spots with our smart travel guides.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4 col-lg-4">
                            <div className="card border-0 shadow-sm h-100 ">
                                <img src={Travels} className='w-100' alt='' />
                                <div className="mb-3"><i className="bi bi-compass fs-1 text-primary"></i></div>
                                <h5 className="fw-bold">Trip Planning Assistance</h5>
                                <p className="text-muted small">
                                    Personalized travel suggestions and itineraries for your perfect getaway.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4 col-lg-4">
                            <div className="card border-0 shadow-sm h-100 ">
                                <img src={Hotel} className='w-100' alt='' />
                                <div className="mb-3"><i className="bi bi-house-heart fs-1 text-primary"></i></div>
                                <h5 className="fw-bold">Hotel & Stay Recommendations</h5>
                                <p className="text-muted small">
                                    Choose from top-rated hotels, resorts, and stays to match your comfort and budget.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card border-0 shadow-sm h-100">
                                <img src={trevel} alt='' />
                                <div className="mb-3"><i className="bi bi-car-front fs-1 text-primary"></i></div>
                                <h5 className="fw-bold">Travel Routes & Transport</h5>
                                <p className="text-muted small">
                                    Find road trips, flight options, and local guides to make travel seamless.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card border-0 shadow-sm h-100 ">
                                <img src={amezing} alt='' />
                                <div className="mb-3"><i className="bi bi-journal-richtext fs-1 text-primary"></i></div>
                                <h5 className="fw-bold">Travel Stories & Experiences</h5>
                                <p className="text-muted small">
                                    Read and share inspiring travel experiences from explorers like you.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card border-0 shadow-sm h-100 ">
                                <img src={eco} alt='' />
                                <div className="mb-3"><i className="bi bi-tree fs-1 text-primary"></i></div>
                                <h5 className="fw-bold">Eco & Cultural Tourism</h5>
                                <p className="text-muted small">
                                    Travel responsibly, support local communities, and protect the environment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services
