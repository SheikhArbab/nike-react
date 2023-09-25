import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>

<div className="bg-white  ">
  <div className="space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">



    <div className="text-center">
      <div className="text-sm uppercase font-bold tracking-wider mb-1 text-rose-600 ">
        We Answer
      </div>
      <h2 className="text-4xl font-black text-black ">
        Frequently Asked Questions
      </h2>
    </div>


    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
      <div>
        <h4 className="font-semibold mb-2">
          What features are included?
        </h4>
        <p className="leading-relaxed text-gray-600 dark:text-gray-400">
          Etiam egestas fringilla enim, id convallis lectus laoreet at. Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque.
        </p>
      </div>
      <div>
        <h4 className="font-semibold mb-2">
          Can I use PayPal to pay you?
        </h4>
        <p className="leading-relaxed text-gray-600 dark:text-gray-400">
          Etiam egestas fringilla enim, id convallis lectus laoreet at. Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque.
        </p>
      </div>
      <div>
        <h4 className="font-semibold mb-2">
          Do I get access to the community?
        </h4>
        <p className="leading-relaxed text-gray-600 dark:text-gray-400">
          Etiam egestas fringilla enim, id convallis lectus laoreet at. Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque.
        </p>
      </div>
      <div>
        <h4 className="font-semibold mb-2">
          Can I get a refund just in case?
        </h4>
        <p className="leading-relaxed text-gray-600 dark:text-gray-400">
          Etiam egestas fringilla enim, id convallis lectus laoreet at. Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque.
        </p>
      </div>
      <div>
        <h4 className="font-semibold mb-2">
          Do you offer email support?
        </h4>
        <p className="leading-relaxed text-gray-600 dark:text-gray-400">
          Etiam egestas fringilla enim, id convallis lectus laoreet at. Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque.
        </p>
      </div>
      <div>
        <h4 className="font-semibold mb-2">
          Are the updates free for life?
        </h4>
        <p className="leading-relaxed text-gray-600 dark:text-gray-400">
          Etiam egestas fringilla enim, id convallis lectus laoreet at. Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque.
        </p>
      </div>
    </div>
    
    <div className="text-center">
      <Link to={`/support`} className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-4 py-2 leading-6 border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-black dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700">
        <svg className="hi-mini hi-arrow-top-right-on-square inline-block w-5 h-5 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clip-rule="evenodd"/></svg>
        <span>Go to support center</span>
      </Link>
    </div>
    
  </div>
</div>


    </>
  )
}

export default About
