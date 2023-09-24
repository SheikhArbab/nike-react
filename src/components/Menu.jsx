import React from 'react';
import { BsChevronDown } from "react-icons/bs";
import { NavLink } from 'react-router-dom';

const Menu = () => {


    const data = [
        { id: 1, name: "Home", url: "/" },
        { id: 2, name: "About", url: "/about" },
        { id: 3, name: "Categories", subMenu: true },
        { id: 4, name: "Contact", url: "/contact" },
    ];

    const subMenuData = [
        { id: 1, name: "men's clothing", doc_count: 11, url: "/product" },
        { id: 2, name: "jewelery", doc_count: 8, url: "/sneakers" },
        { id: 3, name: "electronics", doc_count: 64, url: "/running" },
        { id: 4, name: "women's clothing", doc_count: 107, url: "/football-shoes" },
    ];

    return (
        <ul className={`hidden md:flex items-center gap-8 font-medium`}>
            {data.map((item) => (
                <React.Fragment key={item.id}>
                    {!!item?.subMenu ? (
                        <li

                            className='flex items-center cursor-pointer gap-2 relative group'>
                            {item.name}
                            <BsChevronDown size={14} />
                            {(
                                <ul className='bg-white absolute top-6 h-0 group-hover:h-fit menuIn  overflow-hidden  left-0 min-w-[250px] text-black shadow-lg'>
                                    {subMenuData.map((submenu) => (
                                        <NavLink key={submenu.id} to={submenu.url}

                                        >
                                            <li className='h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md'>
                                                {submenu.name}
                                                
                                            </li>
                                        </NavLink>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ) : (
                        <li className='relative hover:before:w-full before:bg-black before:rounded-full before:-bottom-1 before:absolute before:block before:h-1 before:w-0 before:right-[50%] before:translate-x-[50%] before:transition-all before:duration-500'>
                            <NavLink to={item.url}>{item.name}</NavLink>
                        </li>
                    )}
                </React.Fragment>
            ))}
        </ul>
    );
};

export default Menu;
