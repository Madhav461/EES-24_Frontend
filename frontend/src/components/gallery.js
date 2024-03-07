
import React, { useState,useEffect } from 'react'
import Navhome2 from "./navhome.js"
import Marquee from "react-fast-marquee";
import AnimatedTextCharacter from "./AnimatedTextCharacter";
import Background from "./background.js"
import BackButton from './goback.js';
import ImageGallery from './imagegallery';




const Gallery = () => {
    const images = [
        { src: './ees_image (7).svg', alt: '' },
        { src: './ees_image (1).svg', alt: '' },
        { src: './ees_image (2).svg', alt: '' },
        { src: './ees_image (14).svg', alt: '' },
      
        { src: './ees_image (4).svg', alt: '' },
        { src: './ees_image (3).svg', alt: '' },
       
        

        
        { src: './ees_image (6).svg', alt: '' },
        
        { src: './ees_image (8).svg', alt: '' },
        { src: './ees_image (9).svg', alt: '' },
        { src: './ees_image (10).svg', alt: '' },
        { src: './ees_image (11).svg', alt: '' },
        { src: './ees_image (12).svg', alt: '' },
        
        { src: './ees_image (18).svg', alt: '' },
        { src: './ees_image (15).svg', alt: '' },
        { src: './ees_image (16).svg', alt: '' },
        { src: './ees_image (17).svg', alt: '' },
     
        { src: './ees_image (19).svg', alt: '' },
        { src: './ees_image (20).svg', alt: '' },
        { src: './ees_image (21).svg', alt: '' },
        { src: './ees_image (28).svg', alt: '' },
        
        { src: './ees_image (22).svg', alt: '' },
        { src: './ees_image (23).svg', alt: '' },
        { src: './ees_image (24).svg', alt: '' },
    
       
      
     
        { src: './ees_image (29).svg', alt: '' },
         
        { src: './ees_image (30).svg', alt: '' },
        { src: './ees_image (32).svg', alt: '' },
        { src: './ees_image (31).svg', alt: '' },
       
       
        { src: './ees_image (34).svg', alt: '' },
       
        { src: './ees_image (35).svg', alt: '' },
        { src: './ees_image (36).svg', alt: '' },
        { src: './ees_image (37).svg', alt: '' },
        { src: './ees_image (38).svg', alt: '' },
        { src: './ees_image (39).svg', alt: '' },
        
        
        
        
        
      ];
    
    return (

        <div className='w-[100vw] text-red-50'>
            <Background />
            <div className='bg-black fixed top-0 '>
                <Navhome2 />
                <div className='flex justify-center items-center pt-12 '>
                    <BackButton/>
                    <img className='h-[5vw] ' src="/GALLERY.svg" alt="GALLERY_heading" />
                </div>
                <div className="glow-text w-[100vw] overflow-y-hidden"><Marquee speed={100} gradient={true} gradientColor="black" gradientWidth={35} className="marquee_container border-solid overflow-y-hidden border-white border-y"><div class="marquee" className="marquee-font font-michroma text-white text-[27px]"><AnimatedTextCharacter text="UDYAM  -  UDGAM  -  MASHAL  -  UDYAM  -  UDGAM  -  MASHAL  -  UDYAM  -  UDGAM  -  MASHAL  -  UDYAM  -  UDGAM  -  MASHAL  -"></AnimatedTextCharacter></div></Marquee></div>
            </div>
        <div className="h-screen w-screen overflow-x-hidden bc:mt-[25vh] tab:mt-[31vh] lg:pt-[6vh] laag:pt-[0px] laag:mt-[0px]">
            <ImageGallery images={images} />
        </div>


          
        </div>
    );
};
export default Gallery;