import React from 'react'
import CryptoTable from './component/CryptoTable'
import CryptoTrending from './component/CryptoTrending'
import CryptoRecentlyAdded from './component/CryptoRecentlyAdded'
import CryptoSocialsCarousel from './component/CryptoSocialsCarousel'
import CryptoPriceLineChart from './component/CryptoPriceLineChart'
import CryptoVerticalBar from './component/CryptoVerticalBar'
import Header from './component/Header'

const App = () => {
  return (
    <div className='container mx-auto v-screen bg-cyan-50 mt-3'>
        <Header />

        <div className="flex justify-center gap-7 mb-5 mt-10 md:flex-wrap sm:flex-wrap max-sm:flex-wrap">
          <CryptoTrending />
          <CryptoRecentlyAdded />
          <CryptoSocialsCarousel />
        </div>

        <div className="flex justify-evenly md:flex-wrap sm:flex-wrap max-sm:flex-wrap p-3 gap-3">
          <CryptoPriceLineChart />
          <CryptoVerticalBar />
        </div>

        <CryptoTable />
    </div>
  )
}

export default App