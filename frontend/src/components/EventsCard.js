import "./EventsCard.css";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const EventsCard = ({ name, eventNum, clicked, eventName, eventInfo, eventDescription, eventTitle, eventImg }) => {
  
  let navigate = useNavigate();
  const routeChange = (route) => {
    let path = `/dashboard/registration`;
    navigate(path);
  }
  
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(current => !current);
  };

  if ((eventNum != name) && isActive) {
    setIsActive(false);
  }

  const eventClicked = () => {
    clicked(name);
    handleClick();
  }

  if (eventName.length == 0) {
    eventName = "Event Name";
  }
  if (eventInfo.length == 0) {
    eventInfo = "Event Info here. Nothing to add as of now. Hehe !!";
  }

  return (
    <div className="events-card-container">
      {!isActive && <div className="event-title" onClick={eventClicked}>
        {/* <img className="event-title-name" src="events-temporary-name.svg" alt="" /> */}
        <img className="event-title-name" src={eventTitle[name-1]} alt="" />
      </div>}
      {!isActive && <div className="event-details" onClick={eventClicked}>

        <div className="events-trapezium">
          {/* {eventName} */}
          {eventName[name - 1]}
          <span class="before"> </span>
          <span class="after"> </span>
        </div>
        <div className="event-info-details">
          {/* {eventInfo} */}
          <div className="event-info-details-content">
          {eventInfo[name - 1]}
          </div>
        </div>
      </div>}
      {/* <div className="event-register">
          <img src="event-register.svg" alt="" />
              Register
        </div> */}

        <svg className="event-register-svg" width="auto" height="auto" viewBox="0 0 359 118" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.73047 17V0H375.23V116.5H302.73L253.73 67.5H52.2305L1.73047 17Z" fill="white" stroke="white" stroke-width="2" />
        </svg>
        <div className="event-register-title" onClick={() => routeChange("")}>
          Register
        </div>

      {/* <div className="event-register">
        <svg className="event-register-svg" width="auto" height="auto" viewBox="0 0 359 118" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.73047 17V0H375.23V116.5H302.73L253.73 67.5H52.2305L1.73047 17Z" fill="white" stroke="white" stroke-width="2" />
        </svg>

        <div className="event-register-title">
          Register
        </div>
      </div> */}
      {!isActive && <div className="event-lower-polygon" onClick={eventClicked}>
        {/* <img src="event-lower-polygon.svg" alt="" /> */}
      </div>}

      {isActive && <div className="event-pop" onClick={eventClicked}>
        <div className="event-info-pop">
          {eventDescription[name - 1]}
        </div>
      </div>}
      {!isActive && 
      // <img className="events-card-background" src="https://imgs.search.brave.com/e6xk7cPNxbtSsfcyr7hDqII9nFQjWBHwxIVRI9hggGg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzZiL0RlcHRfb2Zf/RWxlY3RyaWNhbF9F/bmdpbmVlcmluZ19J/SVQtQkhVLmpwZw" alt=""/>
      <img className="events-card-background" src={eventImg[name-1]} alt="" onClick={eventClicked}
      />}
      {/* <img className="events-card-background" src="https://imgs.search.brave.com/e6xk7cPNxbtSsfcyr7hDqII9nFQjWBHwxIVRI9hggGg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzZiL0RlcHRfb2Zf/RWxlY3RyaWNhbF9F/bmdpbmVlcmluZ19J/SVQtQkhVLmpwZw" alt="" />  */}
    </div>
  );
  // return (
  //     <div className="events-card-container">
  //       {!isActive && <div className="event-title" onClick={eventClicked}>  

  //       </div>}
  //       {!isActive && <div className="event-details" onClick={eventClicked}>

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
  //       {!isActive && <div className="event-lower-polygon" onClick={eventClicked}>
  //         {/* <img src="event-lower-polygon.svg" alt="" /> */}
  //       </div>}

  //       {isActive && <div className="event-pop" onClick={eventClicked}>   
  //         <div className="event-info-pop">  
  //           Hola I am Santosh
  //         </div>
  //       </div>}

  //   </div>
  // );
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