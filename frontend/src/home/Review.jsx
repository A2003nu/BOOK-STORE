import React, { useRef, useState } from 'react';
import { FaStar } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import propic from '../assets/profile.jpg'
import 'swiper/css';
import 'swiper/css/pagination';
import { Avatar } from "flowbite-react";
import { Pagination } from 'swiper/modules';


const Review = () => {
  return (
  <div className="my-12 px-4 lg:px-24">
    <h2 className="text-5xl font-bold text-center mb-10 leading-snug">Our Customer</h2>

    <div>
    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
<FaStar />
<FaStar />
<FaStar />
<FaStar />
<FaStar />
                </div>
                <div className='mt-7'>
                    <p>Never thought i’d see the day where we got a percy jackson halloween special, but HERE WE ARE AND HERE IT IS. this book was so heartwarming, funny and spooky. it genuinely feels like the evermore of PJO books and it gave me harry potter feels in a way. i had the BEST time ever🧡🍂🦴🏛️</p>
               
                <Avatar img={propic} alt="avatar of Jese" rounded className='w-10 mb-4'/>
                <h5 className="text-lg font-medium">Hallie </h5>
                <p className="text-base">(thecommonroomshop)</p>
                </div>   
                
                </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
<FaStar />
<FaStar />
<FaStar />
<FaStar />
                </div>
                <div className='mt-7'>
                    <p>Absolutely adored this! The perfect autumnal witchy read, so incredibly well written, funny and full of heart. The message of learning to have faith in yourself hit home with me. I hope there’s more where this came from because I want to move into this world of spellcasting, cinnamon rolls, cozy bookshops and floating cats!! More in depth thoughts will follow on my YouTube channel, Leora Aileen 🔮🕯️🍂🌛</p>
               
                <Avatar img={propic} alt="avatar of Jese" rounded className='w-10 mb-4'/>
                <h5 className="text-lg font-medium">Leora Aileen</h5>
                <p className="text-base"></p>
                </div>   
                
                </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
<FaStar />
<FaStar />
<FaStar />
<FaStar />
<FaStar />
                </div>
                <div className='mt-7'>
                    <p>Wow. This book was pure and utter magic. 50 pages in I knew this book would claim a place in my heart. I resonated with Belle SO much in so many ways. The timing of this book releasing and me reading it when i needed the comfort and resonance of its protagonist most, seems supernatural… no pun intended 👀. And the writing!!! Descriptive, beautiful and atmospheric - my favourite writing style. ♾️ stars..</p>
               
                <Avatar img={propic} alt="avatar of Jese" rounded className='w-10 mb-4'/>
                <h5 className="text-lg font-medium">Jodie✨</h5>
                <p className="text-base"></p>
                </div>   
                
                </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
<FaStar />
<FaStar />
<FaStar />
<FaStar />
                </div>
                <div className='mt-7'>
                    <p>❝ 𝑀𝒶𝑔𝒾𝒸 𝒾𝓃 𝓉𝒽𝑒 𝓂𝓊𝓃𝒹𝒶𝓃𝑒 𝒸𝒶𝓃 𝒷𝑒 𝒹𝒾𝒻𝒻𝒾𝒸𝓊𝓁𝓉 𝓉𝑜 𝒻𝒾𝓃𝒹, 𝒷𝓊𝓉 𝒾𝓉 𝒾𝓈 𝒶𝓁𝓌𝒶𝓎𝓈 𝓌𝒶𝒾𝓉𝒾𝓃𝑔 𝓅𝒶𝓉𝒾𝑒𝓃𝓉𝓁𝓎 𝓈𝑜𝓂𝑒𝓌𝒽𝑒𝓇𝑒, 𝓈𝓃𝓊𝒻𝒻𝓁𝒾𝓃𝑔 𝓆𝓊𝒾𝑒𝓉𝓁𝓎, 𝒸𝓊𝓇𝓁𝑒𝒹 𝓊𝓅 𝓁𝒾𝓀𝑒 𝒶 𝓈𝓁𝑒𝑒𝓅𝒾𝓃𝑔 𝒶𝓃𝒾𝓂𝒶𝓁 𝒶𝓃𝒹 𝓇𝑒𝒶𝒹𝓎 𝓉𝑜 𝒷𝑒 𝒻𝑜𝓊𝓃𝒹 𝒷𝓎 𝓉𝒽𝑜𝓈𝑒 𝓈𝑒𝒶𝓇𝒸𝒽𝒾𝓃𝑔 𝒽𝒶𝓇𝒹 𝑒𝓃𝑜𝓊𝑔𝒽. ❞
                    .</p>
               
                <Avatar img={propic} alt="avatar of Jese" rounded className='w-10 mb-4'/>
                <h5 className="text-lg font-medium">Sam </h5>
                <p className="text-base">(FallingBooks)</p>
                </div>   
                
                </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
<FaStar />
<FaStar />
<FaStar />
<FaStar />
                </div>
                <div className='mt-7'>
                    <p>I think I may have found my first read aloud with my 4th graders students in the fall! Grateful to have the chance to read and review this advanced reader’s copy of Jasmine Warga’s newest, A Strange Thing Happened in Cherry Hall.</p>
               
                <Avatar img={propic} alt="avatar of Jese" rounded className='w-10 mb-4'/>
                <h5 className="text-lg font-medium">Katie Reilley
                </h5>
                <p className="text-base"></p>
                </div>   
                
                </div>
        </SwiperSlide>
       
        
      </Swiper>
    </div>
  </div>
  )
}

export default Review