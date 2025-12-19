import axios from 'axios';
import React, { useState } from 'react'

const NewBooking = () => {
    const [bookings, setBookings] = useState({ name: "", phone: "", email: "", date: "", vehicle: "", people: "" });



    const changeData = (e) => {
        const { name, value } = e.target;
        setBookings({ ...bookings, [name]: value });
    }

    const submitHandler = (e) => {
        e.preventDefault();
        
        const nameError = document.getElementById('nameError');
        const phoneError = document.getElementById('phoneError');
        const emailError = document.getElementById('emailError')
        const alphaExp = /^[a-zA-Z\s]+$/;
        const numExp = /^[0-9]+$/;
        const emailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        const { name, phone, email } = bookings;

        //Name Validation
        if (name === '') {
            nameError.textContent = 'Name is mandatory!'
        } else {
            if (Number(phone)) {
                nameError.textContent = ''
            }
            else {
                nameError.textContent = 'Name should be alphabatics only'
            }
        }


        //mobile validation
        if (phone === '') {
            phoneError.textContent = 'Mobile Number is Mandatory!'
        }
        else {
            if (phone.match(numExp)) {
                if (phone.length === 10) {
                    phoneError.textContent = ''
                } else {
                    phoneError.textContent = 'Mobile Number should be 10 Digits only'
                }

            }
            else {
               phoneError.textContent = 'Mobile Number should be in digits only'
            }
        }

        //Email  Address validations

        if (email === '') {
            emailError.textContent = ' Email Address is Mandatory!'
        } else {
            if (email.match(emailExp)) {
                emailError.textContent = ''
            }
            else {
                emailError.textContent = 'Invalid Email Address!'
            }
        }








        axios.post(`http://localhost:5000/bookings`, bookings)
            .then(() => {
                alert("Booking Submitted successfully !");
                setBookings({ name: "", phone: "", email: "", date: "", vehicle: "", people: "" })
            })
            .catch(() => alert("error"))
    }
    return (
        <form onSubmit={submitHandler}>
            <div className='row g-3'>
                <div className="col-md-6">
                    <label for="name" className="form-label fw-semibold">Full Name</label>
                    <input type='text' value={bookings.name} name='name' onChange={changeData} placeholder='Enter Name' className='form-control' />
                    <p id='nameError'></p>
                </div>

                <div className='col-md-6'>
                    <label for='phone' className='form-lable fw-semibold my-1'>Mobile Number</label>
                    <input type='text' value={bookings.phone} name='phone' onChange={changeData} placeholder='Mobile Number' className='form-control' />
                    <p id='phoneError'></p>
                </div>

                <div className='col-md-6'>
                    <label for='email' className='form-lable fw-semibold'>Email Address</label>
                    <input type='text' value={bookings.email} name='email' onChange={changeData} placeholder='Email Address' className='form-control' />
                    <p id='emailError'></p>
                </div>
                <div className='col-md-6 mt-2'>
                    <label for='date' className='form-label fw-semibold '>Travel Date</label>
                    <input type="date" value={bookings.date} onChange={changeData} name="date" className="form-control" required />
                </div>
                <div className='col-md-6'>
                    <label for='vehicles' className='form-lanel fw-semibold' >Vehicle Type</label>
                    <select name="vehicle" value={bookings.vehicle} onChange={changeData} className="form-select">
                        <option value="" hidden>Choose...</option>
                        <option value="car">Car</option>
                        <option value="suv">SUV</option>
                        <option value="bike">Bike</option>
                        <option value="van">Van</option>
                    </select>
                </div>
                <div className="col-md-6 mt-2">
                    <label for="people" className="form-label fw-semibold">No. of Travelers</label>
                    <input type="number" value={bookings.people} name="people" onChange={changeData} className="form-control" min="1" placeholder="e.g., 2" required />
                </div>
                <button type="submit" className="btn btn-primary mt-4 px-4 py-2 ">
                    <i className="bi bi-car-front me-2"></i>Book Now
                </button>
            </div>
        </form>
    )
}

export default NewBooking
