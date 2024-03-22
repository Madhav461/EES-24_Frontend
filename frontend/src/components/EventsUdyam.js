import "./Events.css";
import "./EventsUdyam.css";
import EventsCard from "./EventsCard";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import AnimatedTextCharacter from "./AnimatedTextCharacter";

import Background from "./background";
import Navhome2 from "./navhome";
import Footer from "./Footer";

const EventsUdyam = () => {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
}, []);

  let navigate = useNavigate();
  const routeChange = (route) => {
    let path = {route};
    navigate(path);
  }

  const [ClickedEvent, setClickedEvent] = useState(0);
  const clicked = (num) => {
    setClickedEvent(num);
  }

  const eventNames = [
    "DEVBITS", "MOSAIC", "CASSANDRA", "X-IOTA", "DIGISIM", "FUNCKIT", "COMMNET", "I-CHIP",
  ];

  const eventInfo = [
    "Into the Multiverse of Web Development and Competitive Programming.",
    "An electrifying exploration in Deep Learning.",
    "Unleash the Data Alchemy with Machine Learning and Data Science.",
    "An IoT event that involves circuit designing, incorporating robotics and software.",
    "The ultimate Digital Electronics lebensraum.",
    "Challenge Your Coding & Circuit Wizardry!",
    "Surfing the Waves of Digital And Analog Communication.",
    "Design, Simulate, Innovate: I-Chip Unleashes Verilog Mastery!",
  ];

  const eventTitles = [
    "/events-devbits-title.svg",
    "/events-mosaic-title.svg",
    "/events-cassandra-title.svg",
    "/events-xiota-title.svg",
    "/events-digism-title.svg",
    "/events-funckit-title.svg",
    "/events-commnet-title.svg",
    "/events-ichip-title.svg",
  ]

  const eventImages = [
    "/events-devbits-background.svg",
    "/events-mosaic-background.svg",
    "/events-cassandra-background.svg",
    "/events-xiota-background.svg",
    "/events-digism-background.svg",
    "/events-commnet-background.svg",
    "/events-funckit-background.svg",
    "/events-ichip-background.svg",
  ];

  const eventDescriptions = [
    "A brand new event consisting of two of the most sought-after verticals under the programming umbrella. Firstly, participants will test their critical thinking abilities with a competitive-programming round. Then they will work on creating aesthetically pleasing and highly functional web applications built using industry-sought tech stacks.",
    "An image processing and machine learning-based event to decipher canonical problems based on  the intriguing subject of Machine Learning and Computer Vision. The problem statement of this event includes Computer Vision cum ML projects involving Captcha Recognizer, Hand-Recognition Video Simulation, Real-time License Plate Detection, etc.",
    "A Data Science event where data analysts design a model that learns and optimizes the dataset provided, implementing Machine Learning algorithms in industrial problems and exposure to the ABCs of data science - data cleaning and feature engineering, among others.",
    "An IOT-based event that requires participants to implement and propose a solution to a currently existing problem with the help of the Internet of Things. The event involves circuit designing and the incorporation of robotics and software.",
    "A Digital Electronics-based event that involves designing optimized digital systems and their Proteus Simulation. It develops a strong foundation in computer architecture and digital system designing and strengthens debugging and logic-building skills.",
    "An event that tests a participant's problem-solving abilities through low-level programming and building gate-level circuitry to optimize the logic and hardware and decrease execution time. The problem statement includes Design and Simulation of Duel game and Brian Kernighan's algorithm on Proteus.",
    "Digital and Analog communications-based event focused upon Network Architecture and MATLAB implementation of coding theory, compression algorithms, signal processing, modulation, demodulation techniques, designing and simulating analog circuits & filters to perform computations using CAD tools.",
    "I-Chip is a Verilog-based event associated with designing, simulating, validating, and debugging digital systems, from flip-flops to microprocessors. Participants are required to use Verilog HDL and work with FPGA Boards using industrial tools like Xilinx Vivado and ModelSim.",
  ];


  return (
    <>
      <Background />
      <Navhome2 />

      <div className="events-udyam-main">
        {/* <img className="events-udyam-heading-svg" src="events-udyam-heading1.svg" alt=""></img> */}
        <div className="events-udyam-heading-svg">
          <img src="/events-home-heading.svg" alt=""></img>
        </div>
        <div className="glow-text events-udyam-marquee"><Marquee speed={100} gradient={true} gradientColor="black" gradientWidth={30} className="marquee_container border-y-2 border-solid border-white"><div class="marquee"><AnimatedTextCharacter text="EVENTS * WORKSHOPS * COMPETITIONS * LECTURES * STALLS * SPORTS * PERFORMENCES * ARTS * EVENTS * WORKSHOPS * COMPETITIONS * LECTURES * STALLS * SPORTS * PERFORMENCES * ARTS *"></AnimatedTextCharacter></div></Marquee> </div>

        <div className="events-udyam-subcontainer">
          <div className="events-udyam-heading-sub">
            <img src="/events-udyam-heading-sub.svg" alt=""></img>
          </div>
          <div className="events-udyam-back-button hover:scale-110 duration-300" onClick={routeChange}>
            {/* <svg width="66" height="46" viewBox="0 0 66 46" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
            <img src="/events-udyam-back-button.svg" alt=""></img>
          </div>
        </div>
      </div>
      <div className="events-container">
        <div className="event-card-button-container">
        <EventsCard name="1" eventNum={ClickedEvent} clicked={clicked} eventName={eventNames} eventInfo={eventInfo} eventImg={eventImages} eventDescription={eventDescriptions} eventTitle = {eventTitles}/>
          <div className="event-card-buttons">
            {/* <button onClick={()=>{window.open('https://www.linkedin.com/in/mathangisri/?originalSubdomain=in%20','_blank')}}>PS</button>
            <button onClick={()=>{window.open('https://www.linkedin.com/in/mathangisri/?originalSubdomain=in%20','_blank')}}>Submit</button> */}

                  <button
                    class="apply-button" 
                    data-hackathon-slug="devbits-24-hackathon" 
                    data-button-theme="light"
                    className=" h-[44px] w-[216px]"
                    onClick={()=>window.open('https://devbits-24-hackathon.devfolio.co/')}
                  >PS</button>

          </div>
        </div>
        <div className="event-card-button-container">
        <EventsCard name="2" eventNum={ClickedEvent} clicked={clicked} eventName={eventNames} eventInfo={eventInfo} eventImg={eventImages} eventDescription={eventDescriptions} eventTitle = {eventTitles}/>
          <div className="event-card-buttons">
            <button onClick={()=>{window.open('https://www.kaggle.com/t/fa4288b5357b46a982eb2b374ce5fec3')}}>PS</button>
            <button onClick={()=>{window.open('https://forms.gle/AkzXW7gijj1NTPWK9')}}>Submit</button>
          </div>
        </div>
        <div className="event-card-button-container">
        <EventsCard name="3" eventNum={ClickedEvent} clicked={clicked} eventName={eventNames} eventInfo={eventInfo} eventImg={eventImages} eventDescription={eventDescriptions} eventTitle = {eventTitles}/>
          <div className="event-card-buttons">
            <button onClick={()=>{}}>PS</button>
            <button onClick={()=>{}}>Submit</button>
          </div>
        </div>
        <div className="event-card-button-container">
        <EventsCard name="4" eventNum={ClickedEvent} clicked={clicked} eventName={eventNames} eventInfo={eventInfo} eventImg={eventImages} eventDescription={eventDescriptions} eventTitle = {eventTitles}/>
          <div className="event-card-buttons">
            <button onClick={()=>{window.open('https://drive.google.com/file/d/1ezm1jAv_uVKavQaKxkKb3AUsWUQvC_2r/view?usp=sharing')}}>PS</button>
            <button onClick={()=>{window.open('https://forms.gle/ZXy3AWA5FnkhgLdu6')}}>Submit</button>
          </div>
        </div>
        <div className="event-card-button-container">
        <EventsCard name="5" eventNum={ClickedEvent} clicked={clicked} eventName={eventNames} eventInfo={eventInfo} eventImg={eventImages} eventDescription={eventDescriptions} eventTitle = {eventTitles}/>
          <div className="event-card-buttons">
            <button onClick={()=>{window.open('https://drive.google.com/file/d/1gHztkWIndfDc8ovryd2A1Rn4ZztmD8ma/view?usp=sharing')}}>PS</button>
            <button onClick={()=>{window.open('https://docs.google.com/forms/d/e/1FAIpQLScVP4XEen5Sr3xo01IAaW4H8cpR7xk2Cy-L_ZtF5hAmB-wPcw/viewform?usp=sf_link')}}>Submit</button>
          </div>
        </div>
        <div className="event-card-button-container">
        <EventsCard name="6" eventNum={ClickedEvent} clicked={clicked} eventName={eventNames} eventInfo={eventInfo} eventImg={eventImages} eventDescription={eventDescriptions} eventTitle = {eventTitles}/>
          <div className="event-card-buttons">
            <button onClick={()=>{window.open('https://drive.google.com/file/d/1GUFOtXkmieCIwqiK5cjuALk9ePJBxBo2/view?usp=sharing')}}>PS</button>
            <button onClick={()=>{window.open('https://docs.google.com/forms/d/1Kpf5NgQjH7YFI1KHP5Xc4PlrmLTg3XXBYo5uKl6QKZs/edit')}}>Submit</button>
          </div>
        </div>
        <div className="event-card-button-container">
        <EventsCard name="7" eventNum={ClickedEvent} clicked={clicked} eventName={eventNames} eventInfo={eventInfo} eventImg={eventImages} eventDescription={eventDescriptions} eventTitle = {eventTitles}/>
          <div className="event-card-buttons">
            <button onClick={()=>{window.open('https://drive.google.com/file/d/10y8VcAtckpVOp_KS7KQvdjNSLz9GOka0/view?usp=sharing')}}>PS</button>
            <button onClick={()=>{window.open('https://forms.gle/mnBGPnVPvyUE1raj9')}}>Submit</button>
          </div>
        </div>
        <div className="event-card-button-container">
        <EventsCard name="8" eventNum={ClickedEvent} clicked={clicked} eventName={eventNames} eventInfo={eventInfo} eventImg={eventImages} eventDescription={eventDescriptions} eventTitle = {eventTitles}/>
          <div className="event-card-buttons">
            <button onClick={()=>{window.open('https://drive.google.com/file/d/1sbBhmPGgoatn0UM6CSUEDoMXQUygak7z/view?usp=sharing')}}>PS</button>
            <button onClick={()=>{window.open('https://forms.gle/5C3WZ3PEbQstq8aTA')}}>Submit</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventsUdyam;