import React from 'react'
import HeroBanner from './../components/HeroBanner';
import ProductCard from './../components/ProductCard';


const Home = () => {






  return (
    <>
      <div className='md:pt-20 pt-[3rem]'> <HeroBanner /></div>
      <div className='wrapper w-full max-w-[1290px ] px-5 md:px-10 mx-auto flex items-center justify-between flex-col'>

        <div className='text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]'>

          <div
            className='text-[28px] md:text-[34px] mb-5 font-semibold leading-tight'
          >Cushioning for your miles</div>

          <div
            className='text-md md:text-xl'
          >A litghtweight Nike ZoomX midsole is combined with increased stack heights to help provide cushioning during extended stretches of running. </div>
        </div>




        <div className='w-full h-fit gap-5 py-10 flex flex-wrap items-center justify-center'>
          <ProductCard  />

        </div>


      </div>
    </>
  )
}

export default Home
