import React from 'react'
import car from './assets/Book-a-car.avif'
import SendEnquiry from './SendEnquiry'
const BookDrive = () => {
    return (
        <>
            <section id="book-drive" className="py-5 bg-light">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <h2 className="fw-bold mb-3">Book Your Weekend Drive</h2>
                            <p >
                                Plan your perfect road trip with <strong>CodeToRoad</strong>.
                                Choose your destination, date, and travel style — well handle the rest!
                            </p>
                            <p >
                                From mountain drives to beach routes, enjoy comfort and safety with our verified travel partners.
                            </p>

                            <SendEnquiry/>

                            {/* <form className="mt-4">
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <label for="name" className="form-label fw-semibold">Full Name</label>
                                        <input type="text" id="name" className="form-control" placeholder="Enter your name" required />
                                    </div>

                                    <div className="col-md-6">
                                        <label for="email" className="form-label fw-semibold">Email</label>
                                        <input type="email" id="email" className="form-control" placeholder="Enter your email" required />
                                    </div>

                                    <div className="col-md-6">
                                        <label for="destination" className="form-label fw-semibold">Destination</label>
                                        <input type="text" id="destination" className="form-control" placeholder="Enter destination" required />
                                    </div>

                                    <div className="col-md-6">
                                        <label for="date" className="form-label fw-semibold">Travel Date</label>
                                        <input type="date" id="date" className="form-control" required />
                                    </div>

                                    <div className="col-md-6">
                                        <label for="vehicle" className="form-label fw-semibold">Vehicle Type</label>
                                        <select id="vehicle" className="form-select" required>
                                            <option selected disabled>Choose...</option>
                                            <option value="car">Car</option>
                                            <option value="suv">SUV</option>
                                            <option value="bike">Bike</option>
                                            <option value="van">Van</option>
                                        </select>
                                    </div>

                                    <div className="col-md-6">
                                        <label for="people" className="form-label fw-semibold">No. of Travelers</label>
                                        <input type="number" id="people" className="form-control" min="1" placeholder="e.g., 2" required />
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-primary mt-4 px-4 py-2 ">
                                    <i className="bi bi-car-front me-2"></i>Book Now
                                </button>
                            </form> */}
                        </div>

                        <div className="col-lg-6 text-center">
                            <img
                                src={car}
                                alt='car-pic'
                                className="img-fluid rounded shadow"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BookDrive
