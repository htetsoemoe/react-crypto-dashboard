import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import CryptoTable from './CryptoTable';
import CryptoTrending from './CryptoTrending';
import CryptoRecentlyAdded from './CryptoRecentlyAdded';
import CryptoSocialsCarousel from './CryptoSocialsCarousel';
import CryptoDataTable from './CryptoDataTable';

const Members = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div className="flex v-screen overflow-hidden">
            {/* Sidebar */}
            <div className="">
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            </div>

            <div className='w-[100%] v-screen bg-cyan-50 '>
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                <h1 className='flex justify-center py-3 m-10 text-2xl font-bold'>This is a Member Component, Testing 1, 2, 3...</h1>

                <div className=" flex justify-center gap-7 mb-5 mt-5 md:flex-wrap sm:flex-wrap max-sm:flex-wrap">
                    <CryptoTrending />
                    <CryptoRecentlyAdded />
                    <CryptoSocialsCarousel />
                </div>

                <div className="ml-8 mr-6">
                    <div className="">
                        <CryptoDataTable />
                    </div>
                </div>

            </div>
        </div>
    )

}

export default Members
