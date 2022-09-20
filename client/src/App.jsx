import { useState } from 'react'
import getGeoInformation from './services/geocode'
import getImage from './services/getImage'
import getWalkscore from './services/walkscore'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import SearchBar from './components/main/searchBar'
import CityInformation from './components/main/cityRow/cityInformation'
import Score from './components/main/cityRow/scores/scores'
import { keyframes, css } from 'styled-components'

import './App.css'


function App() {

  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Score
        percent={90}
      />
      <CityInformation />
      <Footer />
    </div>
  )
}

export default App
