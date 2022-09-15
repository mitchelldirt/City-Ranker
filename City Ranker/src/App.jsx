import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
const pexelsAPI = import.meta.env.VITE_PEXELS_API
fetch(
  "https://api.pexels.com/v1/search?query=minneapolis", 
  {
    headers: {
      Authorization: `${pexelsAPI}`
    }
  }
).then(res => {
  return res.json()
}).then(jsonRes => {
  console.log(jsonRes)
})


function App() {
  const [count, setCount] = useState(0)

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
