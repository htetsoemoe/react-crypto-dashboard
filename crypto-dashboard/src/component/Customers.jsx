import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const Customers = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    return (
        <div>
            <Sidebar />
            {/* <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}
            <h1 className='text-2xl font-semibold'>Customers List</h1>
           
        </div>
    )
}

export default Customers
