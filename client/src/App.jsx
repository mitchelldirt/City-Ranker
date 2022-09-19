import { useState } from 'react'
import getGeoInformation from './services/geocode'
import getImage from './services/getImage'
import getWalkscore from './services/walkscore'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import SearchBar from './components/main/searchBar'
import CityInformation from './components/main/cityRow/cityInformation'

import './App.css'

console.log(getWalkscore('Seattle WA', '47.6085', '-122.3295'))

function App() {

  return (
    <div className="App">
      <Header />
      <SearchBar />
      <CityInformation />
      <Footer />
    </div>
  )
}

export default App
