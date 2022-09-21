import { useState } from 'react'
import getGeoInformation from './services/geocode'
import getImage from './services/getImage'
import getWalkscore from './services/walkscore'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import SearchBar from './components/main/searchBar'
import CityRow from './components/main/cityRow/cityRow'

import './App.css'


function App() {

  return (
    <div className="App">
      <Header />
      <SearchBar />
      <CityRow imgURL={'https://images.pexels.com/photos/8536720/pexels-photo-8536720.jpeg?auto=compress&cs=tinysrgb&h=130'} cityName={'Portland OR, USA'} walkScore={67} bikeScore={49} transitScore={83} />
      <Footer />
    </div>
  )
}

export default App
