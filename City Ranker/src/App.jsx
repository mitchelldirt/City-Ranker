import { useState } from 'react'
import reactLogo from './assets/react.svg'
const pexelsAPI = import.meta.env.VITE_PEXELS_API
const googleAPI = import.meta.env.VITE_GOOGLE_API
const walkscoreAPI = import.meta.env.VITE_WALKSCORE_API

import './App.css'
fetch(
  "https://api.pexels.com/v1/search?query=minneapolis&per_page=1",
  {
    headers: {
      Authorization: `${pexelsAPI}`,
    }
  }
).then(res => {
  return res.json()
}).then(jsonRes => {
  console.log(jsonRes)
})

fetch(
  `https://maps.googleapis.com/maps/api/geocode/json?address=minneapolis, MN&key=${googleAPI}`
).then(res => {
  return res.json()
}).then(jsonRes => {
  console.log(jsonRes)
}
)

const options = {method: 'GET', mode: 'no-cors'};

fetch('https://api.walkscore.com/score?format=json&address=Minneapolis&lat=44.9777&lon=-93.2650&bike=1&wsapikey=53b1577832edc3effe719093144ca220', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));


function App() {

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </div>
  )
}

export default App
