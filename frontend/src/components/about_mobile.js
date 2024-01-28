import React, { useState } from 'react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 4); // Assuming you have 4 images
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + 4) % 4);
  };

  return (
    <div id="controls-carousel" className="relative w-full" data-carousel="static">
      {/* Carousel wrapper */}
      <div className="relative overflow-hidden rounded-lg md:h-96" style={{height:'100vh'}}>
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className={`${
              index === currentSlide ? 'duration-700 ease-in-out' : 'hidden'
            } absolute w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2`}
            data-carousel-item={index === currentSlide ? 'active' : ''}
          >
            <img
              src={`about_us_mobile_${index}.svg`} 
              className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 block w-full"
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
      </button>
      <button
        type="button"
        className="absolute opacity-[0%] top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={nextSlide}
      >
        {/* Your Next button contents */}
      </button>
    </div>
  );
};

export default Carousel;



