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
    { name: 'ConnectWith', path: '/ConnectWith' }
  ];

  return (
    <aside className={`w-[250px] bg-gray-100 p-6 fixed top-0 left-0 h-full z-40 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <nav>
        <ul className="mt-[50px]">
          {navLinks.map((link) => (
            <li key={link.path} className="mb-4">
              <Link 
                to={link.path} 
                className={`block p-2 rounded transition-colors duration-300 hover:bg-black/5 ${
                  location.pathname === link.path ? 'bg-black/5' : ''
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="absolute bottom-6 w-[calc(100%-40px)]">
        <div className="flex gap-4">
          <a href="https://facebook.com/samvaad" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300">FB</a>
          <a href="https://instagram.com/samvaad" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300">IG</a>
          <a href="https://twitter.com/samvaad" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300">TW</a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
