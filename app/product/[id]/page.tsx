"use client"
import { FaArrowRight, FaMinus, FaPlus } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoArrowBackOutline } from "react-icons/io5";
import { categories } from "../../../components/custom/AllCategories"

import 'swiper/css';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { useEffect, useRef, useState } from "react";

const ProsuctPage: React.FC = () => {
    let product = {
        id: 1, name: "Корм для кошек", categoryId: 1, description: "This durable chew toy is perfect for keeping your dog entertained and satisfied. Made from high-quality, non-toxic materials, it's safe for your furry friend to enjoy.", price: 3000000, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBkcs3jM8apyDIrR3qAGw9Yi7Wt2U6xvNdfbOj", stock: 23,
    }
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);


   const [swiperReady, setSwiperReady] = useState(false);

    useEffect(() => {
        setSwiperReady(true);
    }, []);

    return (
        <>
            <div className="mx-auto pt-2 px-3 pb-3 lg:px-4">
                <div className="">

                    <div>
                        <h1 className="flex justify-between items-center text-xl mb-5  px-2 py-2.5 rounded-2xl mt-3  bg-lime-500 text-white font-bold md:hidden" draggable={false}><IoArrowBackOutline size={24} className="cursor-pointer hover:scale-[0.9] transition-all" /> Товар <span className="opacity-0">ff</span></h1>
                        <img className="text-center mx-auto select-none mt-4" src={product.imageUrl} alt="" />
                        <div className="xl:mt-8">
                            <p className="font-bold text-[22px] text-[#121717] mt-4 mb3">{product.name}</p>
                            <p className="mt-3  mb-1"><span className="font-bold text-[18px]  ">Цена:</span>  <span className="font-normal text-[#121717]">{product.price} сум</span></p>
                            <p className="text-sm text-[#61828A] font-light">Можно купить {product.stock} шт</p>
                            <p className="flex items-center gap-3 mt-4">
                                <FaPlus className="bg-amber-400  select-none cursor-pointer rounded-4xl  text-2xl p-1.5 hover:opacity-80 transition-all " />
                                <span className="select-none">1</span>
                                <FaMinus className="bg-amber-400 select-none  cursor-pointer rounded-4xl  text-2xl p-1.5 hover:opacity-80 transition-all " /></p>
                            <p className="mt-4.5 text-[#121717]">{product.description}</p>
                        </div>
                    </div>

                    <div className="flex justify-center mt-8 md:justify-start md:mt-5">    <button className=" bg-[#ffbf64] text-[#4E3620] shadow-md  transition-all duration-200 ease-in-out hover:bg-[#F5E0B9] hover:scale-94 hover:shadow-lg cursor-pointer w-[100%] rounded-[12px] py-3 font-bold text-[16px] md:w-[300px]"> Добавить в карзину </button>
                    </div>
                </div>

                <div>
                    <h2 className="flex items-center gap-6 text-2xl font-bold mb-4 mt-15 text-[#171212] lg:text-4xl">Похожие товары  <FaArrowRightLong className="text-[#ffca39] mt-1 hover:ml-4 cursor-pointer transition-all" /></h2>

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
                            prod.products.filter((item) => product.categoryId === item.categoryId && item.id !== product.id)
                                .map((item) => (


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
                        <div className="absolute top-1/2 -translate-y-1/2 z-20 flex justify-between w-full px-2 pointer-events-none">
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
            </div>

        </>
    );
}

export default ProsuctPage;