import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEvents } from './EventContext.js';
import './EventForm.css';

const EventForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { events, addEvent, editEvent } = useEvents();
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');

    useEffect(() => {
        if (id) {
            const eventToEdit = events.find(event => event.id === id);
            if (eventToEdit) {
                setTitle(eventToEdit.title);
                setDate(eventToEdit.date);
            }
        }
    }, [id, events]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEvent = { id: id || Date.now().toString(), title, date };

        if (id) {
            editEvent(newEvent);
        } else {
            addEvent(newEvent);
        }

        navigate('/');
    };

    return (
        <div className="event-form">
            <h2>{id ? 'Edit Event' : 'Add Event'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Date</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default EventForm;
