import React, { useState } from 'react'
import Sidebar from './Sidebar';
import Header from './Header';
import CryptoTable from './dashboardComponents/CryptoTable';
import CryptoTrending from './dashboardComponents/CryptoTrending';
import CryptoRecentlyAdded from './dashboardComponents/CryptoRecentlyAdded';
import CryptoSocialsCarousel from './dashboardComponents/CryptoSocialsCarousel';

const BitcoinPrices = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>

      <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden w-[100%] bg-cyan-50 '>
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <h1 className='flex justify-center py-3 m-10 text-2xl font-bold'>This is a Bitcoin Prices Component, Testing 1, 2, 3...</h1>

        <div className=" flex justify-center gap-7 mb-5 mt-5 md:flex-wrap sm:flex-wrap max-sm:flex-wrap">
          <CryptoTrending />
          <CryptoRecentlyAdded />
          <CryptoSocialsCarousel />
        </div>

        <div className="ml-8 mr-6">
          <div className="">
            <CryptoTable />
          </div>
        </div>

      </div>
    </div>
  )
}

export default BitcoinPrices
