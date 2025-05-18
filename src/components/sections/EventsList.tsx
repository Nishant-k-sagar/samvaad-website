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
    <section className="py-12">
      <div className="w-[90%] max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">{title}</h2>
          {showViewAll && (
            <a href="/events" className="inline-block font-medium text-secondary hover:text-primary transition-colors duration-300">
              View All
            </a>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {events.length > 0 ? (
            events.map(event => (
              <EventCard key={event.id} event={event} />
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-full py-8">No events to display.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default EventsList;
