import { useState,useEffect } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import conf from './conf/conf'
import { Header,Footer } from './components';
import authService from './appwrite/auth';
import { login,logout } from './store/authSlice';
import {Outlet} from 'react-router-dom'


function App() {
  const [loading, setLoading] = useState(true)
  const dispatch=useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userdata)=>{
      if(userdata){
        dispatch(login({ userData }));
      }else{
        dispatch(logout());
      }
    })
    .finally(()=> setLoading(false))
  }, [])
  

  // console.log(import.meta.env.VITE_APPWRITE_URL);
  // via vite use import.meta.env.
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block justify-center'>
        <Header/>
        <main>
          <Outlet/>
        </main>
        <Footer/>

      </div>
    </div>
    
  ) : (null)

}

export default App
