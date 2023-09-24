import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"

const ProductsDetailsSlider = ({product}) => {

    
    const imgs = [
        product.image,
        '/p2.png',
        '/p3.png',
        '/p4.png',
        '/p5.png',
        '/p6.png',
        '/p7.png',
    ]

  return (
    <>
    <div className='text-white text-[20pxd] w-full max-w-[1360px mx-auto sticky top-[50px]]'>

    <Carousel
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                thumbWidth={60}
                className='productCarousel'
                >
               {
imgs.map((i, index) => {

return(


    <div key={index} className='z-10'>
    <img src={i} className='aspect-[16/10] md:aspect-auto object-contain' alt="Image 1" />

</div>


)

})

               }
               
            </Carousel>
    </div>
    </>
  )
}

export default ProductsDetailsSlider
