import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsChevronDown } from 'react-icons/bs';
import { useGetProductsQuery } from '../services/productsApi';

const Menu = () => {
    const { error, data, isLoading } = useGetProductsQuery();


    if (isLoading) {
        return <div></div>

    }

    if (error) {
        return <p>Error: {error.message}</p>;

    }

    const category = [...new Set(data.map(d => d.category))]


    const Navdata = [
        { id: 1, name: 'Home', url: '/' },
        { id: 2, name: 'About', url: '/about' },
        { id: 3, name: 'Categories', subMenu: true },
        { id: 4, name: 'Contact', url: '/contact' },
    ];

    return (
        <ul className="hidden md:flex items-center gap-8 font-medium">
            {Navdata.map((item) => (
                <React.Fragment key={item.id}>
                    {!!item?.subMenu ? (
                        <li className="flex items-center cursor-pointer gap-2 relative group">
                            {item.name}
                            <BsChevronDown size={14} />
                            <ul className="bg-white absolute top-6 h-0 group-hover:h-fit menuIn overflow-hidden left-0 min-w-[250px] text-black shadow-lg">

                                {
                                    category.map((item, i) => (
                                            <NavLink key={i} to={`/collections/${item.toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-')}`}>
                                        <li className="capitalize h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md">{item}
                                        </li>
                                            </NavLink>
                                    ))
                                }
                            </ul>
                        </li>
                    ) : (
                        <li className="relative hover:before:w-full before:bg-black before:rounded-full before:-bottom-1 before:absolute before:block before:h-1 before:w-0 before:right-[50%] before:translate-x-[50%] before:transition-all before:duration-500">
                            <NavLink to={item.url}>{item.name}</NavLink>
                        </li>
                    )}
                </React.Fragment>
            ))}
        </ul>
    );
};

export default Menu;
