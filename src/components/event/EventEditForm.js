import React, { useState, useEffect } from "react";
import API from "../../modules/EventManager";

const EventEditForm = props => {
    const activeUserId = 1;

    const [event, setEvent] = useState({
        name: "",
        venue: "",
        date: "",
        userId: activeUserId
        // userId: sessionStorage.getItem("userId")
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = { ...event };
        stateToChange[evt.target.id] = evt.target.value;
        setEvent(stateToChange);
    };

    const updateExistingEvent = evt => {
        evt.preventDefault();
        setIsLoading(true);

        const editedEvent = {
        id: props.match.params.eventId,
        name: event.name,
        venue: event.venue,
        date: event.date,
        userId: event.userId
        };

        API.update(editedEvent).then(() => props.setEvent);
    };

    useEffect(() => {
        API.edit(props.match.params.eventId).then(event => {
        setEvent(event);
        setIsLoading(false);
        });
    }, []);

  return (
        <>
        <form>
            <fieldset>
            <div className="formContent">
            <label htmlFor="name">Event name: </label>
                <input
                type="text"
                required
                className="form-control"
                onChange={handleFieldChange}
                id="name"
                value={event.name}
                />
            </div>
            <div className="formContent">
            <label htmlFor="venue">Venue: </label>
                <input
                type="text"
                required
                onChange={handleFieldChange}
                id="venue"
                value={event.venue}
                />
                </div>
                <div className="formContent">
                <label htmlFor="date">Date: </label>
                <input
                type="date"
                required
                onChange={handleFieldChange}
                id="date"
                value={event.date}
                />
                </div>
                

                <input
                type="hidden"
                required
                onChange={handleFieldChange}
                id="userId"
                value={event.userId}
                />
            
            <div className="alignRight">
                <button
                type="button" className="submitButton"
                disabled={isLoading}
                onClick={updateExistingEvent}
                >
                Submit
                </button>
            </div>
            </fieldset>
        </form>
        </>
  );
};

export default EventEditForm;