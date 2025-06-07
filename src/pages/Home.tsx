import { Link } from 'react-router-dom';
import EventCard from '../components/common/EventCard';
import type { Event } from '../types';

const Home: React.FC = () => {
  // Mock data for featured events
  const featuredEvents: Event[] = [
    {
      id: 1,
      title: "Annual Cultural Festival",
      date: "June 15, 2025",
      image: "/images/events/festival.jpg",
      description:
        "Join us for a day of music, dance, and cultural celebrations!",
    },
    {
      id: 2,
      title: "Poetry Night",
      date: "May 28, 2025",
      image: "/images/events/poetry.jpg",
      description: "An evening of soulful poetry and literary discussions.",
    },
  ];

  return (
    <div>
      <section className="bg-[url('/images/banner.jpg')]  bg-no-repeat bg-fixed bg-cover bg-center text-white text-center py-[110px] mb-12 relative mt-[-70px]">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-[800px] mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to Samvaad
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Celebrating diversity through arts, literature, and cultural
            exchange
          </p>
          <Link
            to="/events"
            className="inline-block bg-gray-600 text-white py-2 px-4 rounded font-medium transition-all duration-300 hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-lg"
          >
            Explore Our Events
          </Link>
        </div>
      </section>

      <section className="py-12 bg-gray-200">
        <div className="w-[90%] max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">About Samvaad</h2>
          <p className="mb-6">
            Samvaad is a vibrant cultural club dedicated to promoting cultural
            awareness and artistic expression. We provide a platform for
            talented individuals to showcase their creativity and connect with
            like-minded people.
          </p>
          <Link
            to="/about"
            className="font-medium text-secondary hover:text-primary transition-colors duration-300"
          >
            Learn more about us
          </Link>
        </div>
      </section>

      <section className="py-12">
        <div className="w-[90%] max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            {featuredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          <Link
            to="/events"
            className="inline-block mt-8 font-medium text-secondary hover:text-primary transition-colors duration-300"
          >
            View all events
          </Link>
        </div>
      </section>

      <section className="py-12 bg-secondary-light text-center">
        <div className="w-[90%] max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="mb-6">
            Become a member of Samvaad and be part of our cultural journey.
          </p>
          <Link
            to="/ConnectWith"
            className="inline-block bg-primary text-white py-2 px-4 rounded font-medium transition-all duration-300 hover:bg-primary-dark hover:-translate-y-0.5"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
