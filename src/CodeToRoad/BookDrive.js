import React from 'react'
import car from './assets/bmw-car.jpg'
import SendEnquiry from './SendEnquiry'
import NewBooking from './NewBooking'
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

                            <NewBooking/>

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
