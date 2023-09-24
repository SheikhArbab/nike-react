import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, clearCart, removeToCart, removeProduct } from '../features/addToCart/addCartSlice';
import { Link } from 'react-router-dom';
import { sidebar } from '../features/sidebar/sidebarSlice';
import { RiDeleteBin6Line } from "react-icons/ri";

const Sidebar = () => {
  const sideBar = useSelector((state) => state.sidebar.value);
  const products = useSelector((state) => state.addToCart.products);
  const dispatch = useDispatch();

  const handleSidebar = () => {
    dispatch(sidebar(false));
  };

  const handleClearAll = () => {
    dispatch(clearCart([]));
  };

  const handleAddCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveCart = (product) => {
    dispatch(removeToCart(product));
  };

  const handleRemove = (product) => {
    dispatch(removeProduct(product.id))
  };

  const cartNumber = useSelector(state => state.addToCart.products)


  return (
    <div className={`${sideBar ? 'w-full' : 'w-0'} overflow-hidden duration-300 transition-all bg-black/[0.7] z-30 right-0
     top-0 h-full 
    fixed`}>
      <div className='h-full overflow-x-hidden overflow-y-scroll bg-white w-80 absolute right-0 duration-300 transition-all
       flex flex-col items-center justify-between'>
        <div className='flex items-center justify-between w-full p-4'>


          {

            cartNumber.length >= 1 ? (<button
              onClick={handleClearAll}
              className='capitalize bg-red-600 text-white rounded-md py-2 px-4 font-semibold hover:opacity-80 active:scale-95 duration-300 transition-all'
            >
              clear all
            </button>) : (<div></div>)
          }

          <button
            onClick={handleSidebar}
            className='capitalize bg-black text-white rounded-md py-2 px-4 font-semibold hover:opacity-80 
            active:scale-95 duration-300 transition-all'
          >
            x
          </button>
        </div>

        <div className='h-full w-full px-2 pb-10 overflow-scroll'>
          {

            cartNumber.length >= 1 ?


              (products.map((product) => (
                  <div  className='flex py-3 items-center w-full justify-between px-2 shadow-md'>
                  <img src={product.image} className='object-contain w-28 h-32 me-2' alt='' />
                  <div>
                    <h1>{product.title.slice(0, 19)}...</h1>

                    <div className='flex items-center justify-between'>
                      <p className='my-2'>
                        Rs: <span className='text-green-500'>{product.price}</span>
                      </p>
                      <span onClick={() => handleRemove(product)}>
                        <RiDeleteBin6Line className='mt-5 sm:m-0 cursor-pointer text-black/[0.5] hover:text-red-500 text-[16px]' />
                      </span>
                    </div>

                    <p className='mb-2 w-32 text-xs text-black/[0.5]'>{product.description.slice(0, 28)}...</p>

                    <div className={`flex items-center justify-between border 
                    ${product.quantity >= 10 ? 'text-black/[0.5]' : 'text-black'}`}>
                      <button disabled={product.quantity >= 10 ? true : false} onClick={() => handleAddCart(product)} 
                      className='font-semibold border-r flex items-center justify-center px-2'>
                        +
                      </button>
                      <div className='bg-black/[0.1] w-full flex items-center justify-center'>{product.quantity}</div>
                      <button onClick={() => handleRemoveCart(product)} className='font-semibold border-l flex items-center
                       justify-center px-2'>
                        -
                      </button>
                    </div>
                  </div>
                </div>
           


              )) ) : <div className='flex flex-col items-center justify-center gap-4 '>
                <img src="/cart-empty.png" alt="" />

                <p className='font-semibold'>Your Cart is currently empty</p>

                <Link

                  onClick={handleSidebar}
                  to={'/'} className='mt-10 w-full flex items-center justify-center text-white bg-black px-4 py-2 rounded-lg hover:opacity-75 active:scale-95'> 
                   Continue shopping</Link>

              </div>


          }
                 <Link

onClick={handleSidebar}
to={'/cart'} className='mt-10 text-white bg-black w-full flex items-center justify-center px-4 py-2 rounded-lg hover:opacity-75 active:scale-95'> 
 CheckOut</Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
