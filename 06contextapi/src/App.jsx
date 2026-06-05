import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import UserContexProvider from './contexts/UserContexProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContexProvider>
      <h1>HII CONTEXT API</h1>
      <Login/>
      <Profile/>
    </UserContexProvider>
  )
}

export default App
