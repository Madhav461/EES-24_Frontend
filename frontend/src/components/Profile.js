import { Menu, Transition } from '@headlessui/react';
import React, { Fragment, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext';

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

function Profile() {
  const { user, logoutUser, authTokens, userDetails } = useContext(AuthContext);
    const [image, setImage] = useState("/user-profile-4255.svg")
    const navigate = useNavigate()
    useEffect(() => {
      if(userDetails && userDetails?.google) {
        setImage(userDetails?.google?.picture);
      }
    }, [userDetails])
  return (
    <div>
      {user && 
       <Menu as="div" className="relative inline-block text-left z-50 bg-gray">
       <div>
         <Menu.Button className="bg-gray">
           <img className='h-10 w-10 rounded-full object-cover'
             src={
               image
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
         <Menu.Items className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none flex flex-col">
           <div className="py-1 w-full z-50 flex flex-col space-y-3">
             <Menu.Item>
               {({ active }) => (
                 <button
                  onClick={()=>{navigate('/dashboard')}}
                   className={classNames(
                     active
                       ? "bg-whitesmoke text-gray"
                       : "text-gray",
                       "block px-4 py-2 font-audiowide text-sm text-gray no-underline"
                     )}
                   >
                     Dashboard
                   </button>
                 )}
               </Menu.Item>
               <Menu.Item>
                 {({ active }) => (
                   <button
                     onClick={logoutUser}
                     className={classNames(
                       active
                         ? "bg-whitesmoke text-gray"
                         : "text-gray",
                       "block px-4 py-2 text-sm font-audiowide text-gray no-underline"
                     )}
                   >
                     Log out
                   </button>
                 )}
               </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
              </Menu>}
    </div>
  )
}

export default Profile
