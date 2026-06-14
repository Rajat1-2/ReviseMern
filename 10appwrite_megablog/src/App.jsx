import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import conf from './conf/conf'

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL);
  // via vite use import.meta.env.
  return (
    <>
      <h1 className='text-3xl bg-blue-300 flex justify-center'>HII MEGA </h1>
    </>
  )
}

export default App
