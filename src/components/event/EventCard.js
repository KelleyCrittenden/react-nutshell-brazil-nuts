import React from "react";
import EventEditForm from "./EventEditForm"
import API from "../../modules/EventManager"

const EventCard = (props) => {
  return (
    <div className="event-container-cards">
      <div className="inside-event-card">
        <div>{props.event.name}</div>
        <div>{props.event.venue}</div>
        <div>{props.event.date}</div>
        <div className="eventCRUDButtons">
        <div>
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
    </div>
  );
};

export default EventCard;