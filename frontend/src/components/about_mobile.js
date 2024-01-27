import React, { useState } from 'react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 5); // Assuming you have 5 images
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + 5) % 5);
  };

  return (
    <div id="controls-carousel" className="relative w-full" data-carousel="static">
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className={`${
              index === currentSlide ? 'duration-700 ease-in-out' : 'hidden'
            } absolute w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2`}
            data-carousel-item={index === currentSlide ? 'active' : ''}
          >
            <img
              src={`Vector 34${index + 6}.svg`} // Assuming your images are named Vector 346.svg, Vector 347.svg, and so on
              className="absolute block w-full"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={prevSlide}
      >
        {/* Your Previous button contents */}
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={nextSlide}
      >
        {/* Your Next button contents */}
      </button>
    </div>
  );
};

export default Carousel;




