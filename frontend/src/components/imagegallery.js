import React from 'react';

const ImageGallery = ({ images }) => {
    console.log(images)
  return (
    <div className="flex flex-wrap    gap-y-5 gap-x-0  w-full overflow-y-hidden">
      {images.map((image, index) => (
        <div key={index} className=" flex grow px-5 justify-center  items-center md:w-[25vw] w-[70vw] object-cover  ">
          <img src={image.src} alt={image.alt} className="  w-full h-full object-cover rounded-md align-middle " />
        </div>
      ))}
    </div>
  );
};
//2k:mt-60 bc:pt-40 bc:mt-12 
export default ImageGallery;
