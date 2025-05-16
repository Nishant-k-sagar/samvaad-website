import React from 'react';
import type { Event } from '../../types';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="event-card">
      <img src={event.image} alt={event.title} className="event-image" />
      <div className="event-details">
        <h3>{event.title}</h3>
        <p>{event.date}</p>
        <p>{event.description}</p>
      </div>
    </div>
  );
};

export default EventCard;