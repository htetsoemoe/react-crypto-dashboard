import React from 'react'
import CryptoTable from './component/CryptoTable'
import CryptoTrending from './component/CryptoTrending'


const App = () => {
  return (
    <div>
      <h2 className='text-2xl font-semibold text-center'>Crypto Dashboard</h2>
      <CryptoTrending />
      <CryptoTable />
    </div>
  )
}

export default App