import React from 'react'
import CryptoTable from './component/CryptoTable'
import CryptoTrending from './component/CryptoTrending'
import CryptoRecentlyAdded from './component/CryptoRecentlyAdded'
import CryptoCommunity from './component/CryptoCommunity'
import CryptoSocialsCarousel from './component/CryptoSocialsCarousel'
import CryptoCommunityPost from './component/CryptoCommunityPost'


const App = () => {
  return (
    <div>
      <h2 className='text-2xl font-semibold text-center'>Crypto Dashboard</h2>
      <div className="flex justify-center gap-10 mt-10 md:flex-wrap sm:flex-wrap max-sm:flex-wrap">
        {/* <CryptoCommunityPost /> */}
        <CryptoTrending />
        <CryptoRecentlyAdded />
        {/* <CryptoCommunity /> */}
        <CryptoSocialsCarousel />
      </div>
      <CryptoTable />
    </div>
  )
}

export default App