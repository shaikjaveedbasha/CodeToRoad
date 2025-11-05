import React from 'react'
import weekend from './assets/friends-in-car.jpg'
import Scenic from './assets/RobertMasseycar.jpg'
import Flexible from './assets/Flexible-plans.jpg'
import community from './assets/asian-population-community.jpg'
import adventure from './assets/Adventure Trail.avif'
import heritage from './assets/Heritage-Journeys.jpg'
import nature from './assets/Nature-Escapes.jpg'
import food from './assets/local-food.jpg'
const Highlights = () => {
    return (
        <section className='py-4 bg-light' id='highlights'>
            <div className='container'>
                <div className='text-center mb-5'>
                    <h2 className='fw-bold'>Why Choose<span className='text-primary'>CodeToRoad</span></h2>
                    <p className='text-muted'>We make your weekends memorable, relaxing, and hassle</p>
                </div>
                <div className='row whychoose'>
                    <div className="col-md-6 col-lg-3 mb-3 ">
                        <div className="card border-e shadow-sm h-100 text-center">
                            <img src={weekend} className='w-100' alt='' />
                            <div className="mb-3 text-primary fs-1">
                                <i className="bi bi-car-front-fill"></i>
                            </div>
                            <h5 className='fw-semibold mb-2'>Weekend Drives</h5>
                            <p className='text-muted'> Curated short trips for quick escapes ater a long Drives</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-3">
                        <div className="card border-e shadow-sm h-100 text-center">
                            <img src={Scenic} className='w-100' alt='' />
                            <div className="mb-3 text-primary fs-1">
                                <i className="bi bi-map-fill"></i>
                            </div>
                            <h5 className='fw-semibold mb-2'>Scenic Routes</h5>
                            <p className='text-muted'>Explore handpicked long drives with brethtaking</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-3">
                        <div className="card border-e shadow-sm h-100 text-center ">
                            <img src={Flexible} className='w-100' alt='' />
                            <div className="mb-3 text-primary fs-1">
                                <i className="bi bi-calendar2-week-fill"></i>
                            </div>
                            <h5 className='fw-semibold mb-2'>Flexible Plans</h5>
                            <p className='text-muted'>Explore handpicked long drives with brethtaking</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-3">
                        <div className="card border-e shadow-sm h-100 text-center">
                            <img src={community} className='w-100' alt='' />
                            <div className="mb-3 text-primary fs-1">
                                <i className="bi bi-people-fill"></i>
                            </div>
                            <h5 className='fw-semibold mb-2'>Community Vibes</h5>
                            <p className='text-muted'>Join a growing network technies who love </p>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-3 mb-3">
                        <div class="card border-e shadow-sm h-100 text-center">
                            <img src={adventure} class="w-100" alt="" />
                            <div class="mb-3 text-primary fs-1">
                                <i class="bi bi-compass-fill"></i>
                            </div>
                            <h5 class="fw-semibold mb-2">Adventure Trails</h5>
                            <p class="text-muted">
                                Discover thrilling routes filled with mountains, rivers, and unforgettable moments.
                            </p>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-3 mb-3">
                        <div class="card border-e shadow-sm h-100 text-center">
                            <img src={heritage} class="w-100" alt="" />
                            <div class="mb-3 text-primary fs-1">
                                <i class="bi bi-bank2"></i>
                            </div>
                            <h5 class="fw-semibold mb-2">Heritage Journeys</h5>
                            <p class="text-muted">
                                Step back in time and explore India’s royal palaces, forts, and timeless culture.
                            </p>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-3 mb-3">
                        <div class="card border-e shadow-sm h-100 text-center">
                            <img src={nature} class="w-100" alt="" />
                            <div class="mb-3 text-primary fs-1">
                                <i class="bi bi-tree-fill"></i>
                            </div>
                            <h5 class="fw-semibold mb-2">Nature Escapes</h5>
                            <p class="text-muted">
                                Relax amidst lush greenery, peaceful waterfalls, and refreshing mountain air.
                            </p>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-3 mb-3">
                        <div class="card border-e shadow-sm h-100 text-center">
                            <img src={food} class="w-100" alt="" />
                            <div class="mb-3 text-primary fs-1">
                                <i class="bi bi-cup-hot-fill"></i>
                            </div>
                            <h5 class="fw-semibold mb-2">Local Cuisine</h5>
                            <p class="text-muted">
                                Taste authentic local flavors and enjoy the culinary charm of every destination.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Highlights
