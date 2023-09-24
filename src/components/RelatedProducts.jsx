import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';

const RelatedProducts = ({products}) => {

  const responsive = {


    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }


  }
  return (
    <>

      <div className='mt-[50px] md:mt-[100px] mb-[100px] md:mb-0'>

        <div className='text-2xl capitalize font-bold mb-5'>
          you might also like
        </div>

        <Carousel responsive={responsive}
        containerClass="-mx-[10px]"
        itemClass='px-[10px]'
        >

{products.map(p => (

<Link to={`/product/${p.title  .toLowerCase()
                  .replace(/[^a-z0-9 -]/g, '')
                  .replace(/\s+/g, '-')
                  .replace(/-+/g, '-')}`} key={p.id}>

<div className='hover:scale-105 duration-300 transition-all py-4 shadow-sm flex flex-col items-center justify-center '>
<img className='w-full h-36 object-contain  mb-4 ' src={p.image}/>
<p>{p.title.slice(0, 19)}</p>
<p className='text-black/[0.6]'>Rs:{p.price}</p>
</div>

</Link>

))}

        </Carousel>

      </div>

    </>
  )
}

export default RelatedProducts
