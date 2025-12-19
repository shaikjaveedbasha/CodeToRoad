import React, { useContext, useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router'
import { loginStatus } from '../../App'

const Dashboard = () => {
    const [login, setLogin] = useContext(loginStatus)
    const navigate = useNavigate()

    useEffect(()=>{
        if(!login){
            navigate('/admin')
        }
    })



    return (
        <div className='container-fluid' >
            <div className='row'>
                <aside className='col-lg-3'>
                    <Link to={''}>
                        <button className='mb-3 fw-bold '>Admin Dashboard</button>
                    </Link>
                    <Link to={'adddestination'}>
                        <button>Add Destination</button>
                    </Link>
                    <Link to={'viewdestinations'}>
                        <button>View Destinations</button>
                    </Link>
                    <Link to={'viewbookings'}>
                        <button>View Booking</button>
                    </Link>
                    <Link to={'viewreviews'}>
                        <button>View Reviews</button>
                    </Link>
                     <Link to={'viewreviews'}>
                        <button onClick={()=>setLogin(false)}>Logout</button>
                    </Link>

                </aside>
                <div className='col-lg-9'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
