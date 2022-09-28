import { useState, useEffect } from 'react'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import CityList from './components/main/cityList'
import { supabase } from './services/supabaseClient'
import { getProfile, initializeProfile, setInitialCityList, verifySession, logOut } from './services/supabaseFunctions'
import './App.css'
import LogIn from './components/auth/login'
import LogOut from './components/auth/logout'

function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)

      if (session){
      let profileDataLength;
      let profileData = getProfile(session).then(
        res => res.length
      ).then(res => {
        if (res === 0) {
          initializeProfile(session)
        }
      })
  }})

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <div className="App">
      {session ? <LogOut onClick={logOut}/> : <LogIn />}
      <Header />
      <div className='wrapper'>
        <CityList key="cityList" />
      </div>
      <Footer />
    </div>
  )
}

export default App
