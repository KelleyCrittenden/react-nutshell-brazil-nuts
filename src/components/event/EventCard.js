import React from "react";
import EventEditForm from "./EventEditForm"

const EventCard = props => {
  return (
    <div className="eventCard-content">
      <div>
        <div>{props.event.name}</div>
        <div>{props.event.venue}</div>
        <div>{props.event.date}</div>
        <div className="eventCRUDButtons">
        <button
          type="button" className="eventEditButton"
          onClick={EventEditForm}
        >
          Edit
        </button>
        <button
          type="button"
          onClick={() => props.deleteEvent(props.event.id)}
        >
          Delete Event
        </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;