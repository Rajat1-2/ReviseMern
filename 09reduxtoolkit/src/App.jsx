import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Addtodo from './components/Addtodo'
import Todo from './components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <h1 className="text-4xl mt-40 mb-10 font-bold text-center ">
      My Todos 🚀
    </h1>      <div >
        <Addtodo/>
        <Todo/>
      </div>
    </>
  )
}

export default App
