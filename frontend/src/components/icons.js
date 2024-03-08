// SocialIcons.jsx

import React from 'react';
import './icons.css';

const SocialIcons = () => {
  return (
    <div className="object-contain flex flex-col justify-center items-center w-full space-x-4" style={{  
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      gap: '1rem',
    }}>
      <div className='flex flex-col  gap-6 '>
        <a href="https://www.facebook.com/ees.fiesta/" target="_blank" rel="noopener noreferrer" className="text-blue-600">
          <i className="uil uil-facebook-f"></i>
        </a>

        <a href="https://www.linkedin.com/company/ees-iit-bhu" target="_blank" rel="noopener noreferrer" className="text-blue-600">
          <i className="uil uil-linkedin"></i>
        </a>

        <a href="https://www.instagram.com/ees_fest" target="_blank" rel="noopener noreferrer" className="text-pink-600">
          <i className="uil uil-instagram-alt"></i>
        </a>

        <a href="https://twitter.com/iitbhu_varanasi" target="_blank" rel="noopener noreferrer" className="text-pink-600">
          <i className="uil uil-twitter"></i>
        </a>
      </div> 
    </div>
  );
};

export default SocialIcons;
