import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

const DestinationReviews = () => {
    const {id} = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/reviews`)
            .then((res) => {
                const filterData = res.data.filter((review) => review.destinationid === id);
                setReviews(filterData);
            })
            .catch((err)=>console.log(err));
    },[id]);

    return (
        <div className='row mt-4'>
            <h2 className='fw-bold text-primary mb-4'>Customer Reviews</h2>
            {
                reviews.map((item)=>(
                    <div key={item.id} className='col-12 col-md-6 col-lg-4 mb-4'>
                        <div className='card shadow border-0 p-3 h-100'>
                            <img src={item.img} style={{width:"50px", height:"50px" }} alt={item.title} />
                            <h4 className='fw-bold text-primary '>{item.name}</h4>
                            <p className='fw-bold  '>{item.email}</p>
                            <p className='fw-bold  '>{item.location}</p>
                            <p className='fw-bold  '>{item.destination}</p>
                            <div className='text-warning fs-4 mb-2'>
                                {"★". repeat(Number(item.rating))}
                            </div>
                            <p className='mb-0 text-secondary'>{item.review}</p>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default DestinationReviews
