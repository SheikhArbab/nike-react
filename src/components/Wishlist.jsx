import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setWish } from '../features/wishList/whishListSlice';
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';
import { clearAll } from '../features/addToWish/addWishSlice';


const Wishlist = () => {
  const dispatch = useDispatch();
  const wishList = useSelector((state) => state.wishList.value);
  const handleWish = () => {
    dispatch(setWish(false));
  };
  const handleClearAll = () => {
    dispatch(clearAll([]));
  };
  const products = useSelector((state) => state.addToWish.products);

  return (
    <>
      <div
        className={`${wishList ? 'w-full' : 'w-0'
          } overflow-hidden duration-300 transition-all bg-black/[0.7]  right-0 top-0 h-full fixed z-50`}
      >
        <div className='h-full overflow-x-hidden overflow-y-scroll bg-white w-72 absolute right-0 duration-300 transition-all flex flex-col items-center justify-between'>
          <div className='flex items-center justify-between w-full p-4'>
            {products.length >= 1 ? (<button
              className='capitalize bg-red-600 text-white rounded-md py-2 px-4 font-semibold hover:opacity-80 active:scale-95 duration-300 transition-all'
              onClick={handleClearAll}
            >
              clear all
            </button>) : (<div></div>)}
            <button
              onClick={handleWish}
              className='capitalize bg-black text-white rounded-md py-2 px-4 font-semibold hover:opacity-80 active:scale-95 duration-300 transition-all'
            >
              x
            </button>
          </div>




          <div className='flex flex-col items-center justify-start gap-2 px-2 py-10 h-full '>
            {products.length === 0 ? (

              <div className='flex items-center flex-col justify-center'>
                <img src="/empty-cart.jpg" alt="" />
                <p className='font-semibold'>Your Wishlist is currently empty</p>


                <Link

                  onClick={handleWish}
                  to={'/'} className='mt-10 text-white bg-black px-4 py-2 rounded-lg hover:opacity-75 active:scale-95'>  Continue shopping</Link>

              
              </div>


            ) : (
              products.map((product) => {
                const slug = product.title
                  .toLowerCase()
                  .replace(/[^a-z0-9 -]/g, '')
                  .replace(/\s+/g, '-')
                  .replace(/-+/g, '-');

                return (
                  <div key={product.id}>
                    <Link
                      to={`/product/${slug}#header`}
                      key={product.id}
                      className='hover:scale-105 duration-300 transition-all w-full shadow-md p-2 h-36 flex items-center justify-between gap-2 overflow-hidden'
                    >
                      <img
                        src={product.image}
                        className='w-20 h-full object-contain'
                        alt=''
                      />
                      <div>
                        <h1 >{product.title.slice(0, 22)}</h1>
                        <p className='text-black/[0.6]'>
                          Rs: <span className='text-green-500'>{product.price}</span>
                        </p>
                        <p className='text-black/[0.6]'>
                          Rating :{' '}
                          <StarRatings
                            rating={product.rating.rate}
                            starRatedColor='red'
                            numberOfStars={6}
                            name='rating'
                            starEmptyColor='lightgray'
                            starDimension='14px'
                            starSpacing='2px'
                          />
                        </p>
                      </div>
                    </Link>


                  </div>
                );
              })
            )}
          </div>


        </div>
      </div>
    </>
  );
};

export default Wishlist;
