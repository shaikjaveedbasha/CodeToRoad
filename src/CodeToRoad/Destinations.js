import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";


const Destination = () => {
    const [destinations, setDestionations] = useState([])
    const [category, setCategory] = useState('')
    useEffect(() => {
        axios.get(`http://localhost:5000/destinations`)
            .then((res) => {
                if (category === '') {
                    setDestionations(res.data)
                }
                else {
                    const filterData = res.data.filter((d) => d.category === category)
                    setDestionations(filterData)
                }
            }
            )
    })

    return (
        <section className="py-5 bg-light" id="destinations">
            <div className="container text-center">
                <h2 className="fw-bold text-primary mb-3">Top Destinations</h2>
                <p className="text-muted mb-5">
                    Discover the most beautiful places across India — from beaches to
                    mountains and royal palaces.
                </p>
                <select onChange={(e) => setCategory(e.target.value)} className="mb-3">
                    <option value={''}>All Destinations</option>
                    <option>Hill Station</option>
                    <option>Beach</option>
                    <option>Adventure</option>
                    <option>Heritage</option>
                    <option>Road Trip</option>
                    <option>City Tour</option>
                </select>

                <div className="row g-4 detsination">
                    {destinations.map((place) => (
                        <div key={place.id} className="col-md-4 col-sm-6">
                            <div className="card shadow-sm h-100 ">
                                {/* <img src={place.img} className="w-100 h-100" alt={place.title} /> */}
                                <div className="card-body text-start">
                                    <h5 className="fw-bold text-primary ">{place.title}</h5>
                                    <p className="small text-muted mb-1 fw-medium">
                                        {place.lacation}
                                    </p>
                                    <div className="d-flex justify-content-between align-items-center mt-3">
                                        <span className=" text-success fw-medium">
                                            {place.durations}
                                        </span>

                                    </div>
                                    <div className="text-danger fw-medium">{place.bestTimeToVisit}</div>
                                   
                                <div className="card-footer d-flex justify-content-between mt-2">
                                    
                                    <Link to={`/destinationsDetails/${place.id}`}>
                                        <button className="btn btn-primary ">Know More</button>
                                        </Link>
                                        


                                        <button className="btn btn-success ">Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Destination;
