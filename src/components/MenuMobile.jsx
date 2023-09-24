import React, { useState } from 'react';
import { BsChevronDown } from "react-icons/bs";
import { Link, NavLink } from 'react-router-dom';


const MenuMobile = () => {

    const data = [
        { id: 1, name: "Home", url: "/" },
        { id: 2, name: "About", url: "/about" },
        { id: 3, name: "Categories", subMenu: true },
        { id: 4, name: "Contact", url: "/contact" },
    ];

    const subMenuData = [
        { id: 1, name: "men's clothing", doc_count: 11, url: "/jordan" },
        { id: 2, name: "jewelery", doc_count: 8, url: "/sneakers" },
        { id: 3, name: "electronics", doc_count: 64, url: "/running" },
        { id: 4, name: "women's clothing", doc_count: 107, url: "/football-shoes" },
    ];

    const [cateMenu, setCateMenu] = useState(false)
    return (
        <ul className={`flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black`}>
            {data.map((item) => (
                <React.Fragment key={item.id}>
                    {!!item?.subMenu ? (
                        <li
                            onClick={() => {
                                setCateMenu(!cateMenu)
                            }}
                            className='flex items-start cursor-pointer py-4 px-5 border-b flex-col relative'>

                            <div
                                className='flex items-center justify-between w-full '>

                                {item.name}
                                <BsChevronDown size={14} />
                            </div>

                            {(
                                <ul className={`bg-black/[0.05] duration-300 transition-all -mx-5 mt-4 -mb-4 w-full ${cateMenu ? 'h-full' : 'h-0'} overflow-hidden`}>
                                    {subMenuData.map((submenu) => (
                                        <Link key={submenu.id} to={submenu.url}

                                        >
                                            <li className='py-4 px-8 border-t flex justify-between '>
                                                {submenu.name}
                                                
                                            </li>
                                        </Link>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ) : (
                        <li className='py-4 px-5 border-b'>
                            <NavLink to={item.url}
                            >{item.name}</NavLink>
                        </li>
                    )}
                </React.Fragment>
            ))}
        </ul>
    );
};

export default MenuMobile;
