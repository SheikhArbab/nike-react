import React from 'react';
import { useGetProductsQuery } from '../services/productsApi';
import { Link, useParams } from 'react-router-dom';
import LoadingSpiner from './../components/LoadingSpiner';
import { IoMdHeartEmpty } from 'react-icons/io';


const Category = () => {
  const { error, data, isLoading } = useGetProductsQuery();
  const { category } = useParams();

  if (isLoading) return <LoadingSpiner />;

  if (error) {
    console.error('Error fetching products:', error);
    return <div>Error: {error.message}</div>;
  }


  const products = data.filter((item) =>
    item.category.toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-') === category
  );

  if (!products || products.length === 0) {
    return <div>Product not found</div>;
  }

  return (
    <>


      <div className='flex items-center justify-center flex-wrap gap-5 py-24'>

        {/* filter side start */}


<div></div>



        {/* filter side end */}



        {/* products start */}


        <div className='flex flex-wrap items-center justify-center gap-4'>

  {products.map((product) => {
        const slug = product.title
          .toLowerCase()
          .replace(/[^a-z0-9 -]/g, '')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-');

        return (
          <div
            key={product.id}
            className="border product group hover:shadow-md flex duration-300 flex-col hover:shadow-red-400 hover:translate-y-[-8px] transition-all h-[22rem] rounded-2xl w-60 py-3 px-1 bg-white overflow-hidden relative"
          >

            <div
              onClick={() => {
                handleAddToWish(product)
              
              }}

              className="cursor-pointer flex items-center justify-center rounded-md absolute top-5 -right-10 group-hover:right-5 bg-red-600 text-white h-10 w-10 z-10 duration-300"
            >
              <IoMdHeartEmpty className='text-[25px]' />
            </div>

            <figure className="w-full h-52 overflow-hidden">
              <img
                src={product.image}
                className="h-full w-full object-contain group-hover:scale-105 transition-all duration-300"
                alt={product.image}
              />
            </figure>
            <div className="content h-[40%]  pt-4 px-3">
              <p className="title text-xs font-bold mb-2 group-hover:text-red-700 transition-all duration-300">
                {product.title.slice(0, 28)}...
              </p>
              <ul className="flex items-center justify-between">
                <div className="text-xs mb-2">
                  <Link to={`/product/${slug}`}>
                    <div data-tooltip={`Rs:${product.price}`} className="button">
                      <div className="button-wrapper">
                        <div className="text">Price</div>
                        <span className="icon">
                          <svg
                            viewBox="0 0 16 16"
                            className="bi bi-cart2"
                            fill="currentColor"
                            height="16"
                            width="16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
                <p className="text-xs mb-2">
                  <span>Rating </span>
                  <span className="font-bold group-hover:text-yellow-500 transition-all duration-300">
                    {product.rating.rate}
                  </span>
                </p>
              </ul>
              <Link
                to={`/product/${slug}`}
                className="font title text-xs hover:underline group-hover:text-red-700 transition-all duration-300"
              >
                {product.description.slice(0, 55)}...
              </Link>
            </div>
          </div>
        );
      })}
    


        </div>

        {/* products end */}

      </div>

    </>
  );
}

export default Category;
