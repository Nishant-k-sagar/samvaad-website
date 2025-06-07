import { useState } from 'react';
import EventCard from '../components/common/EventCard';

import type { Event } from '../types';

type CategoryFilter = 'all' | 'festival' | 'literature' | 'workshop' | 'exhibition';

const Events: React.FC = () => {
  const [filter, setFilter] = useState<CategoryFilter>('all');
  const [hoveredButton, setHoveredButton] = useState<CategoryFilter | null>(null);
  
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
  
  const getButtonClass = (buttonType: CategoryFilter) => {
    if (filter === buttonType) {
      return 'bg-gray-200 text-black shadow-md';
    } else if (hoveredButton === buttonType) {
      return 'bg-gray-200 border border-gray-300 shadow-sm';
    } else {
      return 'bg-transparent border border-gray-300 hover:bg-gray-100';
    }
  };

  return (
    <div>
      <section className="bg-gray-200 py-16 mb-12 text-center mt-[-70px] flex justify-center items-center h-70">
        <div className="w-[90%] max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2 text-gray-900">Events</h1>
          <p className="text-lg">Discover our upcoming and past cultural events</p>
        </div>
      </section>
      
      <section className="py-12">
        <div className="w-[90%] max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            <button 
              className={`py-2 px-4 rounded font-medium transition-all duration-300 ${getButtonClass('all')}`}
              onClick={() => setFilter('all')}
              onMouseEnter={() => setHoveredButton('all')}
              onMouseLeave={() => setHoveredButton(null)}
            >
              All Events
            </button>
            <button 
              className={`py-2 px-4 rounded font-medium transition-all duration-300 ${getButtonClass('festival')}`}
              onClick={() => setFilter('festival')}
              onMouseEnter={() => setHoveredButton('festival')}
              onMouseLeave={() => setHoveredButton(null)}
            >
              Festivals
            </button>
            <button 
              className={`py-2 px-4 rounded font-medium transition-all duration-300 ${getButtonClass('workshop')}`}
              onClick={() => setFilter('workshop')}
              onMouseEnter={() => setHoveredButton('workshop')}
              onMouseLeave={() => setHoveredButton(null)}
            >
              Workshops
            </button>
            <button 
              className={`py-2 px-4 rounded font-medium transition-all duration-300 ${getButtonClass('literature')}`}
              onClick={() => setFilter('literature')}
              onMouseEnter={() => setHoveredButton('literature')}
              onMouseLeave={() => setHoveredButton(null)}
            >
              Literary Events
            </button>
            <button 
              className={`py-2 px-4 rounded font-medium transition-all duration-300 ${getButtonClass('exhibition')}`}
              onClick={() => setFilter('exhibition')}
              onMouseEnter={() => setHoveredButton('exhibition')}
              onMouseLeave={() => setHoveredButton(null)}
            >
              Exhibitions
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            {filteredEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          
          {filteredEvents.length === 0 && (
            <p className="text-gray-500 text-center py-8">No events found in this category.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Events;
