import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Customers from '../component/Customers'
import Dashboard from '../component/Dashboard'
import BitcoinPrices from '../component/BitcoinPrices'
import MyWallet from '../component/MyWallet'
import MySetting from '../component/MySetting'

const Path = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard />}/>
        <Route path='/customers' element={<Customers />}/>
        <Route path='/prices' element={<BitcoinPrices />}/>
        <Route path='/wallet' element={<MyWallet />} />
        <Route path='/setting' element={<MySetting />} />

      </Routes>
    </div>
  )
}

export default Path
