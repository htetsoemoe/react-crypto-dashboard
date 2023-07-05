import React from 'react'
import CryptoTable from './component/CryptoTable'
import CryptoTrending from './component/CryptoTrending'
import CryptoRecentlyAdded from './component/CryptoRecentlyAdded'
import CryptoSocialsCarousel from './component/CryptoSocialsCarousel'
import CryptoPriceLineChart from './component/CryptoPriceLineChart'
import CryptoVerticalBar from './component/CryptoVerticalBar'
import Header from './component/Header'
import Siderbar from './component/Sidebar'
import Dashboard from './component/Dashboard'
import Path from './routes/Path'

const App = () => {
  return (
   <div>
    {/* <Dashboard /> */}
    <Path />
   </div>
  )
}

export default App