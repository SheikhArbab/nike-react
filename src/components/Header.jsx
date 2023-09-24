import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu';
import { IoMdHeartEmpty } from "react-icons/io"
import { BsCart } from "react-icons/bs"
import MenuMobile from './MenuMobile';
import { useDispatch, useSelector } from 'react-redux';
import { sidebar } from '../features/sidebar/sidebarSlice';
import { setWish } from '../features/wishList/whishListSlice';



const Header = () => {



    const cartNumber = useSelector(state => state.addToCart.products)



    const wishNumber = useSelector(state => state.addToWish.products)

    const dispatch = useDispatch()

    const handleSidebar = () => {
        dispatch(sidebar(true))
    }
    const handleWish = () => {
        dispatch(setWish(true))
    }

    const [menu, setMenu] = useState(false)

    return (
        <>
            <header id='header' className={`w-full h-[50px] md:h-[80px] bg-white shadow-md flex items-center justify-between fixed z-30  top-0 transition-transform duration-300`}
            >

                <div className={`w-full max-w-[1290px ] px-5 md:px-10 mx-auto flex items-center justify-between `}>
                    <Link to={'/'}><img src="/logo.svg" className='w-[40px] md:w-[60px]' alt="" /></Link>
                    <Menu />
                    {
                        menu ? <MenuMobile /> : ''
                    }



                    <div className='flex items-center gap-2 text-black'>

                        {/* icon-start */}
                        <div

                            onClick={handleWish}
                            className='w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative'><IoMdHeartEmpty
                                className='text-[15px] md:text-[20px]' />
                            <div className='w-[10px] h-[10px] md:h-[16px] md:w-[16px] rounded-full bg-red-600 absolute top-1 md:top-2 left-5 md:left-7 flex items-center justify-center text-white text-[6px] md:text-[9px] ] '>{wishNumber.length}</div>
                        </div>
                        {/* icon-end */}



                        {/* icon-start */}
                        <div
                            onClick={handleSidebar}
                            className='w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative'><BsCart
                                className='text-[12px] md:text-[20px]' />
                            <div className='w-[10px] h-[10px] md:h-[16px] md:w-[16px] rounded-full bg-red-600 absolute top-1 md:top-2 left-5 md:left-7 flex items-center justify-center text-white text-[6px] md:text-[9px] ]  '>

                                {
                                    cartNumber.length
                                }
                            </div>
                        </div>
                        {/* icon-end */}



                        {/* mobile icons start*/}
                        <div className='w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2 md:hidden    '>
                            <label htmlFor="check" className="menuButton" >
                                <input
                                    onClick={() => {
                                        setMenu(!menu)
                                    }}
                                    id="check" type="checkbox" />
                                <span className="top"></span>
                                <span className="mid"></span>
                                <span className="bot"></span>
                            </label>
                        </div>


                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
