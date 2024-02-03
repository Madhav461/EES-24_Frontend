import "./EventsCard.css";

const EventsCard = () => {
  return (
    <div className="events-card-container">
      <div className="event-title">

      </div>
      <div className="event-details">

        <div className="events-trapezium">
          Event
          <span class="before"> </span>
          <span class="after"> </span>
        </div>

      </div>
      {/* <div className="event-register">
        <img src="event-register.svg" alt="" />
            Register
      </div> */}
      <div className="event-register">
        <img src="event-register.svg" alt="" />
      </div>
      <div className="event-lower-polygon">
        {/* <img src="event-lower-polygon.svg" alt="" /> */}
      </div>
    </div>
  );
};

export default EventsCard;