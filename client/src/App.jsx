import { useState, useEffect } from 'react'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import CityList from './components/main/cityList'
import { supabase } from './services/supabaseClient'
import Auth from './components/auth/auth'
import Account from './components/auth/account'

import './App.css'

export async function getProfile(user) {
  const { data, error } = await supabase.from('profiles').select('*').eq('id', user.user.id)
  return data;
}

async function initializeProfile(user) {
  const { data, error } = await supabase
    .from('profiles')
    .insert([
      { id: `${user.user.id}`, username: `${user.user.email}` }
    ])
  
}

function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      let profileDataLength;
      let profileData = getProfile(session).then(
        res => res.length
      ).then(res => {
        if (res === 0) {
          initializeProfile(session)
        }
      })



    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      
    })
  }, [])



  return (
    <div className="App">
      <Header />
      <div className='wrapper'>
        <CityList key="cityList" />
      </div>
      <Footer />
    </div>
  )
}

export default App
