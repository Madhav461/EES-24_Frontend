import "./Events.css";
import EventsCard from "./EventsCard";
import React, { useState } from "react";

const EventsUdgam = () => {

  const [ClickedEvent, setClickedEvent] = useState(0);
  const clicked = (num) => {
    setClickedEvent(num);
  }


  return (
    <div className="events-container">
        <EventsCard name="1" eventNum={ClickedEvent} clicked={clicked} eventName="" eventInfo="" eventImg=""/>
        <EventsCard name="2" eventNum={ClickedEvent} clicked={clicked} eventName="" eventInfo="" eventImg=""/>
        <EventsCard name="3" eventNum={ClickedEvent} clicked={clicked} eventName="" eventInfo="" eventImg=""/>
        <EventsCard name="4" eventNum={ClickedEvent} clicked={clicked} eventName="" eventInfo="" eventImg=""/>
        <EventsCard name="5" eventNum={ClickedEvent} clicked={clicked} eventName="" eventInfo="" eventImg=""/>
        <EventsCard name="6" eventNum={ClickedEvent} clicked={clicked} eventName="" eventInfo="" eventImg=""/>
        <EventsCard name="7" eventNum={ClickedEvent} clicked={clicked} eventName="" eventInfo="" eventImg=""/>
        <EventsCard name="8" eventNum={ClickedEvent} clicked={clicked} eventName="" eventInfo="" eventImg=""/>
    </div>
  );
};

export default EventsUdgam;