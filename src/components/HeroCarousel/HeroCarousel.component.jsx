import React from "react";
import HeroSlider from "react-slick";

//Components
import {NextArrow,PrevArrow} from "./Arrows.components";

const HeroCarousel = () =>{

    const settingsLg ={
        arrows:true,
        centerMode:true,
        centerPadding:"300px",
        slidesToShow: 1,
        autoplay:true,
        infinite:true,
        slidesToScroll: 1,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>,
    };
    const settings = {
        arrows:true,
        centerPadding:"200px",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>,
      };

      const images = ["https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80",
      "https://images.unsplash.com/photo-1613380007620-b9612888117f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80",
      "https://images.unsplash.com/photo-1616527546362-bf6b7f80a751?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80",
      "https://images.unsplash.com/photo-1615986200762-a1ed9610d3b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80",
      "https://images.unsplash.com/photo-1585064788609-b216a8e6613b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"];
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