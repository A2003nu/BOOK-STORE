import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { Link } from 'react-router-dom'
const SingleBook = () => {
    const {_id,bookTitle,authorName,bookDescription,imageURL,price,bookPDFURL}=useLoaderData();
    
  return (
    <div className="mt-28 px-4 lg:px-24">
    <h2 className="text-5xl font-bold text-center">About Your Book</h2>
  <div className="mt-16 py-12 bg-teal-100 px-4 lg:px-24">
    <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="md:w-1/2">
        <h2 className="text-4xl font-bold mb-6 leading-snug">{bookTitle} </h2>
        <p className='text-xl leading-snug mb-5'>{bookDescription} <span className='text-blue-600 underline cursor-pointer' >Read more...</span></p>
        <Link to='/shop' className='block'><button className='bg-blue-700 text-white font-semibold px-5 py-2 mb-4 rounded hover:bg-black transition-all duration-300'>Kindle {price}</button></Link>
        <Link to={bookPDFURL} className='block'><button className='bg-black  text-white font-semibold mb-4 px-5 py-2 rounded hover:bg-blue-700 transition-all duration-300'>Shop now</button></Link>
        </div>
        <div>
            <img src={imageURL} className='w-96'/>
        </div>
    </div>
</div>
</div>
  )
}

export default SingleBook