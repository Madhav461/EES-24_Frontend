import React from 'react'
import Navhome2 from "./navhome.js"
import Marquee from "react-fast-marquee";
import AnimatedTextCharacter from "./AnimatedTextCharacter";
import Background from "./background.js"
import BackButton from './goback.js';




const Gallery = () => {
    return (

        <div className='w-[100vw] text-red-50'>
            <Background />
            <div className='bg-black fixed top-0 '>
                <Navhome2 />
                <div className='flex justify-center items-center pt-12 '>
                    <BackButton/>
                    <img className='h-[5vw] ' src="/GALLERY.svg" alt="GALLERY_heading" />
                </div>
                <div className="glow-text w-[100vw]"><Marquee speed={100} gradient={true} gradientColor="black" gradientWidth={35} className="marquee_container border-solid border-teal-300 border-y"><div class="marquee" className="marquee-font font-michroma text-turquoise text-[33px]"><AnimatedTextCharacter text="UDYAM  -  UDGAM  -  MASHAL  -  UDYAM  -  UDGAM  -  MASHAL  -  "></AnimatedTextCharacter></div></Marquee></div>
            </div>



            <div className='gal_container flex flex-wrap shrink md:pt-[30vh] pt-[20vh] gap-3 mt-10 justify-around m-auto'>

             
                <div className=' sm:w-[30vw] flex justify-center items-center md:w-[20vw] w-[70vw] '>
                    <img className='rounded-2xl object-contain h-auto align-middle max-w-[100%]' src="/ees_image (2).svg" alt="" />
                </div>
                <div className=' sm:w-[30vw] flex justify-center items-center md:w-[20vw] w-[70vw] '>
                    <img className='rounded-2xl object-contain h-auto align-middle max-w-[100%]' src="/ees_image (1).svg" alt="" />
                </div>
                <div className=' sm:w-[30vw] flex justify-center items-center md:w-[20vw] w-[70vw] '>
                    <img className='rounded-2xl object-contain h-auto align-middle max-w-[100%]' src="/ees_image (3).svg" alt="" />
                </div>
                <div className=' sm:w-[30vw] flex justify-center items-center md:w-[20vw] w-[70vw] '>
                    <img className='rounded-2xl object-contain h-auto align-middle max-w-[100%]' src="/ees_image (4).svg" alt="" />
                </div>
                <div className=' sm:w-[30vw] flex justify-center items-center md:w-[20vw] w-[70vw] '>
                    <img className='rounded-2xl object-contain h-auto align-middle max-w-[100%]' src="/ees_image (5).svg" alt="" />
                </div>
                <div className=' sm:w-[30vw] flex justify-center items-center md:w-[20vw] w-[70vw] '>
                    <img className='rounded-2xl object-contain h-auto align-middle max-w-[100%]' src="/ees_image (6).svg" alt="" />
                </div>
                <div className=' sm:w-[30vw] flex justify-center items-center md:w-[20vw] w-[70vw] '>
                    <img className='rounded-2xl object-contain h-auto align-middle max-w-[100%]' src="/ees_image (7).svg" alt="" />
                </div>
                <div className=' sm:w-[30vw] flex justify-center items-center md:w-[20vw] w-[70vw] '>
                    <img className='rounded-2xl object-contain h-auto align-middle max-w-[100%]' src="/ees_image (8).svg" alt="" />
                </div>
                <div className=' sm:w-[30vw] flex justify-center items-center md:w-[20vw] w-[70vw] '>
                    <img className='rounded-2xl object-contain h-auto align-middle max-w-[100%]' src="/ees_image (9).svg" alt="" />
                </div>
                <div className=' sm:w-[30vw] flex justify-center items-center md:w-[20vw] w-[70vw] '>
                    <img className='rounded-2xl object-contain h-auto align-middle max-w-[100%]' src="/ees_image (10).svg" alt="" />
                </div>
                <div className=' sm:w-[30vw] flex justify-center items-center md:w-[20vw] w-[70vw] '>
                    <img className='rounded-2xl object-contain h-auto align-middle max-w-[100%]' src="/ees_image (11).svg" alt="" />
                </div>
                <div className=' sm:w-[30vw] flex justify-center items-center md:w-[20vw] w-[70vw] '>
                    <img className='rounded-2xl object-contain h-auto align-middle max-w-[100%]' src="/ees_image (12).svg" alt="" />
                </div>
                <div className=' sm:w-[30vw] flex justify-center items-center md:w-[20vw] w-[70vw] '>
                    <img className='rounded-2xl object-contain h-auto align-middle max-w-[100%]' src="/ees_image (13).svg" alt="" />
                </div>
                <div className=' sm:w-[30vw] flex justify-center items-center md:w-[20vw] w-[70vw] '>
                    <img className='rounded-2xl object-contain h-auto align-middle max-w-[100%]' src="/ees_image (14).svg" alt="" />
                </div>
                <div className=' sm:w-[30vw] flex justify-center items-center md:w-[20vw] w-[70vw] '>
                    <img className='rounded-2xl object-contain h-auto align-middle max-w-[100%]' src="/ees_image (15).svg" alt="" />
                </div>
                <div className=' sm:w-[30vw] flex justify-center items-center md:w-[20vw] w-[70vw] '>
                    <img className='rounded-2xl object-contain h-auto align-middle max-w-[100%]' src="/ees_image (16).svg" alt="" />
                </div>
            
                <div className=' sm:w-[30vw] flex justify-center items-center md:w-[20vw] w-[70vw] '>
                    <img className='rounded-2xl object-contain h-auto align-middle max-w-[100%]' src="/ees_image (18).svg" alt="" />
                </div>
                <div className=' sm:w-[30vw] flex justify-center items-center md:w-[20vw] w-[70vw] '>
                    <img className='rounded-2xl object-contain h-auto align-middle max-w-[100%]' src="/ees_image (19).svg" alt="" />
                </div>
                <div className=' sm:w-[30vw] flex justify-center items-center md:w-[20vw] w-[70vw] '>
                    <img className='rounded-2xl object-contain h-auto align-middle max-w-[100%]' src="/ees_image (20).svg" alt="" />
                </div>
                <div className=' sm:w-[30vw] flex justify-center items-center md:w-[20vw] w-[70vw] '>
                    <img className='rounded-2xl object-contain h-auto align-middle max-w-[100%]' src="/ees_image (21).svg" alt="" />
                </div>
                <div className=' sm:w-[30vw] flex justify-center items-center md:w-[20vw] w-[70vw] '>
                    <img className='rounded-2xl object-contain h-auto align-middle max-w-[100%]' src="/ees_image (22).svg" alt="" />
                </div>
                <div className=' sm:w-[30vw] flex justify-center items-center md:w-[20vw] w-[70vw] '>
                    <img className='rounded-2xl object-contain h-auto align-middle max-w-[100%]' src="/ees_image (23).svg" alt="" />
                </div>
               
                <div className=' sm:w-[30vw] flex justify-center items-center md:w-[20vw] w-[70vw] '>
                    <img className='rounded-2xl object-contain h-auto align-middle max-w-[100%]' src="/ees_image (24).svg" alt="" />
                </div>
                <div className=' sm:w-[30vw] flex justify-center items-center md:w-[20vw] w-[70vw] '>
                    <img className='rounded-2xl object-contain h-auto align-middle max-w-[100%]' src="/ees_image (25).svg" alt="" />
                </div>
                <div className=' sm:w-[30vw] flex justify-center items-center md:w-[20vw] w-[70vw] '>
                    <img className='rounded-2xl object-contain h-auto align-middle max-w-[100%]' src="/ees_image (26).svg" alt="" />
                </div>
                <div className=' sm:w-[30vw] flex justify-center items-center md:w-[20vw] w-[70vw] '>
                    <img className='rounded-2xl object-contain h-auto align-middle max-w-[100%]' src="/ees_image (27).svg" alt="" />
                </div>
                <div className=' sm:w-[30vw] flex justify-center items-center md:w-[20vw] w-[70vw] '>
                    <img className='rounded-2xl object-contain h-auto align-middle max-w-[100%]' src="/ees_image (28).svg" alt="" />
                </div>
                <div className=' sm:w-[30vw] flex justify-center items-center md:w-[20vw] w-[70vw] '>
                    <img className='rounded-2xl object-contain h-auto align-middle max-w-[100%]' src="/ees_image (29).svg" alt="" />
                </div>
                <div className=' sm:w-[30vw] flex justify-center items-center md:w-[20vw] w-[70vw] '>
                    <img className='rounded-2xl object-contain h-auto align-middle max-w-[100%]' src="/ees_image (29).svg" alt="" />
                </div>
                <div className=' sm:w-[30vw] flex justify-center items-center md:w-[20vw] w-[70vw] '>
                    <img className='rounded-2xl object-contain h-auto align-middle max-w-[100%]' src="/ees_image (30).svg" alt="" />
                </div>
                <div className=' sm:w-[30vw] flex justify-center items-center md:w-[20vw] w-[70vw] '>
                    <img className='rounded-2xl object-contain h-auto align-middle max-w-[100%]' src="/ees_image (31).svg" alt="" />
                </div>
                <div className=' sm:w-[30vw] flex justify-center items-center md:w-[20vw] w-[70vw] '>
                    <img className='rounded-2xl object-contain h-auto align-middle max-w-[100%]' src="/ees_image (32).svg" alt="" />
                </div>
                <div className=' sm:w-[30vw] flex justify-center items-center md:w-[20vw] w-[70vw] '>
                    <img className='rounded-2xl object-contain h-auto align-middle max-w-[100%]' src="/ees_image (33).svg" alt="" />
                </div>
                <div className=' sm:w-[30vw] flex justify-center items-center md:w-[20vw] w-[70vw] '>
                    <img className='rounded-2xl object-contain h-auto align-middle max-w-[100%]' src="/ees_image (34).svg" alt="" />
                </div>
                <div className=' sm:w-[30vw] flex justify-center items-center md:w-[20vw] w-[70vw] '>
                    <img className='rounded-2xl object-contain h-auto align-middle max-w-[100%]' src="/ees_image (35).svg" alt="" />
                </div>
                <div className=' sm:w-[30vw] flex justify-center items-center md:w-[20vw] w-[70vw] '>
                    <img className='rounded-2xl object-contain h-auto align-middle max-w-[100%]' src="/ees_image (36).svg" alt="" />
                </div>
                <div className=' sm:w-[30vw] flex justify-center items-center md:w-[20vw] w-[70vw] '>
                    <img className='rounded-2xl object-contain h-auto align-middle max-w-[100%]' src="/ees_image (37).svg" alt="" />
                </div>
                <div className=' sm:w-[30vw] flex justify-center items-center md:w-[20vw] w-[70vw] '>
                    <img className='rounded-2xl object-contain h-auto align-middle max-w-[100%]' src="/ees_image (38).svg" alt="" />
                </div>
                <div className=' sm:w-[30vw] flex justify-center items-center md:w-[20vw] w-[70vw] '>
                    <img className='rounded-2xl object-contain h-auto align-middle max-w-[100%]' src="/ees_image (39).svg" alt="" />
                </div>
                <div className=' sm:w-[30vw] flex justify-center items-center md:w-[20vw] w-[70vw] '>
                    <img className='rounded-2xl object-contain h-auto align-middle max-w-[100%]' src="/ees_image (40).svg" alt="" />
                </div>
                <div className=' sm:w-[30vw] flex justify-center items-center md:w-[20vw] w-[70vw] '>
                    <img className='rounded-2xl object-contain h-auto align-middle max-w-[100%]' src="/ees_image (41).svg" alt="" />
                </div>
                <div className=' sm:w-[30vw] flex justify-center items-center md:w-[20vw] w-[70vw] '>
                    <img className='rounded-2xl object-contain h-auto align-middle max-w-[100%]' src="/ees_image (42).svg" alt="" />
                </div>
                <div className=' sm:w-[30vw] flex justify-center items-center md:w-[20vw] w-[70vw] '>
                    <img className='rounded-2xl object-contain h-auto align-middle max-w-[100%]' src="/ees_image (43).svg" alt="" />
                </div>
                <div className=' sm:w-[30vw] flex justify-center items-center md:w-[20vw] w-[70vw] '>
                    <img className='rounded-2xl object-contain h-auto align-middle max-w-[100%]' src="/ees_image (44).svg" alt="" />
                </div>
                <div className=' sm:w-[30vw] flex justify-center items-center md:w-[20vw] w-[70vw] '>
                    <img className='rounded-2xl object-contain h-auto align-middle max-w-[100%]' src="/ees_image (45).svg" alt="" />
                </div>
                <div className=' sm:w-[30vw] flex justify-center items-center md:w-[20vw] w-[70vw] '>
                    <img className='rounded-2xl object-contain h-auto align-middle max-w-[100%]' src="/ees_image (46).svg" alt="" />
                </div>
                <div className=' sm:w-[30vw] flex justify-center items-center md:w-[20vw] w-[70vw] '>
                    <img className='rounded-2xl object-contain h-auto align-middle max-w-[100%]' src="/ees_image (47).svg" alt="" />
                </div>
                <div className=' sm:w-[30vw] flex justify-center items-center md:w-[20vw] w-[70vw] '>
                    <img className='rounded-2xl object-contain h-auto align-middle max-w-[100%]' src="/ees_image (48).svg" alt="" />
                </div>
                <div className=' sm:w-[30vw] flex justify-center items-center md:w-[20vw] w-[70vw] '>
                    <img className='rounded-2xl object-contain h-auto align-middle max-w-[100%]' src="/ees_image (49).svg" alt="" />
                </div>
                <div className=' sm:w-[30vw] flex justify-center items-center md:w-[20vw] w-[70vw] '>
                    <img className='rounded-2xl object-contain h-auto align-middle max-w-[100%]' src="/ees_image (50).svg" alt="" />
                </div>
                <div className=' sm:w-[30vw] flex justify-center items-center md:w-[20vw] w-[70vw] '>
                    <img className='rounded-2xl object-contain h-auto align-middle max-w-[100%]' src="/ees_image (51).svg" alt="" />
                </div>
            </div>
        </div>
    );
};
export default Gallery;