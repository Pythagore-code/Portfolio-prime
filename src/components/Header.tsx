
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "py-4 bg-background/95 backdrop-blur-sm shadow-sm" : "py-6"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="text-2xl font-bold font-heading hover:text-primary transition-colors">
          READORA
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="nav-link">
            Home
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#portfolio" className="nav-link">
            Portfolio
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </nav>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={`fixed inset-y-0 bg-background/80 backdrop-blur-sm flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
          style={{
            maxWidth: '250px',
            right: 0,
            left: 'auto',
            height: '100vh'
          }}
        >
          <button
            className="absolute top-6 right-4 focus:outline-none"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          <nav className="flex flex-col items-center space-y-8">
            <a
              href="#home"
              className="text-xl font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-xl font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#portfolio"
              className="text-xl font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="text-xl font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
