import React from 'react';
import { Link } from 'react-router-dom';
import { useEvents } from './EventContext.js';
import './CalendarView.css';

const CalendarView = () => {
    const { events, deleteEvent } = useEvents();

    return (
        <div className="calendar-view">
            <div className='cale'> 
            <h1>My Calendar</h1>
            <Link className='ccc' to="/event">Add Event</Link>
            </div>
            <div className="event-list">
                {events.map(event => (
                    <div key={event.id} className="event-item">
                        <h3>{event.title}</h3>
                        <p>{event.date}</p>
                        <Link to={`/event/${event.id}`}>Edit</Link>
                        <button onClick={() => deleteEvent(event.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CalendarView;
