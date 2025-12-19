import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Destination from "./Destinations";

const Reviews = () => {
    const [reviews, setreviews] = useState([])
    const [error, seterror] = useState(null)
    const [loading, setloading] = useState(true)
    const [formdata, setFormdata] = useState({ img: "", name: "", location: "", destination: "", review: "", rating: "" })
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

    const Addreview = (e) => {
        const { name, value } = e.target;
        setFormdata({ ...formdata, [name]: value });
    }

    const submitHandler = (e) => {
    e.preventDefault();

    const selectedDestination = destinations.find(
        (d) => d.id === String(formdata.destination)
    );

    if (!selectedDestination) {
        toast.error("Please select a destination");
        return;
    }

    axios.post(`http://localhost:5000/reviews`, {
        ...formdata,
        destination: selectedDestination.title,   // store title
        destinationid: selectedDestination.id     // store id also
    })
    .then((res) => {
        setreviews([...reviews, res.data]);
        setFormdata({ img: "", name: "", location: "", destination: "", review: "", rating: "" });
        toast("Review Added Successfully");
    })
    .catch((err) => console.error(err));
};


    const [destinations, setDestinations] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/destinations`)
            .then((res) => setDestinations(res.data))
            .catch((err) => console.log(err))
    })



    return (
        <section className="py-5 bg-light">
            <div className="container text-center">
                <h2 className="fw-bold text-uppercase text-primary mb-3">Traveler Reviews</h2>
                <p className="text-muted mb-5">
                    See what travelers have to say about their weekend adventures with CodeToRoad.
                </p>
                {loading && <p className="text-primary p-5 spinner spinner-border"></p>}
                {error && <p className="text-bg-danger p-5">Something wrong</p>}
                <ToastContainer />
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
                <button data-bs-target='#review' data-bs-toggle='modal' className="btn btn-success mt-4">Write Review</button>
            </div>
            <div className="modal fade" id="review">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3>Write a Reviews Here</h3>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={submitHandler}>
                                <input name="img" value={formdata.img} onChange={Addreview} placeholder="Add image" className="form-control mb-3"></input>
                                <input name="name" value={formdata.name} onChange={Addreview} placeholder="Enter Name" className="form-control mb-3"></input>
                                <input name="location" value={formdata.location} onChange={Addreview} placeholder="Enter location" className="form-control mb-3"></input>
                                <select name="destination" value={formdata.destination} onChange={Addreview} className="form-control mb-3">
                                    <option value="" hidden>Select Destination </option>
                                    {
                                        destinations.map((des) => (
                                            <option key={des.id} value={des.id}>{des.title} </option>
                                        ))
                                    }

                                </select>
                                <input name="review" value={formdata.review} onChange={Addreview} placeholder="Enter review " className="form-control mb-3"></input>
                                <input name="rating" value={formdata.rating} onChange={Addreview} type="float" min="1" max="5" placeholder="Rating (1-5)" className="form-control mb-3"></input>
                                <input type="submit" data-bs-dismiss="modal" className="form-control mb-3"></input>
                            </form>
                        </div>
                        <div className="modal-footer"></div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Reviews;
