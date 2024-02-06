import React, { useState } from 'react';
import "./About.css";

export const About = () => {



  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 4); // Assuming you have 4 images
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + 4) % 4);
  };



  const handleClick1 = () => {
    const iteam1 = document.getElementById('img1');
    const iteam2 = document.getElementById('img2');
    if (iteam1.style.display === 'none') {
      iteam1.style.display = 'flex';
    }
    else {
      iteam1.style.display = 'none'
    }
    if (iteam2.style.display === 'none') {
      iteam2.style.display = 'flex';
    }
    else {
      iteam2.style.display = 'none'
    }

    const myDiv = document.getElementById('myDiv1');
    if (myDiv) {
      const currentWidth = myDiv.style.width; // Default width
      console.log(currentWidth);
      if (currentWidth === '10%') {
        const newWidth = '70%';
        myDiv.style.transition = 'width 0.3s ease';
        myDiv.style.width = newWidth;

        [2, 3, 4].forEach(index => {
          const currentDiv2 = document.getElementById(`myDiv${index}`);
          console.log(myDiv.style.width);
          if (currentDiv2) {
            const currentWidth2 = currentDiv2.style.width;

            console.log(currentWidth2);
            if (currentWidth2 === '70%') {

              const newWidth2 = '10%';
              const iteam3 = document.getElementById(`img${index * 2 - 1}`);
              const iteam4 = document.getElementById(`img${index * 2}`);
              if (iteam3.style.display === 'none') {
                iteam3.style.display = 'flex';
                iteam4.style.display = 'none';
              }
              currentDiv2.style.width = newWidth2;

              currentDiv2.style.transition = 'width 0.3s ease';
            }
          }
        });
      }
    }
  };


  const handleClick2 = () => {

    const iteam1 = document.getElementById('img3');
    const iteam2 = document.getElementById('img4');

    if (iteam1.style.display === 'none') {
      iteam1.style.display = 'flex';
    }
    else {
      iteam1.style.display = 'none'
    }
    if (iteam2.style.display === 'none') {
      iteam2.style.display = 'flex';
    }
    else {
      iteam2.style.display = 'none'
    }

    const myDiv = document.getElementById('myDiv2');
    if (myDiv) {
      const currentWidth = myDiv.style.width; // Default width
      // const newWidth = currentWidth === '10%' ? '70%' : '10%'; // Toggle between '200px' and '400px'
      console.log(currentWidth);
      if (currentWidth === '10%') {
        const newWidth = '70%';
        myDiv.style.transition = 'width 0.3s ease';
        myDiv.style.width = newWidth;

        [1, 3, 4].forEach(index => {
          const currentDiv2 = document.getElementById(`myDiv${index}`);
          console.log(myDiv.style.width);
          if (currentDiv2) {

            const currentWidth2 = currentDiv2.style.width;

            console.log(currentWidth2);
            if (currentWidth2 === '70%') {

              const newWidth2 = '10%';
              const iteam3 = document.getElementById(`img${index * 2 - 1}`);
              const iteam4 = document.getElementById(`img${index * 2}`);
              if (iteam3.style.display === 'none') {
                iteam3.style.display = 'flex';
                iteam4.style.display = 'none';
              }

              currentDiv2.style.width = newWidth2;

              currentDiv2.style.transition = 'width 0.3s ease';
            }
          }
        });
      }


    }



  };

  

  const handleClick3 = () => {

    const iteam1 = document.getElementById('img5');
    const iteam2 = document.getElementById('img6');

    if (iteam1.style.display === 'none') {
      iteam1.style.display = 'flex';
    }
    else {
      iteam1.style.display = 'none'
    }
    if (iteam2.style.display === 'none') {
      iteam2.style.display = 'flex';
    }
    else {
      iteam2.style.display = 'none'
    }

    const myDiv = document.getElementById('myDiv3');
    if (myDiv) {
      const currentWidth = myDiv.style.width; // Default width
      // const newWidth = currentWidth === '10%' ? '70%' : '10%'; // Toggle between '200px' and '400px'
      console.log(currentWidth);
      if (currentWidth === '10%') {
        const newWidth = '70%';
        myDiv.style.transition = 'width 0.3s ease';
        myDiv.style.width = newWidth;

        [1, 2, 4].forEach(index => {
          const currentDiv2 = document.getElementById(`myDiv${index}`);
          console.log(myDiv.style.width);
          if (currentDiv2) {

            const currentWidth2 = currentDiv2.style.width;

            console.log(currentWidth2);
            if (currentWidth2 === '70%') {

              const newWidth2 = '10%';
              const iteam3 = document.getElementById(`img${index * 2 - 1}`);
              const iteam4 = document.getElementById(`img${index * 2}`);
              if (iteam3.style.display === 'none') {
                iteam3.style.display = 'flex';
                iteam4.style.display = 'none';
              }



              currentDiv2.style.width = newWidth2;


              currentDiv2.style.transition = 'width 0.3s ease';
            }
          }
        });
      }
    }

  };

 
  const handleClick4 = () => {

    const iteam1 = document.getElementById('img7');
    const iteam2 = document.getElementById('img8');

    if (iteam1.style.display === 'none') {
      iteam1.style.display = 'flex';
    }
    else {
      iteam1.style.display = 'none'
    }
    if (iteam2.style.display === 'none') {
      iteam2.style.display = 'flex';
    }
    else {
      iteam2.style.display = 'none'
    }

    const myDiv = document.getElementById('myDiv4');
    if (myDiv) {
      const currentWidth = myDiv.style.width; // Default width
      // const newWidth = currentWidth === '10%' ? '70%' : '10%'; // Toggle between '200px' and '400px'
      console.log(currentWidth);
      if (currentWidth === '10%') {
        const newWidth = '70%';
        myDiv.style.transition = 'width 0.3s ease';
        myDiv.style.width = newWidth;

        [1, 2, 3].forEach(index => {
          const currentDiv2 = document.getElementById(`myDiv${index}`);
          console.log(myDiv.style.width);
          if (currentDiv2) {

            const currentWidth2 = currentDiv2.style.width;
            console.log(currentWidth2);
            if (currentWidth2 === '70%') {

              const newWidth2 = '10%';
              const iteam3 = document.getElementById(`img${index * 2 - 1}`);
              const iteam4 = document.getElementById(`img${index * 2}`);
              if (iteam3.style.display === 'none') {
                iteam3.style.display = 'flex';
                iteam4.style.display = 'none';
              }

              currentDiv2.style.width = newWidth2;


              currentDiv2.style.transition = 'width 0.3s ease';
            }
          }
        });
      }

      // Add transition for the width property
      // Set the width dynamically
    }


  };




  return (
  
    <div>
    <div className=" w-sceen  h-[635px]  pt-[117px] flex desktopview    " >
      <div className="w-[5.7%]   ">
      {/* <img src="about_us_desktopview_Lines - Wave.svg"  style={{ width:'40px', height: '100%' }}    /> */}
      
      </div>
      <div className=" w-[94.3%] h-full border-solid border-[0.5px]  AboutUs flex overflow-hidden   ">
        {/* bg-[#000] */}
        <div id="myDiv1" className=' h-full flex     ' style={{ cursor: 'pointer', width: '70%' }}  >
          {/* <p>This is my div1</p>  */}
          <div id='img2' style={{ width: '100%', display: 'flex' }}    >
            <div className=' block w-[100%] Aboutus'>

              <div className=" h-[95px] w-[100%] items-center flex ml-[20px]  ">
                <svg width="69" height="67" viewBox="0 0 69 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1.5" y="1.5" width="66" height="64" rx="4.5" fill="black" stroke="white" stroke-width="3" />
                  <path d="M38.7725 38.9092H10.3367L7.80371 43.1418L14.1977 53.8441H47.7042L46.8073 52.3459L38.7725 38.907V38.9092ZM10.1884 43.144L11.5279 40.9068H37.579L44.1213 51.851H15.3889L10.1884 43.144Z" fill="white" />
                  <path d="M62.0522 42.6437L51.9085 25.671L45.5979 15.103L36.708 29.9774L50.9676 53.8454H55.9526L62.3512 43.1431L62.0522 42.6437ZM54.759 51.8501H52.1588L39.0927 29.9774L45.5979 19.096L50.1194 26.6698L59.9642 43.1431L54.759 51.8501Z" fill="white" />
                  <path d="M43.9593 12.3651L43.6604 11.8657L41.4703 8.19751H28.6777L18.242 25.6697L11.9639 36.1726H29.7368L43.957 12.3651H43.9593ZM15.5444 34.1751L20.0311 26.6684L29.8712 10.1951H40.2768L41.5723 12.3651L28.5433 34.1751H15.5421H15.5444Z" fill="white" />
                </svg>
              </div>

              <div className=' text-[50px] text-white h-[113px] w-[59vw] justify-between  border-solid border-[0.5px] flex xyz1 '>
                <div className="about_us_title ml-[44px] items-center justify-center flex ">
                  ABOUT US
                </div>
                <div className=" items-center justify-center h-[113px] w-[130px] flex ">
                  <svg width="76" height="71" viewBox="0 0 76 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M76 60.6863L64.8854 71L12 71L-8.18568e-06 60.6863L-1.97867e-06 11.3167L5.99998 6L12 1.75741e-05L64.8854 1.13449e-05L76 11.3167L76 60.6863Z" fill="#FEFEFE" />
                    <path d="M51 60L26 35.5L51 11" stroke="black" stroke-width="10" />
                  </svg>
                </div>
              </div>

              {/* also decrease font size */}
              {/* border-solid border-[0.5px] */}
              <div className=' flex text-white w-[60vw] h-[315px] ml-[44px]    textarea mt-[40px]'>
              Over the course of more than a decade, UDYAM, the Annual Techno-Management Festival hosted by the Department of Electronics Engineering at IIT (BHU) Varanasi, has been a cornerstone event, offering a diverse array of competitions in Digital and Analog Electronics, Data Science, Machine Learning, and beyond. Now, poised for its latest edition in 2024, UDYAM’24 continues its tradition of fostering technical prowess among Indian technocrats.
              </div>
              <div className="  ml-[15%] mt-[0px]  ">
              <svg width="46vw" height="49" viewBox="0 0 792 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="396.58" height="59" fill="white" />
                  <rect x="399.08" y="0" width="390.42" height="59" fill="black" stroke="white" stroke-width="0.5" />
                </svg>

              </div>
            </div>
          </div>
          <div id='img1' onClick={handleClick1} className="rect" style={{ display: 'none', zIndex: '12' }}>
            {/* after click */}
            <div className="rect text-black items-center flex flex-col  justify-between">
              <div>
                <svg width="42" height="23" viewBox="0 0 42 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 1L39.0157 1C40.819 1 41.7013 3.19879 40.3981 4.44528L22.3824 21.6777C21.6092 22.4173 20.3908 22.4173 19.6176 21.6777L1.60189 4.44529C0.298737 3.19879 1.18102 1 2.98433 1L21 1Z" fill="#121519" stroke="black" />
                </svg>

              </div>
              <div>


                {/* This is my div222 */}
                <div className='rotate-90 overflow-hidden '>
                <p className='font-michroma tracking-widest font-semibold text-[44px]'>ABOUTUS</p>

                </div>


              </div>

              <div className=' items-center justify-center'>
                <img src="ees_logo_FCFBFC 1 (1).svg" className='w-[120px] h-[160px]'></img>
               </div>


            </div>
          </div>







          {/* <div id='img1' className='flex   ' style={{width:'100%'}}>
       
       <div className=' relative ' style={{width:'100%', height:'100%'}}>
       <div className='buttom'> </div>
       </div>
       
       </div>

       <div id ='img2' className='flex'  style={{width:'100%',display:'none',backgroundColor: 'red'}}>
       <img src={image2}  className='flex object-cover '  style={{width:'100%',}}></img>
       </div> */}


          {/* <div>hi</div> */}
        </div>

        {/* backgroundColor: 'red' */}
        {/* zIndex: '9' */}
        <div id="myDiv2" className=' h-full flex  ' style={{ cursor: 'pointer', width: '10%' }}>

          <div id='img3' onClick={handleClick2} className='flex rect   ' style={{ width: '100%', zIndex: '9'  }}>

            <div className="rect text-black items-center flex flex-col  justify-between">
              <div>
                <svg width="42" height="23" viewBox="0 0 42 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 1L39.0157 1C40.819 1 41.7013 3.19879 40.3981 4.44528L22.3824 21.6777C21.6092 22.4173 20.3908 22.4173 19.6176 21.6777L1.60189 4.44529C0.298737 3.19879 1.18102 1 2.98433 1L21 1Z" fill="#121519" stroke="black" />
                </svg>

              </div>
              <div>


                {/* This is my div222 */}
                <div className='rotate-90 overflow-hidden '>
                <p className='font-michroma font-normal text-[50px]'>UDYAM</p>

                </div>

              </div>

              <div>

                {/* IMG */}
                <img src="AboutUs_udyam_logo.svg" className='w-[90px] h-[160px]'  />

              </div>


            </div>
          </div>

          <div id='img4' className='flex ' style={{ width: '100%', display: 'none' }}>
            {/* <img src={image2}  className='flex object-cover '  style={{width:'100%',}}></img> */}
            {/* <div className=' block w-[100%] Aboutus'>
       <div className=' text-[100px] text-white'>about us</div>
       <div className=' text-white textarea'>
        
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et pariatur neque tempore, numquam cumque ratione. Ducimus itaque quam sit sed, animi deleniti id amet sunt voluptatum iusto quidem suscipit temporibus veritatis dolor? Quibusdam culpa modi suscipit, quis necessitatibus placeat omnis iure, incidunt animi id cupiditate ipsum, voluptatem et voluptate ratione mollitia asperiores provident accusantium nemo! Voluptatibus 
       </div>
       </div> */}
            <div className=' block w-[100%] Aboutus'>
              <div className=" h-[95px] w-[100%] items-center flex ml-[20px]  ">
                <svg width="69" height="67" viewBox="0 0 69 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1.5" y="1.5" width="66" height="64" rx="4.5" fill="black" stroke="white" stroke-width="3" />
                  <path d="M38.7725 38.9092H10.3367L7.80371 43.1418L14.1977 53.8441H47.7042L46.8073 52.3459L38.7725 38.907V38.9092ZM10.1884 43.144L11.5279 40.9068H37.579L44.1213 51.851H15.3889L10.1884 43.144Z" fill="white" />
                  <path d="M62.0522 42.6437L51.9085 25.671L45.5979 15.103L36.708 29.9774L50.9676 53.8454H55.9526L62.3512 43.1431L62.0522 42.6437ZM54.759 51.8501H52.1588L39.0927 29.9774L45.5979 19.096L50.1194 26.6698L59.9642 43.1431L54.759 51.8501Z" fill="white" />
                  <path d="M43.9593 12.3651L43.6604 11.8657L41.4703 8.19751H28.6777L18.242 25.6697L11.9639 36.1726H29.7368L43.957 12.3651H43.9593ZM15.5444 34.1751L20.0311 26.6684L29.8712 10.1951H40.2768L41.5723 12.3651L28.5433 34.1751H15.5421H15.5444Z" fill="white" />
                </svg>

              </div>
              <div className=' text-[50px] text-white h-[113px] w-[56vw] justify-between  border-solid border-[0.5px] flex xyz2 '>
                <div className="about_us_title ml-[44px] items-center justify-center  flex ">
                  UDYAM
                </div>
                <div className=" items-center justify-center h-[113px] w-[130px] flex ">
                  <svg width="76" height="71" viewBox="0 0 76 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M76 60.6863L64.8854 71L12 71L-8.18568e-06 60.6863L-1.97867e-06 11.3167L5.99998 6L12 1.75741e-05L64.8854 1.13449e-05L76 11.3167L76 60.6863Z" fill="#FEFEFE" />
                    <path d="M51 60L26 35.5L51 11" stroke="black" stroke-width="10" />
                  </svg>


                </div>
              </div>
              {/* also decrease font size */}
              {/* border-solid border-[0.5px] */}
              <div className=' flex text-white w-[60vw] h-[315px] ml-[44px]    textarea mt-[40px]'>
              Over the course of more than a decade, UDYAM, the Annual Techno-Management Festival hosted by the Department of Electronics Engineering at IIT (BHU) Varanasi, has been a cornerstone event, offering a diverse array of competitions in Digital and Analog Electronics, Data Science, Machine Learning, and beyond. Now, poised for its latest edition in 2024, UDYAM’24 continues its tradition of fostering technical prowess among Indian technocrats.
              </div>
              <div className="  ml-[15%] mt-[0px]  ">
              <svg width="46vw" height="49" viewBox="0 0 792 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="396.58" height="59" fill="white" />
                  <rect x="399.08" y="0" width="390.42" height="59" fill="black" stroke="white" stroke-width="0.5" />
                </svg>

              </div>
            </div>
          </div>

        </div>
        {/* backgroundColor: 'green', */}
        <div id="myDiv3" className=' h-full flex ' style={{ cursor: 'pointer', width: '10%' }}>
          {/* This is my div3 */}

          <div id='img5' onClick={handleClick3} className='flex   ' style={{ width: '100%', zIndex: '9' }}>

            <div className="rect text-black items-center flex flex-col  justify-between">
              {/* This is my div3 */}
              <div>
                <svg width="42" height="23" viewBox="0 0 42 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 1L39.0157 1C40.819 1 41.7013 3.19879 40.3981 4.44528L22.3824 21.6777C21.6092 22.4173 20.3908 22.4173 19.6176 21.6777L1.60189 4.44529C0.29874 3.19879 1.18102 1 2.98434 1L21 1Z" fill="#121519" stroke="black" />
                </svg>

              </div>
              <div>
              <div className='rotate-90 overflow-hidden '>
                <p className='font-michroma font-normal text-[50px]'>UDGAM</p>

                </div>

              </div>
              <div>
                {/* img */}
                <img src="AboutUs_udgam_logo.svg" className='w-[120px] h-[160px]'  />
              </div>

            </div>

          </div>

          <div id='img6' className='flex' style={{ width: '100%', display: 'none' }}>
            {/* <img src={image2}  className='flex object-cover '  style={{width:'100%',}}></img> */}
            <div className=' block w-[100%] Aboutus'>
              <div className=" h-[95px] w-[100%] items-center flex ml-[20px]  ">
                <svg width="69" height="67" viewBox="0 0 69 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1.5" y="1.5" width="66" height="64" rx="4.5" fill="black" stroke="white" stroke-width="3" />
                  <path d="M38.7725 38.9092H10.3367L7.80371 43.1418L14.1977 53.8441H47.7042L46.8073 52.3459L38.7725 38.907V38.9092ZM10.1884 43.144L11.5279 40.9068H37.579L44.1213 51.851H15.3889L10.1884 43.144Z" fill="white" />
                  <path d="M62.0522 42.6437L51.9085 25.671L45.5979 15.103L36.708 29.9774L50.9676 53.8454H55.9526L62.3512 43.1431L62.0522 42.6437ZM54.759 51.8501H52.1588L39.0927 29.9774L45.5979 19.096L50.1194 26.6698L59.9642 43.1431L54.759 51.8501Z" fill="white" />
                  <path d="M43.9593 12.3651L43.6604 11.8657L41.4703 8.19751H28.6777L18.242 25.6697L11.9639 36.1726H29.7368L43.957 12.3651H43.9593ZM15.5444 34.1751L20.0311 26.6684L29.8712 10.1951H40.2768L41.5723 12.3651L28.5433 34.1751H15.5421H15.5444Z" fill="white" />
                </svg>

              </div>
              <div className=' text-[50px] text-white h-[113px] w-[56vw] justify-between  border-solid border-[0.5px] flex xyz3 '>
                <div className="about_us_title ml-[44px] items-center justify-center  flex ">
                  UDGAM
                </div>
                <div className=" items-center justify-center h-[113px] w-[130px] flex ">
                  <svg width="76" height="71" viewBox="0 0 76 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M76 60.6863L64.8854 71L12 71L-8.18568e-06 60.6863L-1.97867e-06 11.3167L5.99998 6L12 1.75741e-05L64.8854 1.13449e-05L76 11.3167L76 60.6863Z" fill="#FEFEFE" />
                    <path d="M51 60L26 35.5L51 11" stroke="black" stroke-width="10" />
                  </svg>


                </div>
              </div>
              {/* also decrease font size */}
              {/* border-solid border-[0.5px] */}
              <div className=' flex text-white w-[60vw] h-[315px] ml-[44px]    textarea mt-[40px]'>
              Nurturing artistic flair and creativity, Udgam, the annual cultural fiesta curated by the Electronics Engineering Society (EES) at IIT (BHU) Varanasi, has consistently enriched the campus for years. Embracing music, dance, memes, arts, and more, Udgam'24 continues its tradition of fostering a vibrant cultural community and providing a platform for self-expression and celebration.
              </div>
              <div className="  ml-[15%] mt-[0px]  ">
              <svg width="46vw" height="49" viewBox="0 0 792 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="396.58" height="59" fill="white" />
                  <rect x="399.08" y="0" width="390.42" height="59" fill="black" stroke="white" stroke-width="0.5" />
                </svg>

              </div>
            </div>
          </div>


        </div>
        {/* backgroundColor: 'yellow', */}
        <div id="myDiv4" className=' h-full flex ' style={{ cursor: 'pointer', width: '10%' }}>
          {/* This is my div4 */}


          <div id='img7' onClick={handleClick4} className='flex   ' style={{ width: '100%',zIndex: '12' }}>
            {/* This is my div4 */}
            <div className="rect text-black flex  items-center flex-col  justify-between">
              {/* This is my div4 */}
              <div>
                <svg width="42" height="23" viewBox="0 0 42 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 1L39.0157 1C40.819 1 41.7013 3.19879 40.3981 4.44528L22.3824 21.6777C21.6092 22.4173 20.3908 22.4173 19.6176 21.6777L1.60189 4.44529C0.29874 3.19879 1.18102 1 2.98434 1L21 1Z" fill="#121519" stroke="black" />
                </svg>

              </div>
              <div>
              <div className='rotate-90 h-[180px] overflow-hidden '>
                <p className='font-michroma font-normal text-[46.8px]'>MASHAL</p>

                </div>

              </div>
              <div>
                {/* img */}
                <img src="AboutUs_mashal_logo2.svg" className='w-[100px] h-[140px]'  />

              </div>
            </div>
          </div>

          <div id='img8' className='flex' style={{ width: '100%', display: 'none' }}>
            <div className=' block w-[100%] Aboutus'>
              <div className=" h-[95px] w-[100%] items-center flex ml-[20px]  ">
                <svg width="69" height="67" viewBox="0 0 69 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1.5" y="1.5" width="66" height="64" rx="4.5" fill="black" stroke="white" stroke-width="3" />
                  <path d="M38.7725 38.9092H10.3367L7.80371 43.1418L14.1977 53.8441H47.7042L46.8073 52.3459L38.7725 38.907V38.9092ZM10.1884 43.144L11.5279 40.9068H37.579L44.1213 51.851H15.3889L10.1884 43.144Z" fill="white" />
                  <path d="M62.0522 42.6437L51.9085 25.671L45.5979 15.103L36.708 29.9774L50.9676 53.8454H55.9526L62.3512 43.1431L62.0522 42.6437ZM54.759 51.8501H52.1588L39.0927 29.9774L45.5979 19.096L50.1194 26.6698L59.9642 43.1431L54.759 51.8501Z" fill="white" />
                  <path d="M43.9593 12.3651L43.6604 11.8657L41.4703 8.19751H28.6777L18.242 25.6697L11.9639 36.1726H29.7368L43.957 12.3651H43.9593ZM15.5444 34.1751L20.0311 26.6684L29.8712 10.1951H40.2768L41.5723 12.3651L28.5433 34.1751H15.5421H15.5444Z" fill="white" />
                </svg>

              </div>
              <div className=' text-[50px] text-white h-[113px] w-[56vw] justify-between  border-solid border-[0.5px] flex xyz4 '>
                <div className="about_us_title ml-[44px] items-center justify-center  flex ">
                  MASHAL
                </div>
                <div className=" items-center justify-center h-[113px] w-[130px] flex ">
                  <svg width="76" height="71" viewBox="0 0 76 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M76 60.6863L64.8854 71L12 71L-8.18568e-06 60.6863L-1.97867e-06 11.3167L5.99998 6L12 1.75741e-05L64.8854 1.13449e-05L76 11.3167L76 60.6863Z" fill="#FEFEFE" />
                    <path d="M51 60L26 35.5L51 11" stroke="black" stroke-width="10" />
                  </svg>


                </div>
              </div>
              {/* also decrease font size */}
              {/* border-solid border-[0.5px] */}
              <div className=' flex text-white w-[60vw] h-[315px] ml-[44px]    textarea mt-[40px]'>
              Fostering a spirit of sportsmanship and camaraderie, Mashal, the annual sporting spectacle organized by the Electronics Engineering Society (EES) at IIT (BHU) Varanasi, has been igniting the competitive fervor among students. With a diverse range of sporting events, Mashal'24 promises to uphold its tradition of promoting physical fitness, teamwork, and healthy competition, creating lasting memories for all participants
              </div>
              <div className="  ml-[15%] mt-[0px]  ">
              <svg width="46vw" height="49" viewBox="0 0 792 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="396.58" height="59" fill="white" />
                  <rect x="399.08" y="0" width="390.42" height="59" fill="black" stroke="white" stroke-width="0.5" />
                </svg>

              </div>
            </div>
            {/* <img src={image2}  className='flex object-cover '  style={{width:'100%',}}></img> */}
          </div>
        </div>

      </div>

    </div>
    <div className="mobileview">
        <div id="controls-carousel" className="relative w-full" data-carousel="static">
          {/* Carousel wrapper */}
          <div className="carousel_container h-[100vh] relative overflow-hidden rounded-lg md:h-96">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className={`${index === currentSlide ? 'duration-700 ease-in-out' : 'hidden'} absolute w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2`}
                data-carousel-item={index === currentSlide ? 'active' : ''}
              >
                <img
                  src={`about_us_mobile_${index}.svg`} 
                  className="mobile_aboutus_card absolute w-[100%] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 block "
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
            Previous
          </button>
          <button
            type="button"
            className="absolute opacity-[0%] top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
            onClick={nextSlide}
          >
            {/* Your Next button contents */}
            Next
          </button>
        </div>
      </div>
    </div>




  );
};

export default About;
