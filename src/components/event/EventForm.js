import React, { useState } from "react";
import API from "../../modules/EventManager";

const EventForm = props => {
    const activeUserId = 1;

    const [event, setEvent] = useState({
        userId: activeUserId,
        name: "",
        venue: "",
        date: "",
        // userId: parseInt(sessionStorage.getItem("userId"))
    });
    
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = { ...event };
        stateToChange[evt.target.id] = evt.target.value;
        setEvent(stateToChange);
    };

    const makeNewEvent = evt => {
        evt.preventDefault();
        if (event.name === "" || event.venue === "" || event.date === "") {
        alert("Please complete all fields.");
        } else if (Date.parse(event.date) < Date.now())
        {
        alert("This date has already passed.")
        } else {
        setIsLoading(true);
        API.save(event, "events").then(() => 
        {props.getEvents()
        setIsLoading(false)});
        }
    };

    return (
        <>
        <div>
            <button type="button"
                id="showHiddenEventsButton"
            >
                Add New Event
            </button>
        </div>
        <form className="showContent">
            <fieldset>
            <div>
                <label htmlFor="Name">Name: </label>
                <input
                type="text"
                required
                onChange={handleFieldChange}
                id="name"
                placeholder="Event name"
                />
                <br></br>
                <label htmlFor="Venue">Venue: </label>
                <input
                type="text"
                required
                onChange={handleFieldChange}
                id="venue"
                placeholder="Event venue"
                />
                <br></br>
                <label htmlFor="Date">Date: </label>
                <input
                type="date"
                required
                onChange={handleFieldChange}
                id="date"
                />
                <br></br>
            </div>
            <div>
                <button type="button" className="submitButton" disabled={isLoading} onClick={makeNewEvent}>
                Submit
                </button>
            </div>
            </fieldset>
        </form>
        </>
    );
};

export default EventForm;