import React,{useState,useEffect,useRef} from 'react';
import {blurhash} from 'react-blurhash';
import { encode } from 'blurhash'; 
import LazyLoad from 'react-lazy-load';


// const ImageGallery = ({ images }) => {
//   const [imageLoaded,setImageLoaded] = useState(false)
//   useEffect ( () => {
//     const image= new Image()
//     imageonload = () => {
//       setImagesLoaded(true)
//     }
//     image.src = src

//   },[src])
//     console.log(images)
const ImageGallery = ({ images }) => {
  // const [loadedImages, setLoadedImages] = useState([]);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const { scrollTop, clientHeight } = document.documentElement;
  //     const shouldLoadMoreImages = scrollTop + clientHeight >= document.documentElement.scrollHeight - 5;

  //     if (shouldLoadMoreImages) {
  //       loadMoreImages();
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []); // Only add the scroll event listener once

  // const loadMoreImages = async () => {
  //   const newLoadedImages = await Promise.all(
  //     images.map(async (image, index) => {
  //       const response = await fetch(image.src);
  //       const blob = await response.blob();
  //       const blurhash = await generateBlurhash(blob);
  //       return { src: URL.createObjectURL(blob), blurhash: blurhash, index: index };
  //     })
  //   );

  //   setLoadedImages((prevLoadedImages) => [...prevLoadedImages, ...newLoadedImages]);
  // };
  // const generateBlurhash = async (blob) => {
  //   const reader = new FileReader();
  //   reader.readAsDataURL(blob);

  //   return new Promise((resolve) => {
  //     reader.onloadend = () => {
  //       const image = new Image();
  //       image.src = reader.result;
  //       image.onload = () => {
  //         const canvas = document.createElement('canvas');
  //         const context = canvas.getContext('2d');
  //         canvas.width = image.width;
  //         canvas.height = image.height;
  //         context.drawImage(image, 0, 0, image.width, image.height);
  //         const imageData = context.getImageData(0, 0, image.width, image.height);
  //         const blurhash = encode(imageData.data, imageData.width, imageData.height, 4, 3);
  //         resolve(blurhash);
  //       };
  //     };
  //   });
  // };



  return (
    <div className="flex flex-wrap    gap-y-5 gap-x-0  w-full overflow-y-hidden">
      {images.map((image, index) => (
        <div key={index} className=" flex grow px-5 justify-center  items-center md:w-[25vw] w-[70vw] object-cover  ">
          
            <blurhash
            hash={image.blurhash}
            width="100%"
            height="100%"
            // resolutionX={32}
            // resolutionY={32}
            // punch={1} /> 
            />
            <LazyLoad key={index} height="full" once>
         
        
          
          <img src={image.src} alt={`Image ${index}`}  className="  w-full h-full object-cover rounded-md align-middle " loading="lazy" /> 
          </LazyLoad>
        </div>
      ))}
    </div>
  );
};
//2k:mt-60 bc:pt-40 bc:mt-12 
export default ImageGallery;
