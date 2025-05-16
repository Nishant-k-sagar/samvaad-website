import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
}

interface NavLink {
  name: string;
  path: string;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const location = useLocation();
  
  const navLinks: NavLink[] = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Members', path: '/members' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <nav className="sidebar-nav">
        <ul>
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
      
      <div className="sidebar-footer">
        <div className="social-links">
          <a href="https://facebook.com/samvaad" target="_blank" rel="noopener noreferrer">FB</a>
          <a href="https://instagram.com/samvaad" target="_blank" rel="noopener noreferrer">IG</a>
          <a href="https://twitter.com/samvaad" target="_blank" rel="noopener noreferrer">TW</a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
