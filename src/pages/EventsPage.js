import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import './EventsPage.css';

// EventsPage component for managing events
const EventsPage = () => {
  const [events, setEvents] = useState(() => {
    const savedEvents = localStorage.getItem('events');
    return savedEvents ? JSON.parse(savedEvents) : [
      { id: 1, title: 'Event 1', date: '2023-10-01', location: 'Location 1', description: 'Description 1', category: 'Religious' },
      { id: 2, title: 'Event 2', date: '2023-10-02', location: 'Location 2', description: 'Description 2', category: 'Social' },
    ];
  });
  const [filter, setFilter] = useState('');
  const [newEvent, setNewEvent] = useState({ title: '', date: '', location: '', description: '', category: '' });
  const [errors, setErrors] = useState({});
  const [categories, setCategories] = useState([]);

  // Update local storage and categories when events change
  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
    updateCategories(events);
  }, [events]);

  // Update categories based on events
  const updateCategories = (events) => {
    const uniqueCategories = [...new Set(events.map(event => event.category))];
    setCategories(uniqueCategories);
  };

  // Handle filter change
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  // Handle input change for new event form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  // Handle adding a new event
  const handleAddEvent = () => {
    const newErrors = {};
    if (!newEvent.title) newErrors.title = 'Title is required';
    if (!newEvent.date) newErrors.date = 'Date is required';
    if (!newEvent.location) newErrors.location = 'Location is required';
    if (!newEvent.description) newErrors.description = 'Description is required';
    if (!newEvent.category) newErrors.category = 'Category is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const addedEvent = { id: events.length + 1, ...newEvent };
    setEvents([...events, addedEvent]);
    setNewEvent({ title: '', date: '', location: '', description: '', category: '' });
    setErrors({});
  };

  // Handle deleting an event
  const handleDeleteEvent = (id) => {
    const updatedEvents = events.filter(event => event.id !== id);
    setEvents(updatedEvents);
  };

  // Filter events based on selected category
  const filteredEvents = events.filter(event =>
    filter === '' || event.category.toLowerCase() === filter.toLowerCase()
  );

  return (
    <div>
      <Header />
      <div className="events-page">
        <h2>Events</h2>
        <select value={filter} onChange={handleFilterChange}>
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        <ul className="events-list">
          {filteredEvents.map(event => (
            <li key={event.id} className="event-item">
              <h3>{event.title}</h3>
              <p>Date: {event.date}</p>
              <p>Location: {event.location}</p>
              <p>Description: {event.description}</p>
              <p>Category: {event.category}</p>
              <button onClick={() => handleDeleteEvent(event.id)}>Delete Event</button>
            </li>
          ))}
        </ul>
        <h3 className="add-event-header">Add New Event</h3>
        <div className="add-event-form">
          <input
            type="text"
            name="title"
            placeholder="Event Title"
            value={newEvent.title}
            onChange={handleInputChange}
          />
          {errors.title && <p className="error">{errors.title}</p>}
          <label htmlFor="date">Event Date</label>
          <input
            type="date"
            name="date"
            id="date"
            value={newEvent.date}
            onChange={handleInputChange}
          />
          {errors.date && <p className="error">{errors.date}</p>}
          <input
            type="text"
            name="location"
            placeholder="Event Location"
            value={newEvent.location}
            onChange={handleInputChange}
          />
          {errors.location && <p className="error">{errors.location}</p>}
          <input
            type="text"
            name="description"
            placeholder="Event Description"
            value={newEvent.description}
            onChange={handleInputChange}
          />
          {errors.description && <p className="error">{errors.description}</p>}
          <input
            type="text"
            name="category"
            placeholder="Event Category"
            value={newEvent.category}
            onChange={handleInputChange}
          />
          {errors.category && <p className="error">{errors.category}</p>}
          <button onClick={handleAddEvent}>Add Event</button>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
