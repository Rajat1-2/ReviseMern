import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router'
// header and footer vhi rhe bs home change ho hr baar
function Layout() {
  return (
    <>
    <Header />
    <Outlet/>
    <Footer />

    </>
  )
}

export default Layout