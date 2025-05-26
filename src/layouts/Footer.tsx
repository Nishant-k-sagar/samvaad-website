import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-4">
      <div className="w-full max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-opacity-10 border-white pb-6">
          {/* Club Info */}
          <div className="footer-section text-center md:text-left">
            <h3 className="text-lg font-bold text-white mb-2">Samvaad</h3>
            <p className="text-xs leading-relaxed max-w-xs mx-auto md:mx-0">
              Celebrating culture, fostering creativity, and building community through arts and events.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section flex flex-col items-center md:items-start mx-auto">
            <h3 className="text-base font-bold text-white mb-2">Quick Links</h3>
            <ul className="grid grid-cols-1 gap-y-1 text-sm sm:grid-cols-2 sm:gap-x-10">
              <li><Link to="/" className="hover:text-primary transition-colors duration-300">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors duration-300">About Us</Link></li>
              <li><Link to="/events" className="hover:text-primary transition-colors duration-300">Events</Link></li>
              <li><Link to="/gallery" className="hover:text-primary transition-colors duration-300">Gallery</Link></li>
              <li><Link to="/members" className="hover:text-primary transition-colors duration-300">Members</Link></li>
              <li><Link to="/ConnectWith" className="hover:text-primary transition-colors duration-300">ConnectWith</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="footer-section flex flex-col items-center md:items-end">
            <h3 className="text-base font-bold text-white mb-2">Connect With Us</h3>
            <div className="flex gap-4 mb-2">
              <a 
                href="https://facebook.com/samvaad" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-gray-700 hover:bg-primary flex items-center justify-center transition-colors duration-300 text-xl"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a 
                href="https://instagram.com/samvaad" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-gray-700 hover:bg-primary flex items-center justify-center transition-colors duration-300 text-xl"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://twitter.com/samvaad" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-gray-700 hover:bg-primary flex items-center justify-center transition-colors duration-300 text-xl"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
            </div>
            <div className="text-xs mt-1">
              <a href="mailto:info@samvaad.org" className="hover:text-primary transition-colors duration-300">info@samvaad.org</a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4 pt-2 text-xs text-gray-400">
          &copy; {currentYear} Samvaad - The literary and quizzing society of IIITDM Jabalpur. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
