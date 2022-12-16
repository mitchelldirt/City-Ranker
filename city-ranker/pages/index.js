import { useState, useEffect } from 'react'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import CityList from '../components/main/cityList'
import { supabase } from '../services/supabaseClient'
import { getProfile, initializeProfile, setInitialCityList, verifySession, logOut, refreshPage } from '../services/supabaseFunctions'
import LogIn from '../components/auth/login'
import LogOut from '../components/auth/logout'
import App from '../components/App'
import React from 'react';


function Index() {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

export default Index
