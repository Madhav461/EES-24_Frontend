import "./Events.css";
import "./EventsUpcoming.css";
import React from "react";
// import { useNavigate } from "react-router-dom";

import Background from "./background";
import Navhome2 from "./navhome";
import Footer from "./Footer";

const TeamsIndividual = () => {

//   let navigate = useNavigate();
//   const routeChange = (route) => {
//     let path = `/teams`;
//     navigate(path);
//   }
  
  return (
    <>
      <Background />
      <Navhome2 />
      <a href="/teams"><div className="events-upcoming-back-button" >
        <img src="/events-udyam-back-button.svg" alt=""></img>
      </div>
      </a>
        <div className="events-upcoming-container">
          <img className="events-upcoming-background" src="/events-coming-soon.svg" alt=""></img>
        </div>
      {/* <Footer /> */}
    </>

    // <>
    //   <img src="/events-coming-soon-background.svg" alt=""></img>
    // </>
  );

  // const [ClickedEvent, setClickedEvent] = useState(0);
  // const clicked = (num) => {
  //   setClickedEvent(num);
  // }


  // return (
  //   <div className="events-container">
  //       <EventsCard name="1" eventNum={ClickedEvent} clicked={clicked} eventName="" eventInfo="" eventImg=""/>
  //       <EventsCard name="2" eventNum={ClickedEvent} clicked={clicked} eventName="" eventInfo="" eventImg=""/>
  //       <EventsCard name="3" eventNum={ClickedEvent} clicked={clicked} eventName="" eventInfo="" eventImg=""/>
  //       <EventsCard name="4" eventNum={ClickedEvent} clicked={clicked} eventName="" eventInfo="" eventImg=""/>
  //       <EventsCard name="5" eventNum={ClickedEvent} clicked={clicked} eventName="" eventInfo="" eventImg=""/>
  //       <EventsCard name="6" eventNum={ClickedEvent} clicked={clicked} eventName="" eventInfo="" eventImg=""/>
  //       <EventsCard name="7" eventNum={ClickedEvent} clicked={clicked} eventName="" eventInfo="" eventImg=""/>
  //       <EventsCard name="8" eventNum={ClickedEvent} clicked={clicked} eventName="" eventInfo="" eventImg=""/>
  //   </div>
  // );
};

export default TeamsIndividual;