import "./Events.css";
import "./EventsUpcoming.css";
import EventsCard from "./EventsCard";
import React, { useState } from "react";

import Background from "./background";
import Navhome2 from "./navhome";
import Footer from "./Footer";

const EventsMashal = () => {

  return (
    <>
      <Background />
      <Navhome2 />
        <div className="events-upcoming-container">
          <img className="events-upcoming-background" src="/events-coming-soon.svg" alt=""></img>
        </div>
      {/* <Footer /> */}
    </>
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

export default EventsMashal;