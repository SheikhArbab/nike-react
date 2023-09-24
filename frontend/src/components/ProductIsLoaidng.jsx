import React from 'react'

const ProductIsLoaidng = () => {
  return (
    <div className="productsWarrper flex flex-wrap gap-4 justify-center my-20  ">
      {[...Array(20)].map((loading, index) => (
        <div key={index} className="card h-[22rem] rounded-2xl w-60 py-3 px-1 border border-gray-200 shadow animate-pulse md:p-6 dark:border-gray-700">
          <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
           
          </div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          <span className="sr-only">Loading...</span>
        </div>
      ))}
    </div>
  )
}

export default ProductIsLoaidng
