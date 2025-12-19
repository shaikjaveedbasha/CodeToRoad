import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BsFillPencilFill, BsFillTrash3Fill } from 'react-icons/bs'
import { toast, ToastContainer } from 'react-toastify'
import DataTable from 'datatables.net-dt'


const ViewDestinations = () => {
    const [destinations, setDestinations] = useState([])
    const [message, setMessage] = useState(null)
    const [destination, setDestination] = useState({ title: '', lacation: '', category: '', durations: '', distance: '', bestTimeToVisit: '', rating: '', img: '' })

    useEffect(() => {
        axios.get(`http://localhost:5000/destinations`)
            .then((res) => setDestinations(res.data))
            .catch((err) => setMessage(err.message))


        setTimeout(() => {
            let table = new DataTable('#myTable');
        },1000)

    })

    const deleteDestination = (did) => {
        axios.delete(`http://localhost:5000/destinations/${did}`)
            .then(() => toast('Destination Deleted ! '))
            .catch((err) => setMessage(err.message))
    }

    const getOneRecord = (did) => {
        axios.get(`http://localhost:5000/destinations/${did}`)
            .then((res) => setDestination(res.data))
            .catch((err) => setMessage(err.message))

    }

    const UpdateState = (e) => {
        const { name, value } = e.target
        setDestination({ ...destination, [name]: value })
    }



    const submitHandler = (e) => {
        e.preventDefault()
        console.log(destination);
        axios.put(`http://localhost:5000/destinations/${destination.id}`, destination)
            .then(() => {
                setDestination({ title: '', lacation: '', category: '', durations: '', distance: '', bestTimeToVisit: '', rating: '', img: '' })
                toast(' Destinations Added Successfully')
            })
    }

    return (
        <div className='container p-5'>
            <h2>View Destinations</h2>

            <ToastContainer />

            <table className='table table-bordered' id='myTable'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Durations </th>
                        <th>Distance </th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {message && <tr><td colSpan={5}><p className='p-5 text-center'>{message}</p></td></tr>}
                    {
                        destinations.map((des, index) => {
                            return <tr key={index}>
                                <td>{des.title}</td>
                                <td>{des.category}</td>
                                <td>{des.durations}</td>
                                <td>{des.distance}</td>
                                <td>
                                    <button onClick={() => getOneRecord(des.id)} data-bs-target='#update' data-bs-toggle='modal' className='btn btn-primary me-5'><BsFillPencilFill /></button>
                                    <button onClick={() => deleteDestination(des.id)} className='btn btn-danger'><BsFillTrash3Fill /></button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
            <div className='modal fade' id='update'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h3>Update Destinations</h3>
                        </div>
                        <div className='modal-body'>
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

                                <input name='distance' value={destination.distance} onChange={UpdateState} placeholder='Destination distance' className='form-control mb-3' />

                                <select name='bestTimeToVisit' value={destination.bestTimeToVisit} onChange={UpdateState} className='form-control mb-3'>
                                    <option value={''}>Best Time To Visit</option>
                                    <option value={'All Seasons'}>All Seasons</option>
                                    <option value={'Winter'}>Winter</option>
                                    <option value={'Monsoon'}>Monsoon</option>
                                    <option value={'Summer'}>Summer</option>
                                </select>
                                <input name='rating' value={destination.rating} onChange={UpdateState} placeholder='Destination rating' className='form-control mb-3' />

                                <input name='img' value={destination.img} onChange={UpdateState} placeholder='Destination img' className='form-control mb-3' />

                                <input type='submit' data-bs-dismiss='modal' className='form-control mb-3' />

                            </form>

                        </div>
                        <div className='modal-footer'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewDestinations
