"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../app/custom.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa";

const Hero: React.FC = () => {
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);

    const [swiperReady, setSwiperReady] = useState(false);

    useEffect(() => {
        setSwiperReady(true);
    }, []);

    return (
        <div className="relative">
            {swiperReady && (
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    /* autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }} */
                    pagination={{
                        clickable: true,

                    }}
                    navigation={{
                        prevEl: prevRef.current!,
                        nextEl: nextRef.current!,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper h-[50vh] mt-5 rounded-xl cursor-grab lg:h-[90vh]"
                >

                    <SwiperSlide className="relative">
                        <div className="absolute z-10 bg-[#0000003d] w-full h-full flex flex-col justify-end lg:pl-10 lg:pb-25 p-4 pb-10 ">
                            <div className="text-start">
                                <h2 className="font-extrabold lg:font-black text-xl lg:text-[40px] text-white lexend_font">КОРМ ДЛЯ ЗДОРОВОЙ ЖИЗНИ</h2>
                                <p className="text-sm font-medium lg:text-[18px] text-white lexend_font lg:font-normal leading-4.5  lg:leading-6 mt-1 lg:mt-2"> Сбалансированный корм для любимцев
                                    Натуральный состав, проверенные бренды <br />
                                    Питай правильно — люби по-настоящему</p>
                                <button className="bg-[#5EEB42] text-sm lg:text-[16px] text-black font-bold rounded-3xl border-0 lg:py-3 lg:px-5 cursor-pointer btn_animate transition-all lg:mt-7 mt-4 p-3">Выбрать корм</button>
                            </div>
                        </div>
                        <img className="h-full w-full object-cover" src="/cat_main.jpg" alt="go-banner" />
                    </SwiperSlide>
                   
                    <SwiperSlide className="relative">
                        <div className="absolute z-10 bg-[#0000003d] w-full h-full flex flex-col justify-end lg:pl-10 lg:pb-25 p-4 pb-10 ">
                            <div className="text-start">
                                <h2 className="font-extrabold lg:font-black text-xl lg:text-[40px] text-white lexend_font">АКВАРИУМЫ И РЫБКИ</h2>
                                <p className="text-sm font-medium lg:text-[18px] text-white lexend_font lg:font-normal leading-4.5  lg:leading-6 mt-1 lg:mt-2">  Маленький океан у тебя дома
                                    Аквариумы, фильтры, декор и всё для водных питомцев
                                <br />
                                    Погрузись в мир подводной красоты</p>
                                <button className="bg-[#5EEB42] text-sm lg:text-[16px] text-black font-bold rounded-3xl border-0 lg:py-3 lg:px-5 cursor-pointer btn_animate transition-all lg:mt-7 mt-4 p-3">В мир аквариумов</button>
                            </div>
                        </div>
                        <img className="h-full w-full object-cover" src="/fish.jpg" alt="fish_banner" />
                    </SwiperSlide>
                    
                    <SwiperSlide className="relative">
                        <div className="absolute z-10 bg-[#0000003d] w-full h-full flex flex-col justify-end lg:pl-10 lg:pb-25 p-4 pb-10 ">
                            <div className="text-start">
                                <h2 className="font-extrabold lg:font-black text-xl lg:text-[40px] text-white lexend_font">ЛЕКАРСТВА И УХОД</h2>
                                <p className="text-sm font-medium lg:text-[18px] text-white lexend_font lg:font-normal leading-4.5  lg:leading-6 mt-1 lg:mt-2">Здоровье твоего питомца — в надёжных руках
                                Витамины, средства от паразитов, лечение и уход
                                    <br />
                                    Доставка по всему Узбекистану</p>
                                <button className="bg-[#5EEB42] text-sm lg:text-[16px] text-black font-bold rounded-3xl border-0 lg:py-3 lg:px-5 cursor-pointer btn_animate transition-all lg:mt-7 mt-4 p-3">Заботиться сейчас</button>
                            </div>
                        </div>
                        <img className="h-full w-full object-cover" src="/med_cat.jpg" alt="med_dog.jpg" />
                    </SwiperSlide>
                    
                    <SwiperSlide className="relative">
                        <div className="absolute z-10 bg-[#0000003d] w-full h-full flex flex-col justify-end lg:pl-10 lg:pb-25 p-4 pb-10 ">
                            <div className="text-start">
                                <h2 className="font-extrabold lg:font-black text-xl lg:text-[40px] text-white lexend_font">ВСЁ ДЛЯ УЮТА И ИГР</h2>
                                <p className="text-sm font-medium lg:text-[18px] text-white lexend_font lg:font-normal leading-4.5  lg:leading-6 mt-1 lg:mt-2">Игрушки, лежанки, домики и когтеточки
                                Сделай дом комфортным для питомца
                                    <br />Уют — это важно не только для людей</p>
                                <button className="bg-[#5EEB42] text-sm lg:text-[16px] text-black font-bold rounded-3xl border-0 lg:py-3 lg:px-5 cursor-pointer btn_animate transition-all lg:mt-7 mt-4 p-3">Товары для комфорта</button>
                            </div>
                        </div>
                        <img className="h-full w-full object-cover" src="/play_dog.jpg" alt="play_dog" />
                    </SwiperSlide>
                    
                    <SwiperSlide className="relative">
                        <div className="absolute z-10 bg-[#0000003d] w-full h-full flex flex-col justify-end lg:pl-10 lg:pb-25 p-4 pb-10 ">
                            <div className="text-start">
                                <h2 className="font-extrabold lg:font-black text-xl lg:text-[40px] text-white lexend_font">СКИДКИ И АКЦИИ КАЖДУЮ НЕДЕЛЮ</h2>
                                <p className="text-sm font-medium lg:text-[18px] text-white lexend_font lg:font-normal leading-4.5  lg:leading-6 mt-1 lg:mt-2">Лови выгоду — до -10% на любимые товары
                                Только на этой неделе!
                                    <br /> Акции обновляются постоянно — не пропусти!</p>
                                <button className="bg-[#5EEB42] text-sm lg:text-[16px] text-black font-bold rounded-3xl border-0 lg:py-3 lg:px-5 cursor-pointer btn_animate transition-all lg:mt-7 mt-4 p-3">Смотреть скидки</button>
                            </div>
                        </div>
                        <img className="h-full w-full object-cover" src="/sale_dog.jpg" alt="sale_dog" />
                    </SwiperSlide>
                </Swiper>
            )}

            {/* Кастомные кнопки */}
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
        </div>
    );
};

export default Hero;
