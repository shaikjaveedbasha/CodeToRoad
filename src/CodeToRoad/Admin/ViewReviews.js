import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewReviews = () => {
    const [reviews, setreviews] = useState([])
    const [error, seterror] = useState(null)
    const [loading, setloading] = useState(true)
    useEffect(() => {
        axios.get(`http://localhost:5000/reviews`)
            .then((suc) => {
                setreviews(suc.data)
                setloading(false)
            })
            .catch((err) => {
                seterror(err.message);
                setloading(false)
            })
    })
    return (
        <section id="reviews" className="py-5 bg-light">
            <div className="container text-center">
                <h2 className="fw-bold text-uppercase text-primary mb-3">Traveler Reviews</h2>
                <p className="text-muted mb-5">
                    See what travelers have to say about their weekend adventures with CodeToRoad.
                </p>
                {loading && <p className="text-primary p-5 spinner spinner-border"></p>}
                {error && <p className="text-bg-danger p-5">Something wrong</p>}

                <div className="row g-4">
                    {reviews.map((r, index) => (
                        <div key={index} className=" review col-12 col-md-6 col-lg-4">
                            <div className="card border-0 shadow-lg h-100 p-3">
                                <div className="d-flex align-items-center mb-3">
                                    <img
                                        src={r.img}
                                        alt={r.name}
                                        className="me-3"
                                        width="80"
                                        height="80"
                                        style={{ objectFit: "cover" }}
                                    />
                                    <div className="text-start">
                                        <h6 className="mb-0 fw-semibold">{r.name}</h6>
                                        <small className="text-muted">{r.location}</small>
                                    </div>
                                </div>
                                <p className="text-muted small text-start mb-3">“{r.review}”</p>
                                <div className="text-warning text-start d-flex justify-content-between">
                                    {"★".repeat(r.rating)}
                                    {"☆".repeat(5 - r.rating)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                   
            </div>
        </section>
    );
};

export default ViewReviews
