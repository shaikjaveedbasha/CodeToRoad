import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewBookings = () => {
    const [bookings, setBookings] = useState([])
    const [error, seterror] = useState(null)
    const [loading, setloading] = useState(true)
    
    useEffect(() => {

        axios.get(`http://localhost:5000/bookings`)
            .then((suc) => {
                setBookings(suc.data)
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
                <h2 className="fw-bold text-uppercase text-primary mb-3">Traveler Bookings</h2>

                {loading && <p className="text-primary p-5 spinner spinner-border"></p>}
                {error && <p className="text-bg-danger p-5">Something Wrong</p>}

                <div>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Mobile</th>
                                <th>Email</th>
                                <th>Date</th>
                                <th>Vehicle</th>
                                <th>NO of Travelers</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings.map((book, index) => {
                                    return (

                                        <tr key={index}>
                                            <td>{book.name}</td>
                                            <td>{book.phone}</td>
                                            <td>{book.email}</td>
                                            <td>{book.date}</td>
                                            <td>{book.vehicle}</td>
                                            <td>{book.people}</td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default ViewBookings
