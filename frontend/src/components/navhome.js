import React, {useContext, Fragment} from 'react'
import WorkshopsTxt from "./NavbarComps/WorkshopsTxt.jsx";
// import "./nav.css";
// import { Link } from 'react-router-dom';
// import React, { useState } from 'react';
import "./nav.css";
import { Link } from 'react-router-dom';
import HamburgerMenu from './hamburger.js';
import GalleryTxt from './NavbarComps/GalleryTxt.jsx';
// import GalleryTxt from './NavbarComps/GalleryTxt.jsx';
import ScheduleTxt from "./NavbarComps/ScheduleTxt.jsx";
import EventsTxt from './NavbarComps/EventsTxt.jsx';
import { AuthContext } from './AuthProvider.js';
import {Menu, Transition} from '@headlessui/react'
// imoprt SponsorsTxt

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navhome2 =() =>{
  const { user } = useContext(AuthContext);

  return (
    <div className='bg-gray '>
       <div className=' lg:flex bg-gray 2k:hidden  hidden  items-center justify-center  '>
           <img
            className="flex items-center justify-center"
            alt=""
            src="/vector-line.svg" //uper white
          />
           </div>
        
      
      <div className="relative bg-gray w-screen  h-[50px] 2k:h-[50px] flex  justice justify-between items-center  overflow-hidden text-center text-base  text-white font-audiowide pb-3 overflow-x-hidden">
     
     <div className='flex items-center justify-center'>
      <div className="pb-8 z-50 pl-2  h-full left-[15px] pt-4 lg:hidden 2k:block">
     <HamburgerMenu />
      </div>
      <div className='z-10 flex items-start justify-start 2k:justify-end 2k:items-start 2k:absolute 2k:left-12 2k:pt-6  bc:mr-[80px] lg:pb-4 ' >
          <a href='/'><img
            className=" 2k:flex-shrink-0 2k:mr-80 2k:pr-80 cursor-pointer pt-7 md:w-[98px]  md:h-[70px] w-[60px] h-[50px] ab:w-[72px] ab:h-[60px]"
            alt=""
            src="/ees-logo-fcfbfc-1.svg"
          />
          </a>
        </div>
        </div>
      
      {/* <ul
          className=" ml-2 my-4 hidden md:flex xl:text-3xl  lg:absolute lg:top-[50px] lg:left-[453px] justify-evenly space-x-8 items-stretch 2k:static  "
          id="list"
          list="none"
        >
       
          <div className="flex tracking-[0.08em] items-center justify-center  glow-text cursor-pointer">
            Workshops
          </div>
          <div className="flex  tracking-[0.08em] items-center justify-centre glow-text cursor-pointer">
            Sponsors
          </div>
          <div className="tracking-[0.08em] flex items-center justify-center  glow-text cursor-pointer">
            Gallery
          </div>
          <div className=" tracking-[0.08em] flex items-center justify-center  glow-text cursor-pointer">
            Schedule
          </div>

        </ul> */}
       
       <div className='flex z-10 justice1 mr-2 2k:pt-12 2k:pr-8  pr-4 justify-center items-center pt-5 lg:pt-0 lg:pb-3 ab:pt-8 space-x-5'>
        {!user && 
        <div className="relative pr-5 pl-1 ml-2 flex grow">
        <Link to="/login">
           <button className="cursor-pointer  test [border:none] md:p-0 bg-[transparent] ">
          
          <div className="flex absolute top-[11px] md:left-[89px] bc:left-[100px]  box-border w-3 h-[13px] [transform:_rotate(180deg)] [transform-origin:0_0] border-b-[1px] border-solid border-white border-l-[1px]"/>
          <div className="absolute top-[13px] left-[0px]  box-border w-3 h-[13px] border-b-[1px] border-solid border-white border-l-[1px]"/>
          <button className="cursor-pointer hidden glow-animation sm:flex  mx-3    [border:none] p-0 bg-[transparent]  top-[0px] left-[0px] text-base tracking-[0.08em] font-audiowide text-white text-center  items-center justify-center   [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000]">
                 Login
               </button>
               <button className="cursor-pointer sm:hidden glow-animation [border:none] pr-9 bg-[transparent]  top-[0px] left-[0px] text-base tracking-[0.08em] font-audiowide text-white text-center  items-center justify-center   [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000]" >
               Sign-in
               </button>
          
           </button>
           </Link>
         </div>
        }
       {!user && 
       <div className='relative   hidden sm:flex  grow '>
       <Link to="/signup">
       <button className="cursor-pointer [border:none] ml-2 mr-5 pl-0 pr-0 bg-[transparent] ">
             
                <div className="absolute flex top-[11px] left-[0px] box-border w-3 h-[13px] border-b-[1px] border-solid border-white border-l-[1px]" />
                <div className="absolute  flex  top-[11px] left-[95px] box-border w-3 h-[13px] [transform:_rotate(180deg)] [transform-origin:0_0] border-b-[1px] border-solid border-white border-l-[1px]" />
            
              <button className="  glow-animation flex cursor-pointer [border:none] p-0  bg-[transparent]  top-[0px] left-[0px] text-base tracking-[0.08em] font-audiowide text-white text-center items-center justify-center ">
                SignUp
              </button>
            </button>
            </Link>
       </div>
       }
       {/* {user &&  */}
       <Menu as="div" className="relative inline-block text-left">
       <div>
         <Menu.Button className="inline-flex w-full justify-center text-[#252B42] font-semibold hover:bg-gray-50 items-center">
           Shop
           <img
             src={
               "https://img.icons8.com/ios-glyphs/30/expand-arrow--v1.png"
             }
             alt="down-arrow"
             width={16}
             height={10}
           />
         </Menu.Button>
       </div>

       <Transition
         as={Fragment}
         enter="transition ease-out duration-100"
         enterFrom="transform opacity-0 scale-95"
         enterTo="transform opacity-100 scale-100"
         leave="transition ease-in duration-75"
         leaveFrom="transform opacity-100 scale-100"
         leaveTo="transform opacity-0 scale-95"
       >
         <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
           <div className="py-1">
             <Menu.Item>
               {({ active }) => (
                 <a
                   href="#"
                   className={classNames(
                     active
                       ? "bg-gray-100 text-gray-900"
                       : "text-gray-700",
                       "block px-4 py-2 text-sm"
                     )}
                   >
                     Hello there
                   </a>
                 )}
               </Menu.Item>
               <Menu.Item>
                 {({ active }) => (
                   <a
                     href="#"
                     className={classNames(
                       active
                         ? "bg-gray-100 text-gray-900"
                         : "text-gray-700",
                       "block px-4 py-2 text-sm"
                     )}
                   >
                     Hello there
                   </a>
                 )}
               </Menu.Item>
               <Menu.Item>
                 {({ active }) => (
                   <a
                     href="#"
                     className={classNames(
                       active
                         ? "bg-gray-100 text-gray-900"
                         : "text-gray-700",
                       "block px-4 py-2 text-sm"
                     )}
                   >
                     Hello there
                   </a>
                 )}
                 </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
              </Menu>
       {/* } */}
     </div>
       
      
       </div>
       {/* <div className=' bg-white block lg:hidden 2k:block w-full h-0.5 rounded-full'/> */}
      
      
      {/* <div className=" w-full">
          <img
            className="w-full h-[20px]"
            alt=""
            src="/whiteline.svg" //dark bottom
          /> </div> */}
       <div className="absolute bg-gray   hidden lg:block 2k:hidden  top-[40px] h-[26px]">
        <div className='flex  items-center w-screen justify-center space-x-6'>
          {/* <div><p>hello</p></div> */}
          {/* <div className="flex  tracking-[0.08em] items-center  justify-center   cursor-pointer">
            Workshops
          </div> */}
          <a href={'/'} className='text-white no-underline z-50 bg-gray rounded-2xl'>
          <WorkshopsTxt></WorkshopsTxt>
          </a>

          {/* <WorkshopsTxt className="mb-[5px]"></WorkshopsTxt> */}
          {/* <div className="flex  tracking-[0.08em] items-center justify-centre  cursor-pointer">
            Sponsors
          </div> */}
         <a href={'/teams'} className='text-white z-50 bg-gray no-underline rounded-2xl'> <EventsTxt></EventsTxt></a>
          {/* <div className="tracking-[0.08em] flex items-center justify-center  glow cursor-pointer">
            Gallery
          </div> */}
         <a href={'/'} className='text-white z-50 bg-gray no-underline rounded-2xl'>  <GalleryTxt></GalleryTxt> </a>
          {/* <div className=" tracking-[0.08em] flex items-center justify-center  glow-text cursor-pointer">
            Schedule
          </div> */}
          <a href={'#schedule'} className='text-white z-50 bg-gray no-underline rounded-2xl'> <ScheduleTxt></ScheduleTxt> </a>
        </div>
          <img
            className="absolute top-[16px] bg-gray  mt-[13px]  w-screen overflow-hidden h-[26px]"
            alt=""
            src="/vector-line2.svg" //dark bottom
          />
          
          {/* <div className="absolute  top-[0px] left-[calc(50%_-_1015px)]  w-[2030px] h-[26px]  items-center justify-center">
            <img
              className="w-[100%] h-[100%] object-contain absolute left-[0px] top-[0px] [transform:scale(1.7)]"
              alt=""
              src="/vector-line3.svg"
            />
          </div> */}
          {/* <div className=' lg:flex 2k:hidden  hidden  items-center justify-center  '>
           <img
            className="flex items-center justify-center"
            alt=""
            src="/vector-line.svg" //uper white
          />
           </div> */}
        </div>

    </div>
  )
}
export default Navhome2