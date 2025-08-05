import React  from "react";
import slider1 from "../assets/unsplash_GDokEYnOfnE.png";
import slider2 from "../assets/unsplash_GDokEYnOfnE-2.png";
import slider3 from "../assets/unsplash_GDokEYnOfnE-2.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "./Button";

const images = [slider1, slider2, slider3];

const Hero = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    fade: true,
    arrows: false,
    dots: false,
    pauseOnHover: false,
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Slider {...settings}>
          {images.map((src, idx) => (
            <div key={idx} className="h-screen w-full">
              <img
                src={src}
                alt={`slide-${idx}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
      {/* <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-transparent to-white/80 z-10" /> */}

      <div className="absolute inset-0 bg-gradient-to-r from-hero-start via-hero-start to-hero-end z-10 " />

      <div className="absolute top-0 left-0 h-full flex gap-10 items-center w-full max-w-7xl mx-auto z-20 px-10 md:px-14">
        <div >
          <h1 className="text-4xl md:text-6xl font-bold text-black leading-14 mb-4">
            Smarter Schooling <br /> Starts Here
          </h1>
          <p className="text-lg md:text-xl text-text-black/20 mb-8">
            Run your school the smart way — automate daily tasks, connect 
            <br />
            with parents, and deliver academic excellence with Seamtrack.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className={" hover:opacity-90 transition"}>
              Get Started Free
            </Button>
            <Button variant="outline"> How Seamtrack Works</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
