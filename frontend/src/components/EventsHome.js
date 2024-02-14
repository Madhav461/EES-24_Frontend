import "./EventsHome.css";
import React, { useState } from "react";

const EventsHome = () => {

  const [ClickedEvent, setClickedEvent] = useState(0);
  const clicked = (num) => {
    setClickedEvent(num);
  }


  return (
    <div className="events-home-container">
        {/* <EventsCard name="1" eventNum={ClickedEvent} clicked={clicked} eventName="" eventInfo="" eventImg=""/> */}
        <div class="events-home-card">
          <img className="" src="udyam-events-full.svg" alt=""></img>
        </div>
        <div class="events-home-card">
          <img className="" src="udgam-events-full.svg" alt=""></img>
        </div>
        <div class="events-home-card">
          <img className="" src="event-home-card.svg" alt=""></img>
        </div>
    </div>
  );
};
//   return (
//     <div className="events-home-container">
//         {/* <EventsCard name="1" eventNum={ClickedEvent} clicked={clicked} eventName="" eventInfo="" eventImg=""/> */}
//         <div class="events-home-card-udyam">
//           <img className="" src="event-home-card.svg" alt=""></img>
//           <img className="events-home-udyam" src="udyam-events.svg" alt=""></img>
//         </div>
//         <div class="events-home-card-udgam">
//           <img className="" src="event-home-card.svg" alt=""></img>
//           <img className="events-home-udgam" src="udgam-events.svg" alt=""></img>
//         </div>
//         <div class="events-home-card-mashal">
//           <img className="" src="event-home-card.svg" alt=""></img>
//           <img className="events-home-mashal" src="mashal-events.svg" alt=""></img>
//         </div>
//     </div>
//   );
// };

export default EventsHome;