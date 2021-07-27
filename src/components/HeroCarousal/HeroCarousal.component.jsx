import React from "react";
import HeroSlider from "react-slick";

//component
import {NextArrow, PrevArrow} from "./Arrows.Component"



const HeroCarousal = () => {

    const settingsLG= {
        arrows: true,
        autoplay: true,
        centerMode: true,
        centerPadding: "300px",
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    const images = [
        "https://images.unsplash.com/photo-1593643946890-b5b85ade6451?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1229&q=80",
        "https://images.unsplash.com/photo-1627001679034-3ba5b2b6c021?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        "https://images.unsplash.com/photo-1626736940799-e619c0862fac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        "https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80",
    ]

    return (
        <>
          <div className="lg:hidden">
              <HeroSlider {...settings}>
                   {
                       images.map((image) => 
                            <div className="w-full h-56 md:h-80 py-2">
                               <img src= {image} alt="testing" className="w-full h-full" />
                            </div>
                        )
                    }
                </HeroSlider>
          </div>

          <div className="hidden lg:block">
                <HeroSlider {...settingsLG}>
                   {
                       images.map((image) => 
                            <div className="w-full h-96 px-1 py-2">
                               <img src= {image} alt="testing" className="w-full h-full rounded-md"/>
                            </div>
                        )
                    }
                </HeroSlider>
          </div>
        </>
    );
};


export default HeroCarousal;