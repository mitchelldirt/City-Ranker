import { useState } from 'react'
import reactLogo from './assets/react.svg'
const pexelsAPI = import.meta.env.VITE_PEXELS_API
const googleAPI = import.meta.env.VITE_GOOGLE_API
const walkscoreAPI = import.meta.env.VITE_WALKSCORE_API

import './App.css'

function callAPI() {
  fetch('http://localhost:9000/testAPI')
    .then(res => res.text())
    .then(res => console.log(res));
}

callAPI()

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
