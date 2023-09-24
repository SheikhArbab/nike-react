import React from 'react';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../features/addToCart/addCartSlice';

const Cart = () => {
  const products = useSelector((state) => state.addToCart.products);

  const calculateTotalPrice = () => {
    
    return products.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  };

const dispatch = useDispatch()
  
  const handleClearAll = () => {
    dispatch(clearCart([]));
  };
  return (
    <div className="w-full md:py-20">
      <div className='w-full h-full max-w-[1280px] px-5 md:px-10 mx-auto py-[100px]'>

        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0 ">
          <div className='text-[28px] md:text-[34px] mb-5 font-semibold leading-tight capitalize '>
            shopping cart
          </div>
        </div>

        {products.length >= 1 ? (
          <div className='flex flex-col lg:flex-row gap-12 py-10'>
            <div className='flex-[2]'>
              <div className='text-lg font-bold capitalize'>cart items</div>
              <CartItem />
            </div>

            <div className="flex-[1]">
              <div className='text-lg font-bold capitalize'>summary</div>
              <div className='p-5 my-5 bg-black/[0.05] rounded-xl'>
                <div className='flex justify-between'>
                  <div className='uppercase text-md md:text-lg font- text-black'>subtotal</div>
                  <div className='capitalize text-md md:text-lg font-medium text-black'>
                    PKR Rs {calculateTotalPrice()}
                  </div>
                </div>
                <div className='text-sm md:text-md py-5 border-t mt-5'>
                  The subtotal reflects the total price of your order, including duties and taxes, before any applicable discounts. It does not include delivery costs and international transaction fees.
                </div>
              </div>
              <button 
              onClick={handleClearAll}
              className='capitalize w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-all active:scale-95 mb-3 hover:opacity-75'>clear all</button>
            </div>
          </div>
        ) : (
          <div className='flex-[2] flex flex-col  items-center pb-[50px] md:mt-14'>
            <img src="/empty-cart.jpg" alt="" className='w-[300px] md:w-[400px]' />
            <span className='text-xl font-bold'>
              Your cart is empty
            </span>
            <span className='text-center mt-4'>
              Looks like you haven't added anything to your cart.
              <br />
              Go ahead and explore top categories.
            </span>
            <Link to={'/'} className='text-white mt-8 bg-black px-4 py-2 rounded-lg hover:opacity-75 active:scale-95'>Continue shopping</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
