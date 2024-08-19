import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
//import './EventForm.css';

const EventForm = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate();  // Replace useHistory with useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save event logic here
    navigate('/');  // Use navigate instead of history.push
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
