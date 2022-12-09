import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Doctors from './Doctors'


const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/'  element={<Dashboard/>} />
      <Route path='/doctors'  element={<Doctors/>} />
   
    </Routes>
  )
}

export default AllRoutes
