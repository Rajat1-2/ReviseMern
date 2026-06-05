import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { TodoContextProvider } from './contexts'
import { TodoForm, TodoItem } from './components'

function App() {
  const[todos,setTodo]=useState([])
  // if pehle se hi todos pde ho local storage me

  const addTodo=(todo)=>{
    // cant give todo like that as {id,msg,toggler }
    setTodo((prev)=>[{id:Date.now(),...todo}, ...prev])

  }
  const updateTodo = (id,todo)=>{
    setTodo((prev)=> prev.map((prevtodo)=>(prevtodo.id===id ? todo : prevtodo)))
  }
  // dlete nhi krna new arr bnao jisme purani saar value ho ise chodeke
  const deleteTodo=(id)=>{
    setTodo((prev)=> prev.filter((todo)=>todo.id !== id ))
  }
  // bs toggle krna h completed value baki as it is
  const toggleTodo=(id)=>{
    setTodo((prev)=> prev.map((prevtodo)=> prevtodo.id === id ? {...prevtodo, completed:!prevtodo.completed} : prevtodo ))
  }

  // localStorage concepts , 
  // useeffect if pehle se hi saved pde h local storafge me
  useEffect(() => {
    // key deni h  and will give string data , convert it to json
    const todos = JSON.parse(localStorage.getItem('todos'));
    if(todos && todos.length>0){
        setTodo(todos)
    }
  }, [])

// note key same rkhni h local storage me dete time
  useEffect(() => {
    // key deni h  and will give string data , convert it to json
    localStorage.setItem("todos",JSON.stringify(todos))
  }, [todos])
  


  return (
    <TodoContextProvider  value={{todos,addTodo,deleteTodo,updateTodo,toggleTodo}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=> (
                          <div key={todo.id}
                          className='w-full'>
                            <TodoItem todo={todo}/>

                          </div>
                        ) )}
                    </div>
                </div>
            </div>

     </TodoContextProvider>       
  )          
}

export default App
