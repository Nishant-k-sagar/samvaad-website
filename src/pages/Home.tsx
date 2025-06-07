import { Link } from 'react-router-dom';
import EventCard from '../components/common/EventCard';
import type { Event } from '../types';

const Home: React.FC = () => {
  // Mock data for featured events
  const featuredEvents: Event[] = [
    {
      id: 1,
      title: 'Annual Cultural Festival',
      date: 'June 15, 2025',
      image: '/images/events/festival.jpg',
      description: 'Join us for a day of music, dance, and cultural celebrations!'
    },
    {
      id: 2,
      title: 'Poetry Night',
      date: 'May 28, 2025',
      image: '/images/events/poetry.jpg',
      description: 'An evening of soulful poetry and literary discussions.'
    }
  ];

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Samvaad Cultural Club</h1>
          <p>Celebrating diversity through arts, literature, and cultural exchange</p>
          <Link to="/events" className="cta-button">Explore Our Events</Link>
        </div>
      </section>
      
      <section className="about-preview">
        <div className="container">
          <h2>About Samvaad</h2>
          <p>Samvaad is a vibrant cultural club dedicated to promoting cultural awareness and artistic expression. We provide a platform for talented individuals to showcase their creativity and connect with like-minded people.</p>
          <Link to="/about" className="text-link">Learn more about us</Link>
        </div>
      </section>
      
      <section className="featured-events">
        <div className="container">
          <h2>Upcoming Events</h2>
          <div className="events-grid">
            {featuredEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          <Link to="/events" className="view-all-link">View all events</Link>
        </div>
      </section>
      
      <section className="join-section">
        <div className="container">
          <h2>Join Our Community</h2>
          <p>Become a member of Samvaad and be part of our cultural journey.</p>
          <Link to="/contact" className="cta-button">Get in Touch</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
