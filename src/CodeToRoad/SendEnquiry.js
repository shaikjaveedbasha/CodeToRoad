import React, { Component } from 'react'

export default class SendEnquiry extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            mobile: '',
            email: ''
        }
    }
    changeData = (e) => {
        console.log(e.target.name, e.target.value);

        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        const nameError = document.getElementById('nameError');
        const mobileError = document.getElementById('mobileError');
        const emailError = document.getElementById('emailError')
        const alphaExp = /^[a-zA-Z\s]+$/;
        const numExp = /^[0-9]+$/;
        const emailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        console.log(this.state);

        const { name, mobile, email } = this.state;


        //Name Validation
        if (name === '') {
            nameError.textContent = 'Name is mandatory!'
        } else {
            if (Number(mobile)) {
                nameError.textContent = ''
            }
            else {
                nameError.textContent = 'Name should be alphabatics only'
            }
        }


        //mobile validation
        if (mobile === '') {
            mobileError.textContent = 'Mobile Number is Mandatory!'
        }
        else {
            if (mobile.match(numExp)) {
                if (mobile.length === 10) {
                    mobileError.textContent = ''
                } else {
                    mobileError.textContent = 'Mobile Number should be 10 Digits only'
                }

            }
            else {
                mobileError.textContent = 'Mobile Number should be in digits only'
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

    }



    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div className='row g-3'>
                    <div className="col-md-6">
                        <label for="name" className="form-label fw-semibold">Full Name</label>
                        <input type='text' name='name' onChange={this.changeData} placeholder='Enter Name' className='form-control'/>
                        <p id='nameError'></p>
                    </div>

                    <div className='col-md-6'>
                        <label for='mobile' className='form-lable fw-semibold my-1'>Mobile Number</label>
                        <input type='text' name='mobile' onChange={this.changeData} placeholder='Mobile Number' className='form-control'/>
                        <p id='mobileError'></p>
                    </div>

                    <div className='col-md-6'>
                        <label for='email' className='form-lable fw-semibold'>Email Address</label>
                        <input type='text' name='email' onChange={this.changeData} placeholder='Email Address' className='form-control'/>
                        <p id='emailError'></p>
                    </div>
                    <div className='col-md-6 mt-2'>
                        <label for='date' className='form-label fw-semibold '>Travel Date</label>
                        <input type="date" id="date" className="form-control" required />
                    </div>
                    <div className='col-md-6'>
                        <label for='vehicles' className='form-lanel fw-semibold' >Vehicle Type</label>
                        <select id="vehicle" className="form-select">
                            <option selected disabled>Choose...</option>
                            <option value="car">Car</option>
                            <option value="suv">SUV</option>
                            <option value="bike">Bike</option>
                            <option value="van">Van</option>
                        </select>
                    </div>
                    <div className="col-md-6 mt-2">
                        <label for="people" className="form-label fw-semibold">No. of Travelers</label>
                        <input type="number" id="people" className="form-control" min="1" placeholder="e.g., 2" required />
                    </div>
                    <button type="submit" className="btn btn-primary mt-4 px-4 py-2 ">
                        <i className="bi bi-car-front me-2"></i>Book Now
                    </button>
                </div>
            </form>
        )
    }
}
