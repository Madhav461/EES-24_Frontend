import React, { useState } from 'react';
import "./About.css";

export const About = () => {
  // for creating carousel in the mobile view
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 4); // Assuming you have 4 images
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + 4) % 4);
  };

  return (
    <div>
      {/* desktop view */}
      <div className="desktopview">
        <div id="container">
          <div class="center">
            <div class="column1">
              <div class="svg3">
                <img src="\Vector 22.svg" alt="Vector 22"></img>
              </div>
              <div class="svg2">
                <img src="\Group 7.svg" class="img2" alt="Group 7"></img>
              </div>
            </div>
            <div className="div">
              <div class="upper">
                <div className="h">About Us</div>
                <div class="svg1">
                  <img src="\Frame 165.svg" class="img1" alt="Frame 165"></img>
                </div>
              </div>
              <p className="content">
                <span className="text-wrapper">
                  vitae sapien pellentesque habitant morbi tristique senectus et
                  netus et malesuada fames ac turpis egestas sed tempus urna et
                  pharetra pharetra massa massa ultricies mi quis hendrerit dolor
                  magna eget est lorem ipsum dolor sit amet consectetur adipiscing
                  elit pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas integer eget aliquet nibh
                  praesent tristique.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* mobile view */}
      <div className="mobileview">
        <div id="controls-carousel" className="relative w-full" data-carousel="static">
          {/* Carousel wrapper */}
          <div className="carousel_container h-[100vh] relative overflow-hidden rounded-lg md:h-96">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className={`${index === currentSlide ? 'duration-700 ease-in-out' : 'hidden'} absolute w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2`}
                data-carousel-item={index === currentSlide ? 'active' : ''}
              >
                <img
                  src={`about_us_mobile_${index}.svg`} 
                  className="mobile_aboutus_card absolute w-[100%] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 block w-full"
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </div>
          {/* Slider controls */}
          <button
            type="button"
            className="absolute opacity-[0%] top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
            onClick={prevSlide}
          >
            {/* Your Previous button contents */}
            Previous
          </button>
          <button
            type="button"
            className="absolute opacity-[0%] top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
            onClick={nextSlide}
          >
            {/* Your Next button contents */}
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
