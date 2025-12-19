import axios from 'axios'
import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'

const AddDestinations = () => {
    const [destination, setDestination] = useState({ title: '', lacation: '', category: '', durations: '', distance: '', bestTimeToVisit: '', rating: '', img: '' })
    const [message, setMessage] = useState('')

    const UpdateState = (e) => {
        const { name, value } = e.target
        setDestination({ ...destination, [name]: value })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(destination);
        axios.post(`http://localhost:5000/destinations`, destination)
            .then(() => {
                setDestination({ title: '', lacation: '', category: '', durations: '', distance: '', bestTimeToVisit: '', rating: '', img: '' })
                toast('New Destinations Data Added Successfully')
            })
    }
    return (
        <div className='container p-5'>
            <div className='shadow p-5 text-center mx-auto col-lg-6'>
                <ToastContainer />
                {message && <p className='text-white text-bg-success p-3 my-5 '>{message}</p>}
                <h4 className='mb-3 fw-bold'>Add Destinations</h4>
                <form onSubmit={submitHandler}>

                    <input name='title' value={destination.title} onChange={UpdateState} placeholder='Destination title' className='form-control mb-3' />
                    <input name='lacation' value={destination.lacation} onChange={UpdateState} placeholder='Destination location' className='form-control mb-3' />
                    <select name='category' value={destination.category} onChange={UpdateState} className='form-control mb-3'>
                        <option value={''}>Destination Category</option>
                        <option value={'Weekend'}>Weekend</option>
                        <option value={'Long Drive'}>Long Drive</option>
                        <option value={'Adventure'}>Adventure</option>
                        <option value={'Hill Station'}>Hill Station</option>
                        <option value={'Beach'}>Beach</option>
                        <option value={'Historical'}>Historical</option>
                    </select>

                    <input name='durations' value={destination.durations} onChange={UpdateState} placeholder='Destination durations' className='form-control mb-3' />

                    <input name='distance'value={destination.distance} onChange={UpdateState} placeholder='Destination distance' className='form-control mb-3' />

                    <select name='bestTimeToVisit' value={destination.bestTimeToVisit} onChange={UpdateState} className='form-control mb-3'>
                        <option value={''}>Best Time To Visit</option>
                        <option value={'All Seasons'}>All Seasons</option>
                        <option value={'Winter'}>Winter</option>
                        <option value={'Monsoon'}>Monsoon</option>
                        <option value={'Summer'}>Summer</option>
                    </select>
                    <input name='rating'value={destination.rating} onChange={UpdateState} placeholder='Destination rating' className='form-control mb-3' />

                    <input name='img' value={destination.img} onChange={UpdateState} placeholder='Destination img' className='form-control mb-3' />

                    <input type='submit' className='form-control mb-3 bg-primary text-white' />

                </form>

            </div>
        </div>
    )
}

export default AddDestinations
