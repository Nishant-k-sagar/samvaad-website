import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../assets/images/logo.png';

interface HeaderProps {
  toggleSidebar: () => void;
}

interface NavLink {
  name: string;
  path: string;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Members', path: '/members' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="Samvaad Logo" className="logo" />
            <span className="site-title">Samvaad</span>
          </Link>
        </div>
        
        <button className="mobile-menu-btn" onClick={toggleSidebar}>
          <span className="menu-icon"></span>
        </button>
        
        <nav className="desktop-nav">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  to={link.path} 
                  className={location.pathname === link.path ? 'active' : ''}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
