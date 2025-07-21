"use client"



import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay } from 'swiper/modules';

const PopularBrands: React.FC = () => {

    const images = [
        "https://i.ibb.co/Xfm6gKhw/chappi.png",
        "https://i.ibb.co/5xScWB5m/darling.png",
        "https://i.ibb.co/YBJy5jp0/nalapu.png",
        "https://i.ibb.co/RTxD14Zc/pedigree.png",
        "https://i.ibb.co/6cwrQsVh/proplan.png",
        "https://i.ibb.co/svytf4g2/royal.png",
        "https://i.ibb.co/xtDh2hHL/titbit.png",
        "https://i.ibb.co/h1wS5SVW/Whiskas.png",
        "https://i.ibb.co/Xfm6gKhw/chappi.png",
        "https://i.ibb.co/5xScWB5m/darling.png",
        "https://i.ibb.co/YBJy5jp0/nalapu.png",
        "https://i.ibb.co/RTxD14Zc/pedigree.png",
        "https://i.ibb.co/6cwrQsVh/proplan.png",
        "https://i.ibb.co/svytf4g2/royal.png",
        "https://i.ibb.co/xtDh2hHL/titbit.png",
        "https://i.ibb.co/h1wS5SVW/Whiskas.png",]

    return (
        <>
            <div>
                <h1 className='text-2xl font-bold mb-4 mt-4 text-[#171212] lg:text-4xl'>Популярные бренды</h1>

                <Swiper
                    spaceBetween={10}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    breakpoints={{
                        320: {
                            slidesPerView: 3,
                        },
                        480: {
                            slidesPerView: 4,
                        },
                        768: {
                            slidesPerView: 4,
                        },
                        1024: {
                            slidesPerView: 5,
                        },
                        1280: {
                            slidesPerView: 7,
                        },
                    }}
                    className="h-auto w-full cursor-grab"
                >
                    {images.map((url) => (
                        <SwiperSlide className='bg-lime-100 rounded-xl py-3'><img draggable={false} className='w-[70px] sm:w-[100px] md:w-[120px] mx-auto' src={url} alt="chappi" /></SwiperSlide>
                    ))}
                </Swiper>
            </div>


        </>
    );
}

export default PopularBrands;