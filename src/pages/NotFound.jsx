import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
   <div className=' pt-[3rem] flex items-center justify-between flex-col gap-10 pb-20 h-screen'>


<div className='text-black font-extrabold text-[7rem]  sm:text-[12rem] '>404</div>
<img src="/logo.svg" className=' md:w-52 w-32 ' alt="" />

<div className='text-black font-bold capitalize text-4xl'>just do it.</div>
<Link to={'/'} className='text-white bg-black px-4 py-2 rounded-lg hover:opacity-75 active:scale-95'>  Continue shopping</Link>
   </div>
    </>
  )
}

export default NotFound
