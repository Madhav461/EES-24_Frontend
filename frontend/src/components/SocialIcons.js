import React from 'react';
import './icons.css'
const SocialIcons = () => {
  return (
    <div className="flex space-x-4" style={
        {  position:'absolute',
            alignItems:'centre',
            justifyContent:'centre',
             width:'2rem',
            height:'7rem',
            display:'flex',
            flexDirection:'column',
            marginTop:'0',
            marginLeft:'0',
            color:'white',
            fontSize:'50px',
            transparency:'100%',
            gap:'2rem',
            
        }
    }>
        <h2></h2>
      
      <a href="https://www.facebook.com/yourfacebookpage" target="_blank" rel="noopener noreferrer" className="text-blue-600">
        {<i class="uil uil-facebook-f"></i>}
      </a>

     
      <a href="https://www.linkedin.com/in/yourlinkedinprofile" target="_blank" rel="noopener noreferrer" className="text-blue-600">
      {<i class="uil uil-linkedin"></i>}
      </a>

      
      <a href="https://www.instagram.com/yourinstagramprofile" target="_blank" rel="noopener noreferrer" className="text-pink-600">
      {<i class="uil uil-instagram-alt"></i>}
        </a>
    
    
      <a href="https:instagram.com/yourinstagramprofile" target="_blank" rel="noopener noreferrer" className="text-pink-600">
      {<i class="uil uil-twitter"></i>}
    </a>

  </div>
);
};

export default SocialIcons;
