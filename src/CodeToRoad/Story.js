import React from 'react'
import beach from './assets/storyimage-2.avif'
import chikmaglure from './assets/Chikmagalur-1.jpg'
import panduchery from './assets/beach.jpg'
import manali from './assets/manaliimage.jpg'
const Story = () => {
    return (
        <>
            <section className='container mt-5'>
                <div className='row '>
                    <div className='col-md-6 col-lg-6'>
                        <h2 class="fw-bold text-primary mb-3">Discover the World Through Tourism</h2>
                        <p class="text-muted">
                            Tourism connects people, cultures, and destinations across the globe.
                            It allows travelers to explore breathtaking landscapes, experience local traditions,
                            and create unforgettable memories along the way.
                        </p>
                        <p class="text-muted">
                            Beyond recreation, tourism also supports local economies, preserves heritage sites,
                            and encourages cultural exchange — making it one of the most powerful forces for global growth.
                        </p>
                        <ul class="list-unstyled mt-3">
                            <li>✅ Boosts local employment & economy</li>
                            <li>✅ Promotes cultural understanding</li>
                            <li>✅ Encourages environmental awareness</li>
                            <li>✅ Builds peaceful connections worldwide</li>
                        </ul>
                         <div className='text-center'>
                            <a href="#stories" class="btn btn-primary mt-3 px-4 py-2 rounded-pill text-center">Explore Stories</a>
                         </div>
                    </div>
                    <div className='col-md-6 col-lg-6'>
                        <img src={beach} className='w-100 h-100' alt=''/>
                    </div>
                </div>
            </section>




            <section className="story-hero text-center text-white d-flex align-items-center justify-content-center">
                <div className="container">
                    <h1 className="fw-bold display-5">Traveler Stories & Weekend Tales</h1>
                    <p className="lead">Real experiences. Real destinations. Real adventures.</p>
                </div>
            </section>

            <section className="py-5 bg-light">
                <div className="container text-center">
                    <h2 className="fw-bold text-uppercase text-primary mb-3">Featured Travel Stories</h2>
                    <p className="text-muted mb-5">
                        Dive into the journeys of travelers who turned their weekends into unforgettable adventures.
                    </p>

                    <div className="row g-4 story">

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card border-0 shadow-lg h-100">
                                <img
                                    src={chikmaglure}
                                    class="card-img-top"
                                    alt="Manali"

                                />
                                <div className="card-body">
                                    <h5 className="fw-semibold mb-2">Coorg: Misty Hills & Coffee Trails</h5>
                                    <p className="text-muted small">
                                        A peaceful retreat surrounded by coffee plantations, waterfalls, and forest trails.
                                    </p>
                                    <a href="#" className="btn btn-outline-primary btn-sm">Read Full Story</a>
                                </div>
                            </div>
                        </div>


                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card border-0 shadow-lg h-100">
                                <img
                                    src={panduchery}
                                    class="card-img-top"
                                    alt="Manali"

                                />
                                <div className="card-body">
                                    <h5 className="fw-semibold mb-2">Pondicherry: Beaches & French Vibes</h5>
                                    <p className="text-muted small">
                                        A weekend of peace by the sea, colorful streets, and cozy cafes — the French charm of India.
                                    </p>
                                    <a href="#" className="btn btn-outline-primary btn-sm">Read Full Story</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card border-0 shadow-lg h-100">
                                <img
                                    src={manali}
                                    class="card-img-top"
                                    alt="Manali"
                                />
                                <div className="card-body">
                                    <h5 className="fw-semibold ">Adventures in Manali</h5>
                                    <p className="text-muted small">
                                        “Snow-capped peaks, thrilling treks, and cozy cafes — Manali is every traveler’s dream escape from the city rush.”
                                    </p>
                                    <a href="#" className="btn btn-outline-primary btn-sm">Read Full Story</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Story
