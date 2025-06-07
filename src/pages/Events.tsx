import { useState } from 'react';
import EventCard from '../components/common/EventCard';

import type { Event } from '../types';

type CategoryFilter = 'all' | 'festival' | 'literature' | 'workshop' | 'exhibition';

const Events: React.FC = () => {
  const [filter, setFilter] = useState<CategoryFilter>('all');
  
  // Mock data for events
  const allEvents: Event[] = [
    {
      id: 1,
      title: 'Annual Cultural Festival',
      date: 'June 15, 2025',
      category: 'festival',
      image: '/images/events/festival.jpg',
      description: 'Join us for a day of music, dance, and cultural celebrations!'
    },
    {
      id: 2,
      title: 'Poetry Night',
      date: 'May 28, 2025',
      category: 'literature',
      image: '/images/events/poetry.jpg',
      description: 'An evening of soulful poetry and literary discussions.'
    },
    {
      id: 3,
      title: 'Classical Dance Workshop',
      date: 'July 10, 2025',
      category: 'workshop',
      image: '/images/events/dance.jpg',
      description: 'Learn the basics of classical dance forms from expert dancers.'
    },
    {
      id: 4,
      title: 'Art Exhibition',
      date: 'August 5-10, 2025',
      category: 'exhibition',
      image: '/images/events/art.jpg',
      description: 'Showcasing works from talented local artists.'
    }
  ];
  
  const filteredEvents = filter === 'all' 
    ? allEvents 
    : allEvents.filter(event => event.category === filter);
  
  return (
    <div className="events-page">
      <section className="page-header">
        <div className="container">
          <h1>Events</h1>
          <p>Discover our upcoming and past cultural events</p>
        </div>
      </section>
      
      <section className="events-content">
        <div className="container">
          <div className="events-filter">
            <button 
              className={filter === 'all' ? 'active' : ''} 
              onClick={() => setFilter('all')}
            >
              All Events
            </button>
            <button 
              className={filter === 'festival' ? 'active' : ''} 
              onClick={() => setFilter('festival')}
            >
              Festivals
            </button>
            <button 
              className={filter === 'workshop' ? 'active' : ''} 
              onClick={() => setFilter('workshop')}
            >
              Workshops
            </button>
            <button 
              className={filter === 'literature' ? 'active' : ''} 
              onClick={() => setFilter('literature')}
            >
              Literary Events
            </button>
            <button 
              className={filter === 'exhibition' ? 'active' : ''} 
              onClick={() => setFilter('exhibition')}
            >
              Exhibitions
            </button>
          </div>
          
          <div className="events-grid">
            {filteredEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          
          {filteredEvents.length === 0 && (
            <p className="no-events">No events found in this category.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Events;
