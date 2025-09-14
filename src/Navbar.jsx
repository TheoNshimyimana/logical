import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoNav from "./assets/logo.png";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);
  const menuRef = useRef();
  const location = useLocation();

  // Toggle Mobile Menu
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  // Shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when changing page
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={`px-4 sm:px-6 md:px-10 flex items-center justify-between h-20 sticky top-0 z-50 transition-shadow duration-300 bg-gray-900 ${
        hasShadow ? "shadow-md" : ""
      }`}
    >
      {/* Logo & Title */}
      <div className="flex items-center space-x-2">
        {/* Logo disappears on small screens */}
        <img
          src={LogoNav}
          alt="Company Logo"
          className="hidden sm:block h-12 w-12 sm:h-16 md:h-20 object-contain"
        />
        <span className="font-bold text-lg sm:text-xl md:text-2xl text-white">
          Logical Manufacturing Solution Ltd
        </span>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8 lg:gap-12 mr-6">
        <div className="flex items-center text-base lg:text-lg font-semibold gap-6 cursor-pointer">
          {[
            { path: "/", label: "Home" },
            { path: "/about_us", label: "About" },
            { path: "/services", label: "Services" },
            { path: "/contact_us", label: "Contact" },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${
                location.pathname === item.path
                  ? "text-yellow-200 font-bold"
                  : "text-white"
              } hover:text-yellow-200 transition-colors duration-200`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <a
          href="tel:+250785714552"
          className="text-white px-4 py-2 bg-blue-500 font-bold rounded-md hover:bg-blue-600 text-sm lg:text-base"
        >
          0785714552
        </a>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-3xl text-white focus:outline-none"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? "✖" : "☰"}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={menuRef}
          className="fixed top-0 right-0 bg-gray-800 w-1/2 sm:w-1/2 h-1/2 z-40 shadow-lg md:hidden flex flex-col items-center p-6"
        >
          <ul className="flex flex-col items-center gap-8 mt-12 text-lg font-semibold">
            {[
              { path: "/", label: "Home" },
              { path: "/about_us", label: "About Us" },
              { path: "/services", label: "Services" },
              { path: "/contact_us", label: "Contact Us" },
            ].map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`${
                    location.pathname === item.path
                      ? "text-yellow-200 font-bold"
                      : "text-white"
                  } hover:text-yellow-200 transition-colors duration-200`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <a
            href="tel:+250785714552"
            className="mt-10 text-white px-6 py-3 bg-blue-500 font-bold rounded-md hover:bg-blue-600 w-full text-center"
          >
            Call: 0785714552
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
