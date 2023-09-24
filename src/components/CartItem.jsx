import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri"
import { useSelector, useDispatch } from 'react-redux';
import { addToCart,  removeToCart, removeProduct } from '../features/addToCart/addCartSlice';
const CartItem = () => {


  const products = useSelector((state) => state.addToCart.products);
  const dispatch = useDispatch();



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
    <>


      {
        products.map(product => (

          <div className='flex py-5 gap-5 md:gap-5 border-b'>

            {/* image start */}

            <div className='shrink-0 aspect-square w-[50px] md:w-[120px]'>
              <img src={product.image} alt="" />
            </div>

            {/* image end */}

            <div className='w-full flex flex-col'>

              <div className='flex flex-col md:flex-row justify-between'>
                <div className='text-lg  md:text-2xl font-semibold text-black/[0.8] capitalize'>
                  {product.title}
                </div>

                <div className='capitalize text-sm md:text-md font-medium text-black/[0.5] block md:hidden'>

               {product.category}
                </div>


                <div className='text-sm md:text-md font-bold text-black/[0.5] mt-2'>
                  PKR : Rs {Math.round(product.price)}
                </div>

              </div>


              <div className='capitalize text-sm md:text-md font-bold text-black/[0.5] md:block hidden'>
              {product.category}
              </div>


              <div className='flex items-center flex-wrap b justify-between mt-4 w-full overflow-hidden'>

                <div className='flex items-center flex-wrap
                 gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md'>
                  <div className='flex items-center gap-1'>
                    <div className='font-semibold'>
                      Size:
                    </div>
                    <select className='hover:text-black'>
                      <option value="1">Select  </option>
                      <option value="2">Uk 6</option>
                      <option value="3">Uk 6.5</option>
                      <option value="4">Uk 7.5</option>
                      <option value="5">Uk 8</option>
                      <option value="6">Uk 8.5</option>
                      <option value="7">Uk 9</option>
                      <option value="8">Uk 10</option>
                      <option value="9">Uk 10.5</option>
                    </select>


                  </div>
                  <div className='flex items-center gap-1'>
                    <div className='font-semibold'>
                      Quantity:
                    </div>
                    {product.quantity}


                  </div>
                  <div className={`flex items-center justify-between border  w-32
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

                <RiDeleteBin6Line
                onClick={() => handleRemove(product)}
                 className=' mt-5 sm:m-0 cursor-pointer text-black/[0.5]
                  hover:text-black text-[16px] md:text-[20px]' />
              </div>

            </div>

          </div>
        ))
      }
    </>
  )
}

export default CartItem
