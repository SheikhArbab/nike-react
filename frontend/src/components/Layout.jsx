import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Wishlist from './Wishlist';


const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Sidebar />
      <Wishlist />
      <Footer />
    </>
  )
}

export default Layout
