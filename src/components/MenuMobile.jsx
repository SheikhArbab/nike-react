import React, { useState } from 'react';
import { BsChevronDown } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { useGetProductsQuery } from '../services/productsApi';

const MenuMobile = () => {

    const { error, data, isLoading } = useGetProductsQuery();


    if (isLoading) {
        return <div></div>

    }

    if (error) {
        return <p>Error: {error.message}</p>;

    }

    const category = [...new Set(data.map(d => d.category))]




    const Navdata = [
        { id: 1, name: "Home", url: "/" },
        { id: 2, name: "About", url: "/about" },
        { id: 3, name: "Categories", subMenu: true },
        { id: 4, name: "Contact", url: "/contact" },
    ];


    const [cateMenu, setCateMenu] = useState(false)
    return (
        <ul className={`flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black`}>
            {Navdata.map((item) => (
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
                                   {
                                    category.map((item, i) => (
                                            <NavLink key={i} to={`/collections/${item.toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-')}`}>
                                        <li className="capitalize h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md">{item}
                                        </li>
                                            </NavLink>
                                    ))
                                }
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
