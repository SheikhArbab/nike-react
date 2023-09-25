import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import Category from './pages/Category';
import Contact from './pages/Contact';
import About from './pages/About';

const App = () => {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:title' element={<ProductDetail />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/collections/:category' element={<Category/>} />
        <Route path='/cart' element={<Cart />} />
      </Route>
    )
  );


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
