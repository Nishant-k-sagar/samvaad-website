import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import logo from "../assets/images/logo.png";

interface HeaderProps {
  toggleSidebar: () => void;
}

interface NavLink {
  name: string;
  path: string;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeHover, setActiveHover] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();
  // NEW: state for mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  const navLinks: NavLink[] = [
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" },
    { name: "Events", path: "/events" },
    { name: "Members", path: "/members" },
    { name: "About", path: "/about" },
    { name: "ConnectWith", path: "/ConnectWith" },
  ];

  const handleMouseEnter = (path: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setActiveHover(path);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveHover(null);
    }, 50);
  };

  const handleClick = (path: string) => {
    setActiveHover(path);
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveHover(null);
    }, 500);
  };

  return (
    <header
      className={`bg-white sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="w-[90%] max-w-7xl mx-auto flex justify-between items-center py-4 px-4 relative">
        <div className="flex items-center">
          <Link
            to="/"
            className="flex items-center group"
            onMouseEnter={() => handleMouseEnter("/")}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick("/")}
          >
            <img
              src={logo}
              alt="Samvaad Logo"
              className="h-10 mr-2 transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-xl font-bold text-primary transition-colors duration-300 group-hover:text-gray-900">
              Samvaad
            </span>
          </Link>
        </div>

        {/* UPDATED: Button toggles mobile menu */}
        <button
          className="text-3xl rounded-md p-1 md:hidden hover:bg-gray-700 hover:text-white active:bg-gray-800 transition-colors duration-300"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>

        {/* Desktop nav (unchanged) */}
        <nav className="hidden md:block">
          <ul className="flex gap-10 text-base font-medium">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              const isHovered = activeHover === link.path;

              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`
                      relative py-2 px-2 font-semibold transition-all duration-300 rounded
                      ${isActive
                        ? " bg-gray-600 text-white py-2 px-4 rounded font-medium transition-all duration-300 hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-lg"
                        : "text-gray-800 hover:text-gray-900"}
                    `}
                    onMouseEnter={() => handleMouseEnter(link.path)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick(link.path)}
                  >
                    <span
                      className={`relative z-10 ${
                        isHovered && !isActive
                          ? "transform scale-105 transition-transform duration-300 font-semibold"
                          : ""
                      }`}
                    >
                      {link.name}
                    </span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform transition-transform duration-300"></span>
                    )}
                    {isHovered && (
                      <span className="absolute inset-0 bg-gray-200 rounded-md -z-10 transition-all duration-300"></span>
                    )}
                    {isHovered && !isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-700 opacity-80 transform scale-x-75 transition-all duration-300"></span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {mobileMenuOpen && (
          <nav className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full z-30">
            <ul className="flex flex-col gap-2 p-4">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={`
                        block py-2 px-4 rounded transition-all duration-200
                        ${isActive
                          ? "bg-gray-600 text-white font-semibold text-center mx-auto"
                          : "text-gray-800 hover:bg-gray-100 text-center mx-auto"}
                      `}
                      onClick={() => {
                        setMobileMenuOpen(false); // close menu on link click
                        handleClick(link.path);
                      }}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
