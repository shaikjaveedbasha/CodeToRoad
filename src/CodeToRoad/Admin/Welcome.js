import React from 'react'
import useCallApi from './CallApi'

const Welcome = () => {
    const destinations = useCallApi('destinations')
    const bookings = useCallApi('bookings')
    const reviews = useCallApi('reviews')
    return (
        <div className='container h-100  text-center'>
            <h3>Welcome to Admin  Dashboard</h3>
            <div className='row g-4 '>
                <div className='col-lg-4'>
                    <div className='card'>
                        <div className='card-body'>
                            <h1>{destinations.length}+</h1>
                            <p>Destinations</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='card'>
                        <div className='card-body'>
                            <h1>{bookings.length}+</h1>
                            <p>Bookings</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='card'>
                        <div className='card-body'>
                            <h1>{reviews.length}+</h1>
                            <p>Reviews</p>
                        </div>
                    </div>
                </div>              
            </div>
        </div>
    )
}

export default Welcome
