import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-700 pb-8">
        {/* Club Info */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-3">Samvaad Cultural Club</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Celebrating culture, fostering creativity, and building community through arts and events.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link to="/events" className="hover:text-white transition">Events</Link></li>
            <li><Link to="/gallery" className="hover:text-white transition">Gallery</Link></li>
            <li><Link to="/members" className="hover:text-white transition">Members</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Connect With Us</h4>
          <div className="flex flex-col space-y-2">
            <a href="https://facebook.com/samvaad" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Facebook</a>
            <a href="https://instagram.com/samvaad" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Instagram</a>
            <a href="https://twitter.com/samvaad" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Twitter</a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-6">
        &copy; {currentYear} Samvaad Cultural Club. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
