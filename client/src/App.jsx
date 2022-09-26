import { useState, useEffect } from 'react'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import CityList from './components/main/cityList'
import { supabase } from './services/supabaseClient'
import Auth from './components/auth/auth'
import Account from './components/auth/account'

import './App.css'

const { data, error } = await supabase.auth.getSession()
console.log(data)

function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  

  return (
    <div className="App">
      <Header />
      <Auth />
      <div className='wrapper'>
        <CityList key="cityList" />
      </div>
      <Footer />
    </div>
  )
}

export default App
