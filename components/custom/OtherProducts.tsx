"use client"


import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { useRef } from "react";

import { FaArrowRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

import { categories } from './AllCategories';
const OtherProducts: React.FC = () => {

    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);



    return (
        <>


            <div>
                <h2 className="flex items-center gap-6 text-2xl font-bold mb-4 mt-19 text-[#171212] lg:text-4xl">Другие товары  <FaArrowRightLong className="text-[#ffca39] mt-1 hover:ml-4 cursor-pointer transition-all" /></h2>

                <Swiper
                    spaceBetween={20}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        prevEl: prevRef.current!,
                        nextEl: nextRef.current!,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
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
                            slidesPerView: 5,
                        },
                    }}
                    className="h-auto w-full cursor-grab"
                >

                    {categories.map((prod) => (
                    prod.products.map((item) => (


                                <SwiperSlide key={item.id}>
                                    {/* <motion.div 
                                            initial={{ opacity: 0, y: 40 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, amount: 0.1 }}
                                            transition={{ duration: 0.5, delay: item.id * 0.01 }}
                                            className="p-2 mb-5"> */}
                                    <div>
                                        {item.imageUrl && (
                                            <img
                                                draggable={false}
                                                src={item.imageUrl}
                                                alt={item.name}
                                                className="w-full h-auto object-cover rounded mb-2"
                                            />
                                        )}
                                        <h3 className="font-medium text-[17px] md:text-[18px] text-[#171212] mt-4">{item.name}</h3>
                                        <div className="flex flex-col gap-1.5 md:flex-row md:justify-between md:mt-2">
                                            <p className="text-sm text-[#8A6E61] ">{item.price} сум</p>
                                            <button className="text-sm bg-[#E88C30] hover:bg-[#d37c26] hover:scale-98 transition-all duration-200 ease-in-out py-2 px-2 font-semibold text-white  md:font-semibold rounded-[8px] cursor-pointer shadow-sm hover:shadow-md">
                                                Посмотреть
                                            </button>
                                        </div>
                                    </div>
                                    {/*                                         </motion.div>
 */}                                    </SwiperSlide>



                            ))
                    ))}
                    <div className="absolute top-1/2 -translate-y-2/2 z-20 flex justify-between w-full px-2 pointer-events-none">
                        <button
                            ref={prevRef}
                            className="hidden lg:flex bg-[#F2590D] rotate-180 w-8 h-8 rounded-full  justify-center items-center cursor-pointer hover:bg-[#f2590da6] pointer-events-auto"
                        >
                            <FaArrowRight color="white" />
                        </button>
                        <button
                            ref={nextRef}
                            className="hidden lg:flex bg-[#F2590D] w-8 h-8 rounded-full  justify-center items-center cursor-pointer hover:bg-[#f2590da6] pointer-events-auto"
                        >
                            <FaArrowRight color="white" />
                        </button>
                    </div>
                </Swiper>
            </div>
        </>
    );
}

export default OtherProducts;