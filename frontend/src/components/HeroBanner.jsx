import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { BiArrowBack } from 'react-icons/bi';

const HeroBanner = () => {

    const imgs = [
        '/slide-1.png',
        '/slide-2.png',
        '/slide-3.png',
    ]
    return (
        <div className='relative text-white text-[20px] w-full max-w-[1360px] mx-auto'>
            <Carousel
                infiniteLoop={true}
                autoPlay={true}
                interval={2000}
                showThumbs={false}
                showIndicators={false}
                showStatus={false}
                renderArrowPrev={(clickHandler, hasPrev) =>(
                    <div onClick={clickHandler}
                    className='absolute right-[31px] md:right-[105px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90'
                    >
                        <BiArrowBack className='text-sm md:text-lg'/>
                    </div>
                )}
                renderArrowNext={(clickHandler, hasNext) =>(
                    <div onClick={clickHandler}
                    className='absolute right-0 md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer  hover:opacity-90'
                    >
                        <BiArrowBack className='rotate-180 text-sm md:text-lg'/>
                    </div>
                )}
                >
               {
imgs.map((i, index) => {

return(


    <div key={index} className='z-10'>
    <img src={i} className='aspect-[16/10] md:aspect-auto object-cover' alt="Image 1" />
 
</div>


)

})

               }
               
            </Carousel>
        </div>
    );
}

export default HeroBanner;
