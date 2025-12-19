import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import { loginStatus } from '../../App'

const AdminLogin = () => {
    const [details, setDetails] = useState({ email: '', password: '' })
    const [login,setLogin]= useContext(loginStatus)

    const navigate = useNavigate()


    const updateState = (e) => {
        const { name, value } = e.target
        setDetails({ ...details, [name]: value })
    }
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(details);
        const { email, password } = details

        if (email === 'shaikjav3@gmail.com' && password === 'shaik') {
            setLogin(true)
            navigate('/dashboard')
        }       
        else {
            alert('Invalid Details')
        }

    }
    return (
        <div className='container p-5'>
            <div className='col-lg-6 p-5 shadow text-center mx-auto '>
                <h3>Admin <span className='text-primary'>Login</span></h3>
                <form onSubmit={submitHandler}>
                    <input type='email' onChange={updateState} name='email' placeholder='Email Address' className='form-control mb-3' />
                    <input type='password' onChange={updateState} name='password' placeholder='Password' className='form-control mb-3' />
                    <input type='submit' value={'Go to Dashboard'} className='form-control mb-3 bg-primary text-white' />
                </form>
            </div>
        </div>
    )
}

export default AdminLogin
