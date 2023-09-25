import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Contact = () => {

    const { handleBlur, setFieldValue, handleReset, handleChange, handleSubmit, touched, values, errors } = useFormik({

        initialValues: {
            title: '',
            description: '',
            category: '',
            price: '',
            image: ''

        },
        validationSchema: Yup.object({
            title: Yup.string().max(15, 'Must be 15 characters or less').min(3, "Enter atleast 3 char").required(`title can't be empty`),
            description: Yup.string().max(80, 'Must be 80 characters or less'),
            price: Yup.number().min(5, 'Price should be greater than 5$').max(5555, 'Price should be less than 5555$')
                .required('Price is required'),
            category: Yup.string().required('Please select category'),
            image: Yup.mixed()

        }),
        onSubmit: (values) => {
            return console.log(values)
        }

    })



    return (
        <>

            <div className='flex py-32  items-center justify-center gap-10 md:justify-between md:px-20 flex-wrap w-full'>


                <form className='md:w-[50%] w-[90%] ' onSubmit={handleSubmit}>


                    <div className="mb-6">
                        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 ">Product title</label>
                        <input type="text" onChange={handleChange} onBlur={handleBlur} value={values.title} id="title" name='title' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="Mens Casual" required />
                        <p className='text-red-500 text-xs'>{touched.title && errors.title ? errors.title : ''}</p>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 ">Product price</label>
                        <input onChange={handleChange} onBlur={handleBlur} value={values.price} type="number" name='price' id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="price" required />
                        <p className='text-red-500 text-xs'>{touched.price && errors.price ? errors.price : ''}</p>
                    </div>
                    <div className="mb-6">

                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 ">Product description</label>
                        <textarea onChange={handleChange} onBlur={handleBlur} value={values.description} id="description" name='description' rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-red-500 focus:border-red-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="description"></textarea>
                        <p className='text-red-500 text-xs'>{touched.description && errors.description ? errors.description : ''}</p>
                    </div>



                    <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 ">Select an option</label>
                    <select onChange={handleChange} onBlur={handleBlur} value={values.category} id="category" name='category' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-red-500 dark:focus:border-red-500">
                        <option >Choose a category</option>
                        <option value="Women's Clothing">Women's Clothing</option>
                        <option value="Men's Clothing">Men's Clothing</option>
                        <option value="Jewelery">Jewelery</option>
                        <option value="Electronics">Electronics</option>
                    </select>
                    <p className='text-red-500 text-xs'>{touched.category && errors.category ? errors.category : ''}</p>

                    <label name='image'
                        onChange={(event) => {
                            setFieldValue('image', event.currentTarget.files[0]);
                        }}
                        className="relative flex flex-col items-center gap-4 w-full mt-10  h-72 cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-6 shadow-lg">
                        <div className="flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 absolute top-[50%] translate-y-[-50%] translate-x-[-50%] left-[50%] h-20 text-gray-500">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" fill="currentColor" />
                            </svg>
                        </div>
                        <div className="flex items-center justify-center">
                            <span className="text-gray-500 absolute top-[50%] translate-y-[-50%] translate-x-[-50%] left-[50%]">Click to upload image</span>
                        </div>
                        <input type="file" id="file" className="hidden" onChange={(event) => {
                            setFieldValue('image', event.currentTarget.files[0]);
                        }} />
                    </label>
                    <p className='text-red-500 text-xs'>{touched.image && errors.image ? errors.image : ''}</p>



                    <button type="submit" className="mt-8 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Submit</button>
                </form>








                <div className='flex items-center justify-center flex-col'>
                    <h1 className='font-bold text-2xl mb-5'>Preview</h1>




                    <div className="border product group hover:shadow-md flex duration-300 flex-col hover:shadow-red-400 hover:translate-y-[-8px] transition-all h-[22rem] rounded-2xl w-60  py-3 px-1 bg-white overflow-hidden">
                        <figure className="w-full h-52 overflow-hidden">
                            {values.image && (
                                <img
                                    src={URL.createObjectURL(values.image)}
                                    className="h-full w-full object-contain group-hover:scale-105 transition-all duration-300"
                                    alt=""
                                />
                            )}
                        </figure>
                        <div className="content h-[40%]  pt-4 px-3  ">
                            <p className="title text-xs font-bold mb-2 group-hover:text-cyan-700 transition-all duration-300">
                                {values.title.slice(0, 30)} ...
                            </p>
                            <ul className="flex items-center justify-between">
                                <div className="text-xs mb-2">
                                    <span className="font-bold group-hover:text-green-500 transition-all duration-300">
                                        <div data-tooltip={`$${values.price}`} className="button">
                                            <div className="button-wrapper">
                                                <div className="text">Price</div>
                                                <span className="icon">
                                                    <svg viewBox="0 0 16 16" className="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>


                                    </span>
                                </div>
                                <p className="text-xs mb-2">
                                    <span>Rating </span>
                                    <span className="font-bold group-hover:text-yellow-500 transition-all duration-300">
                                        0
                                    </span>
                                </p>
                            </ul>
                            <p className="text-xs hover:underline group-hover:text-cyan-700 transition-all duration-300">
                                {values.description.slice(0, 40)}...
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Contact
