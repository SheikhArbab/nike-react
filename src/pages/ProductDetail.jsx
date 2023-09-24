import React from 'react'
import ProductsDetailsSlider from './../components/ProductsDetailsSlider';
import { IoMdHeartEmpty } from "react-icons/io"
import { useGetProductsQuery } from '../services/productsApi';
import { useParams } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import LoadingSpiner from '../components/LoadingSpiner';
import RelatedProducts from '../components/RelatedProducts';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/addToCart/addCartSlice';
import { addToWish } from '../features/addToWish/addWishSlice';

const ProductDetail = () => {

  const patch = useDispatch()

  const handleCart = (product) => {
    patch(addToCart(product))
  }
  const handleWish = (product) => {
    patch(addToWish(product));
  }

  const { error, data, isLoading } = useGetProductsQuery();
  const { title } = useParams();

  if (isLoading) return <LoadingSpiner />;

  if (error) {
    console.error('Error fetching products:', error);
    return <div>Error: {error.message}</div>;
  }

  const product = data.find((item) => item.title.toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-') === title);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <div className='w-full md:py-20'>


        <div className='w-full h-full max-w-[1280px] px-5 md:px-10 mx-auto py-[100px]'>

          <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]  '>


            {/* left col start   */}


            <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0'>

              <ProductsDetailsSlider product={product} />

            </div>

            {/* left col end   */}

            {/* right col start   */}

            <div className='flex-[1] py-3'>

              {/* titlle */}


              <div className="text-[34px] font-semibold mb-2 capitalize">

                {product.title}
              </div>

              {/* product title */}


              <div className='text-lg font-semibold mb-5'>

                Rating :      <StarRatings
                  rating={product.rating.rate}
                  starRatedColor="red"
                  numberOfStars={6}
                  name="rating"
                  starEmptyColor="lightgray"
                  starDimension="20px"
                  starSpacing="2px"
                />

              </div>


              {/* product price */}


              <div>PKR : Rs.{product.price}</div>

              <div className='text-md font-medium text-black/[0.5]'>
                incl. of texes
              </div>

              <div className='text-md font-medium text-black/[0.5] mb-20'>
                {`(Also includes all applicable duties)`}
              </div>


              {/* product size range start */}

              <div className="mb-10">

                <div className="flex justify-between mb-2">
                  <div className="text-sm font-semibold" >

                    Select Size
                  </div>

                  <div className="text-md font-medium text-black/[0.5] cursor-pointer capitalize">
                    select guide

                  </div>

                </div>


                <div className='grid grid-cols-3 gap-2 '>
                  <div className='capitalize cursor-pointer border rounded-md text-center py-3 font-medium hover:border-black'>
                    UK 6
                  </div>
                  <div className='capitalize cursor-pointer border rounded-md text-center py-3 font-medium hover:border-black'>
                    UK 6
                  </div>
                  <div className='capitalize cursor-pointer border rounded-md text-center py-3 font-medium hover:border-black'>
                    UK 6
                  </div>
                  <div className='capitalize cursor-pointer border rounded-md text-center py-3 font-medium hover:border-black'>
                    UK 6
                  </div>
                  <div className='capitalize cursor-pointer border rounded-md text-center py-3 font-medium hover:border-black'>
                    UK 6
                  </div>
                  <div className='capitalize cursor-pointer border rounded-md text-center py-3 font-medium hover:border-black'>
                    UK 6
                  </div>
                  <div className='capitalize cursor-pointer border rounded-md text-center py-3 font-medium hover:border-black'>
                    UK 6
                  </div>
                  <div className='capitalize cursor-pointer border rounded-md text-center py-3 font-medium hover:border-black'>
                    UK 6
                  </div>
                  <div className='capitalize cursor-pointer border rounded-md text-center py-3 font-medium hover:border-black'>
                    UK 6
                  </div>
                  <div className='capitalize cursor-pointer border rounded-md text-center py-3 font-medium hover:border-black'>
                    UK 6
                  </div>
                  <div className='capitalize cursor-not-allowed bg-black/[0.5] opacity-50 border rounded-md text-center py-3 font-medium hover:border-black'>
                    UK 6
                  </div>

                </div>

                {/* show error start */}



                {/* show error end */}

              </div>
              {/* product size range end */}

              {/* add to cart button start */}

              <button
                onClick={() => {
                  handleCart(product)
                }}
                className='w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95  mb-3 hover:opacity-75'>Add to Cart</button>

              {/* add to cart button end */}


              {/* wishlist button start */}

              <button
              onClick={()=>{
                handleWish(product)
              }}
              className='w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10'>Add to Whishlist
                <IoMdHeartEmpty size={20} />
              </button>

              {/* wishlist button end */}

              <div>

                <div className='capitalize text-lg font-bold mb-5'>
                  product details
                </div>
                <div className='mb-5 capitalize'>
                  {product.description}
                </div>

              </div>


            </div>
            {/* right col end   */}

          </div>
          <RelatedProducts products={data} />
        </div>

      </div>
    </>
  )
}

export default ProductDetail
