import { useState } from 'react'
import getGeoInformation from './services/geocode'
import getImage from './services/getImage'
import getWalkscore from './services/walkscore'
import Header from './components/header/header'
import Footer from './components/footer/footer'

import './App.css'

function App() {

  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  )
}

export default App
