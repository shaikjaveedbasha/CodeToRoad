import React from "react";

const Reviews = () => {
    const reviews = [
        {
            name: "Anjali Mehta",
            location: "Delhi, India",
            review:
                "CodeToRoad helped me plan the perfect weekend getaway to Coorg! Beautiful interface and excellent travel suggestions.",
            img: "https://randomuser.me/api/portraits/women/68.jpg",
            rating: 5,
        },
        {
            name: "Rahul Sharma",
            location: "Mumbai, India",
            review:
                "A wonderful experience! The website gave me great options for short trips near Pune — smooth and easy to use.",
            img: "https://randomuser.me/api/portraits/men/45.jpg",
            rating: 4,
        },
        {
            name: "Priya Singh",
            location: "Bangalore, India",
            review:
                "I discovered hidden travel gems I’d never heard of! CodeToRoad makes weekend planning simple and exciting.",
            img: "https://randomuser.me/api/portraits/women/12.jpg",
            rating: 5,
        },
    ];

    return (
        <section id="reviews" className="py-5 bg-light">
            <div className="container text-center">
                <h2 className="fw-bold text-uppercase text-primary mb-3">Traveler Reviews</h2>
                <p className="text-muted mb-5">
                    See what travelers have to say about their weekend adventures with CodeToRoad.
                </p>

                <div className="row g-4">
                    {reviews.map((r, index) => (
                        <div key={index} className="col-12 col-md-6 col-lg-4">
                            <div className="card border-0 shadow-lg h-100 p-3">
                                <div className="d-flex align-items-center mb-3">
                                    <img
                                        src={r.img}
                                        alt={r.name}
                                        className="rounded-circle me-3"
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
                                <div className="text-warning text-start">
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

export default Reviews;
