import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CalendarView from './components/CalendarView';
import EventForm from './components/EventForm';
import { EventProvider } from './components/EventContext';
import "./App.css"

function App() {
    return (
        <EventProvider>
            <Routes>
                <Route path="/" element={<CalendarView />} />
                <Route path="/event/:id?" element={<EventForm />} />
            </Routes>
        </EventProvider>
    );
}

export default App;
