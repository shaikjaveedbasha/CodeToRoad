import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './Home'
import Story from './Story'
import Reviews from './Reviews'
import Services from './Services'
import BookDrive from './BookDrive'
import Nopage from './Nopage'
import Destinations from './Destinations'
import AdminLogin from './Admin/AdminLogin'
import Dashboard from './Admin/Dashboard'
import DestinationsDetails from './DestinationsDetails'
import AddDestinations from './Admin/AddDestinations'
import ViewDestinations from './Admin/ViewDestinations'
import Welcome from './Admin/Welcome'
import ViewReviews from './Admin/ViewReviews'
import ViewBookings from './Admin/ViewBooking'



const Routing = () => {
    return (
        <Routes>
            <Route path='/' Component={Home} />
            <Route path='/story' Component={Story} />
            <Route path='/reviews' Component={Reviews} />
            <Route path='/services' Component={Services} />
            <Route path='/booking' Component={BookDrive} />
            <Route path='/destinations' Component={Destinations} />
            <Route path='/destinationsDetails/:id' Component={DestinationsDetails} />
            <Route path='/admin' Component={AdminLogin} />
            <Route path='/dashboard' Component={Dashboard}>
                <Route path='' Component={Welcome}/>
                <Route path='adddestination' Component={AddDestinations} />
                <Route path='viewdestinations' Component={ViewDestinations} />
                <Route path='viewreviews' Component={ViewReviews} />
                <Route path='viewbookings' Component={ViewBookings} />
            </Route>
            <Route path='*' Component={Nopage} />
        </Routes>
    )
}

export default Routing
