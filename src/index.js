import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import EventForm from './components/EventForm';
import './index.css';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/event/:id?" element={<EventForm />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
