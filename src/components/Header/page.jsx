import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import header1 from "../../assets/images/header1.png";
import header2 from "../../assets/images/header2.png";
import header3 from "../../assets/images/header3.png";
import Navbar2 from "../Navbar/page";

const slides = [
  {
    welcome: "WELCOME TO GREENSHOP",
    title: "LET'S MAKE A BETTER PLANET",
    description:
      "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create a unique Urban Jungle. Order your favorite plants!",
    buttonText: "SHOP NOW",
    image: header1,
  },
  {
    welcome: "WELCOME TO GREENSHOP",
    title: "LET'S LIVE IN A BETTER PLANET",
    description:
      "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create a unique Urban Jungle. Order your favorite plants!",
    buttonText: "LET'S START",
    image: header2,
  },
  {
    welcome: "WELCOME TO GREENSHOP",
    title: "LET'S OBSERVE A BETTER PLANET",
    description:
      "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create a unique Urban Jungle. Order your favorite plants!",
    buttonText: "GET CREDITS",
    image: header3,
  },
];

const Header = () => {
  return (
    <div className="font-sans w-[1240px] mx-auto  ml-[-11px] mb-[30px]">
      <Navbar2 />
      <div className="w-full bg-gray-100 mt-[70px]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          className="cursor-pointer  custom-pagination"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center justify-between max-w-6xl py-12 pl-10 mx-auto md:flex-row">
                <div className="text-left md:w-1/2">
                  <span>{slide.welcome}</span>

                  <h2 className="text-[60px] font-black text-[#3D3D3D] leading-none text-shadow-heavy">
                    {slide.title.split("PLANET")[0]}
                    <span className="text-green-600">PLANET</span>
                  </h2>

                  <p className="my-4 text-gray-600 w-[400px]">
                    {slide.description}
                  </p>
                  <button className="px-6 py-2 my-[20px] text-white bg-green-600 rounded-lg">
                    {slide.buttonText}
                  </button>
                </div>
                <div className="flex justify-center md:w-1/2">
                  <img
                    src={slide.image}
                    alt="Plant"
                    className="w-3/4 md:w-1/2"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Header;
