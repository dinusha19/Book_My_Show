import React from "react";
import HeroSlider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousel = () =>{

    const settingsLg ={
        arrows:true,
        centerMode:true,
        centerPadding:"300px",
        slidesToShow: 1,
        autoplay:true,
        infinite:true,
        slidesToScroll: 1
        

    };
    const settings = {
        arrows:true,
        centerPadding:"200px",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      const images = ["https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      "https://images.unsplash.com/photo-1629740081942-29c155e9aeb3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=828&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
      "https://images.unsplash.com/photo-1629757349708-a9abe5d3d354?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80"];
    return (
    <>
    <div className="lg:hidden">
        <HeroSlider {...settings}>
            {images.map((image)=>(
                <div className="w-full h-56 md:h-80 py-3"> 
                <img src={image} alt="testing" className="w-full h-full"/>
                </div>

            ))}
            </HeroSlider>
    </div>
    <div className="hidden lg:block">
    <HeroSlider {...settingsLg}>
            {images.map((image)=>(
                <div className="w-full h-96 px-2 py-3"> 
                <img src={image} alt="testing" className="w-full h-full rounded-md"/>
                </div>

            ))}
            </HeroSlider>
    </div>
    </>
    );
};

export default HeroCarousel;