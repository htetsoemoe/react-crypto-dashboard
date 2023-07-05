import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Customers from '../component/Customers'
import Dashboard from '../component/Dashboard'

const Path = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard />}/>
        <Route path='/customers' element={<Customers />}/>
      </Routes>
    </div>
  )
}

export default Path
