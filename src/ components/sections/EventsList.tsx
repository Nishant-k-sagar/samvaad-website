import React from 'react';
import EventCard from '../common/EventCard';
import type { Event } from '../../types';

interface EventsListProps {
  events: Event[];
  title?: string;
  showViewAll?: boolean;
}

const EventsList: React.FC<EventsListProps> = ({ 
  events, 
  title = 'Upcoming Events', 
  showViewAll = false 
}) => {
  return (
    <section className="events-list-section">
      <div className="container">
        <div className="section-header">
          <h2>{title}</h2>
          {showViewAll && (
            <a href="/events" className="view-all-link">View All</a>
          )}
        </div>
        
        <div className="events-grid">
          {events.length > 0 ? (
            events.map(event => (
              <EventCard key={event.id} event={event} />
            ))
          ) : (
            <p className="no-events">No events to display.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default EventsList;
