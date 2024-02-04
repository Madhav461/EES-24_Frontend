import "./EventsCard.css";
import {useState} from 'react';

const EventsCard = ({name, eventNum, clicked}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(current => !current);
  };

  if ((eventNum != name) && isActive) {
    setIsActive(false);
  }

  const eventClicked=()=>{
    clicked(name);
    handleClick();
  }

  return (
      <div className="events-card-container">
        {!isActive && <div className="event-title" onClick={eventClicked}>  
        
        </div>}
        {!isActive && <div className="event-details" onClick={eventClicked}>

          <div className="events-trapezium">
            Event
            <span class="before"> </span>
            <span class="after"> </span>
          </div>

        </div>}
        {/* <div className="event-register">
          <img src="event-register.svg" alt="" />
              Register
        </div> */}
        <div className="event-register">
          <img src="event-register.svg" alt="" />
        </div>
        {!isActive && <div className="event-lower-polygon" onClick={eventClicked}>
          {/* <img src="event-lower-polygon.svg" alt="" /> */}
        </div>}

        {isActive && <div className="event-pop" onClick={eventClicked}>   
          <div className="event-info-pop">  
            Hola I am Santosh
          </div>
        </div>}

    </div>
  );
  // return (
  //   <div className="events-card-container-outer">
  //     <div className="events-card-container">
  //       {isActive && <div className="event-title" onClick={eventClicked}>  
        
  //       </div>}
  //       {isActive && <div className="event-details" onClick={eventClicked}>

  //         <div className="events-trapezium">
  //           Event
  //           <span class="before"> </span>
  //           <span class="after"> </span>
  //         </div>

  //       </div>}
  //       {/* <div className="event-register">
  //         <img src="event-register.svg" alt="" />
  //             Register
  //       </div> */}
  //       <div className="event-register">
  //         <img src="event-register.svg" alt="" />
  //       </div>
  //       {isActive && <div className="event-lower-polygon">
  //         {/* <img src="event-lower-polygon.svg" alt="" /> */}
  //       </div>}

  //       {!isActive && <div className="event-info-pop" onClick={eventClicked}>  
  //           Hola I am Santosh
  //       </div>}

  //   </div>

  //   </div>
  // );

  // return (
  //   <div className="events-card-container-outer">
  //     <div className="events-card-container">
  //       <div className="event-title">

  //       </div>
  //       <div className="event-details" onClick={eventClicked}>

  //         <div className="events-trapezium">
  //           Event
  //           <span class="before"> </span>
  //           <span class="after"> </span>
  //         </div>

  //       </div>
  //       {/* <div className="event-register">
  //         <img src="event-register.svg" alt="" />
  //             Register
  //       </div> */}
  //       <div className="event-register">
  //         <img src="event-register.svg" alt="" />
  //       </div>
  //       <div className="event-lower-polygon">
  //         {/* <img src="event-lower-polygon.svg" alt="" /> */}
  //       </div>
  //   </div>

  //   </div>
  // );
};

export default EventsCard;