import React, { useState, useEffect } from "react";
import EventCard from "./EventCard";
import API from "../../modules/EventManager";
import "./Events.css";
import EventForm from "./EventForm";

const EventList = props => {
    // const activeUserId = (sessionStorage.getItem("userId"));
    const activeUserId = 1;

    const [events, setEvents] = useState([]);

    const sortEvents = eventsArray => {
        eventsArray.sort((a, b) => new Date(a.date) - new Date(b.date));
    };

    const getEvents = (num) => {
        return API.getWithId(num).then(eventsFromAPI => {
            console.log(eventsFromAPI)
        sortEvents(eventsFromAPI);
        setEvents(eventsFromAPI);
        });
    };

    const deleteEvent = (id) => {
        API.delete(id).then(() =>
        API.getWithId(activeUserId).then(allEvents => {
            sortEvents(allEvents);
            setEvents(allEvents);
        })
        );
    };

    useEffect(() => {
        getEvents(activeUserId);
    }, []);

    console.log(events)

    return (
        <>
        <EventForm
            getEvents={getEvents} />
        <div className="container-cards">
            {events.map(event => 
            <EventCard
                key={event.id}
                event={event}
                deleteEvent={deleteEvent}
                {...props}
            />
            )}
        </div>
        </>
    );
};

export default EventList;