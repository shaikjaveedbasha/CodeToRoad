import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './Home'
import Story from './Story'
import Reviews from './Reviews'
import Services from './Services'
import BookDrive from './BookDrive'
import Nopage from './Nopage'
import Destinations from './Destinations'



const Routing = () => {
    return (
        <Routes>
            <Route path='/' Component={Home}></Route>
            <Route path='/story' Component={Story}></Route>
            <Route path='/reviews' Component={Reviews}></Route>
            <Route path='/services' Component={Services}></Route>
            <Route path='/booking' Component={BookDrive}></Route>
            <Route path='/destinations' Component={Destinations}></Route>
            <Route path='*' Component={Nopage}></Route>
        </Routes>
    )
}

export default Routing
