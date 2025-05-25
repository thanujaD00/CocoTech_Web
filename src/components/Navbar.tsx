import { useState, useEffect } from "react";

interface NavbarProps {
  scrollToSection?: (sectionId: string) => void;
}

const Navbar = ({ scrollToSection }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", section: "home" },
    { name: "Project Scope", section: "projectScope" },
    { name: "Mobile App", section: "mobileApp" },
    { name: "Milestones", section: "milestones" },
    { name: "Downloads", section: "downloads" },
    { name: "About Us", section: "aboutUs" },
  ];

  // Handle scroll effect for navbar styling and section highlighting
  useEffect(() => {
    const handleScroll = () => {
      // Change navbar background on scroll
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine which section is in view
      const sectionIds = navLinks.map((link) => link.section);
      const scrollPosition = window.scrollY + 200; // Add offset for navbar height

      // Check each section's position
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  const handleScrollToSection = (sectionId: string) => {
    if (scrollToSection) {
      scrollToSection(sectionId);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setActiveSection(sectionId);
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => handleScrollToSection("home")}
        >
          <img
            src="../../public/assests/logos/app_logo.jpg"
            alt="CocoTech Logo"
            className="w-10 h-10 rounded-full"
            onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src =
                "https://via.placeholder.com/40x40/2e7d32/ffffff?text=CT";
            }}
          />
          <span
            className={`text-xl font-bold ${
              scrolled ? "text-green-700" : "text-white"
            }`}
          >
            CocoTech
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleScrollToSection(link.section)}
              className={`font-medium transition-colors duration-300 hover:text-green-700 relative ${
                activeSection === link.section
                  ? "text-green-700"
                  : scrolled
                  ? "text-gray-700"
                  : "text-white"
              }`}
            >
              {link.name}
              {/* Active indicator */}
              {activeSection === link.section && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-700 rounded-full"></div>
              )}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`p-2 md:hidden ${
            scrolled ? "text-green-700" : "text-white"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleScrollToSection(link.section)}
                className={`block w-full text-left font-medium transition-colors duration-300 hover:text-green-700 py-2 ${
                  activeSection === link.section
                    ? "text-green-700 border-l-4 border-green-700 pl-4"
                    : "text-gray-700"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
