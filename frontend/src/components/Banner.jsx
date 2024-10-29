import React from 'react'
import BannerCard from '../home/BannerCard'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
<div className="px-4 lg:px-24 bg-teal-100 flex items-center">
    <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        <div className="md:w-1/2 space-y-8 h-full">
        <h2 className="text-4xl font-bold leading-snug text-black">Buy and Sell Your Books 
            <span className='text-blue-700'> For the Best Prices.</span></h2>
            <p className="md:w-4/5 text-xl">You’re in the right place. Tell us what titles or genres you’ve enjoyed in the past, and we’ll give you surprisingly insightful recommendations.<br />
            Chances are your friends are discussing their favorite (and least favorite) books on Goodreads.
        </p>
            <div>
            <Link to='/shop' className='block'><button className='bg-black  text-white font-semibold mb-4 px-5 py-2 rounded hover:bg-blue-700 transition-all duration-300'>Get Started</button></Link>
            </div>
         </div>

<div>
    <BannerCard />
</div>

    </div>
</div>
  )
}

export default Banner