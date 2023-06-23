import React from 'react'
import CryptoTable from './component/CryptoTable'
import CryptoTrending from './component/CryptoTrending'
import CryptoRecentlyAdded from './component/CryptoRecentlyAdded'


const App = () => {
  return (
    <div>
      <h2 className='text-2xl font-semibold text-center'>Crypto Dashboard</h2>
      <div className="flex justify-center gap-10 mt-10 md:flex-wrap">
        <CryptoTrending />
        <CryptoRecentlyAdded />
      </div>
      <CryptoTable />
    </div>
  )
}

export default App