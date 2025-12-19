import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import SendEnquiry from './SendEnquiry';
import { toast, ToastContainer } from 'react-toastify';
import DestinationReviews from './DestinationReviews';

const DestinationsDetails = () => {
  const { id } = useParams();

  const [destination, setDestination] = useState({});
  const [destinations, setDestinations] = useState([]);
  const [formdata, setFormdata] = useState({
    img: "",
    name: "",
    location: "",
    destination: "",
    review: "",
    rating: ""
  });

  // LOAD SINGLE DESTINATION
  useEffect(() => {
    axios.get(`http://localhost:5000/destinations/${id}`)
      .then((res) => setDestination(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  // LOAD ALL DESTINATIONS (for dropdown)
  useEffect(() => {
    axios.get(`http://localhost:5000/destinations`)
      .then((res) => setDestinations(res.data))
      .catch((err) => console.log(err));
  }, []);

  const Addreview = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  // SUBMIT REVIEW
  const submitHandler = (e) => {
    e.preventDefault();

    const selectedDestination = destinations.find(
      (d) => String(d.id) === String(formdata.destination)
    );

    if (!selectedDestination) {
      toast.error("Please select a destination");
      return;
    }

    axios.post(`http://localhost:5000/reviews`, {
      ...formdata,
      destination: selectedDestination.title,
      destinationid: selectedDestination.id
    })
      .then((res) => {
        toast("Review Added Successfully");
        setFormdata({
          img: "",
          name: "",
          location: "",
          destination: "",
          review: "",
          rating: ""
        });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className='container p-5'>
      <ToastContainer />
      <div className="row my-4">

        {/* IMAGE & INFO */}
        <div className="col-lg-6">
          <div className="card shadow">
            <img
              src={destination.img}
              className="card-img-top"
              alt={destination.title}
            />

            <div className="card-body p-4">
              <h2 className="fw-bold mb-3">{destination.title}</h2>

              <div className="mb-2"><strong>Location:</strong> {destination.location}</div>
              <div className="mb-2"><strong>Category:</strong> {destination.category}</div>
              <div className="mb-2"><strong>Duration:</strong> {destination.durations}</div>
              <div className="mb-2"><strong>Distance:</strong> {destination.distance}</div>
              <div className="mb-2"><strong>Rating:</strong> ⭐ {destination.rating}</div>
              <div className="mb-2"><strong>Best Time to Visit:</strong> {destination.bestTimeToVisit}</div>

              <div className='d-flex justify-content-between'>
                <Link to={'/destinations'}>
                  <button className='btn btn-primary'>View More Destinations</button>
                </Link>

                <button
                  data-bs-target="#review"
                  data-bs-toggle="modal"
                  className='btn btn-primary'>
                  Write a Review
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ENQUIRY */}
        <div className="col-lg-6 d-flex flex-column justify-content-center">
          <h2 className="fw-bold m-5 text-center">Book Now</h2>
          <div className="card p-4 shadow-sm border-0 rounded-4">
            <SendEnquiry />
          </div>
        </div>

        <DestinationReviews />

      </div>

      {/* REVIEW MODAL */}
      <div className="modal fade" id="review">
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              <h3>Write a Review Here</h3>
            </div>

            <div className="modal-body">
              <form onSubmit={submitHandler}>

                <input name="img" value={formdata.img} onChange={Addreview} placeholder="Add image URL" className="form-control mb-3" />

                <input name="name" value={formdata.name} onChange={Addreview} placeholder="Enter Name" className="form-control mb-3" />

                <input name="location" value={formdata.location} onChange={Addreview} placeholder="Enter Location" className="form-control mb-3" />

                <select name="destination" value={formdata.destination} onChange={Addreview} className="form-control mb-3">
                  <option value="" hidden>Select Destination</option>
                  {destinations.map((des) => (
                    <option key={des.id} value={des.id}>
                      {des.title}
                    </option>
                  ))}
                </select>

                <input name="review" value={formdata.review} onChange={Addreview} placeholder="Enter Review" className="form-control mb-3" />

                <input name="rating" value={formdata.rating} onChange={Addreview} type="number" min="1" max="5" step="0.1" placeholder="Rating (1-5)" className="form-control mb-3" />

                <input type="submit" data-bs-dismiss="modal" className="btn btn-success w-100" />

              </form>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default DestinationsDetails;
