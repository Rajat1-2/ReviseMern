import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Layout from './Layout.jsx'
import Home from './components/Main/Home.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import User from './components/user/User.jsx'
import Github from './components/github/Github.jsx'
import { githubinfolaoder } from './components/github/Github.jsx'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route path="" element={<Home />} />
			<Route path="about" element={<About />} />
			<Route path="contact" element={<Contact />} />
      {/*  user/:id  id ko yaad krlo ki konsi id honi chaiye as ye hi pass hogi */}
			<Route path="user/:userid" element={<User/>} />
      <Route path='github' 
         loader={githubinfolaoder}
           element={<Github/>}
          //  yha se hi api call kr skte h easily clcik krne se pehle data fetching shuru honjayegi use {laoder}
       />
		</Route>
	)
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
