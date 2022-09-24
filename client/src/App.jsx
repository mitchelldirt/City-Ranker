import { useState } from 'react'
import getGeoInformation from './services/geocode'
import getImage from './services/getImage'
import getWalkscore from './services/walkscore'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import CityRow from './components/main/cityRow/cityRow'
import CityList from './components/main/cityList'

import './App.css'

function App() {

  return (
    <div className="App">
      <Header />
      <div className='wrapper'>
      <CityList key="cityList"/>
  </div>
      <Footer />
    </div>
  )
}

export default App
