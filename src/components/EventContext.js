import React, { createContext, useState, useContext } from 'react';

const EventContext = createContext();

export const useEvents = () => {
    return useContext(EventContext);
};

export const EventProvider = ({ children }) => {
    const [events, setEvents] = useState([]);

    const addEvent = (event) => {
        setEvents([...events, event]);
    };

    const editEvent = (updatedEvent) => {
        setEvents(events.map(event => (event.id === updatedEvent.id ? updatedEvent : event)));
    };

    const deleteEvent = (id) => {
        setEvents(events.filter(event => event.id !== id));
    };

    return (
        <EventContext.Provider value={{ events, addEvent, editEvent, deleteEvent }}>
            {children}
        </EventContext.Provider>
    );
};
