import React from 'react';
import type { Event } from '../../types';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="flex flex-col h-full bg-white rounded shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-[5px] group">
    <div className="flex flex-col h-full bg-white rounded shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-[5px]">
      <div className="h-[200px] overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110" 
        />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
        <p className="text-gray-500 mb-2">{event.date}</p>
        <p className="mb-6 flex-grow">{event.description}</p>
      </div>
    </div>
</div>



  );
};

export default EventCard;
