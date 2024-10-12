import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu
  const location = useLocation(); // Get current route path

  // Function to determine if a link is active
  const isActive = (path: string) => {
    // Check if the current path starts with the provided path
    return location.pathname.startsWith(path);
  };

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle resume download
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/baleeghuddin-resume.pdf'; // Path to the resume PDF
    link.download = 'baleeghuddin-resume.pdf'; // File name to download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex h-[8%] max-h-[8%] w-[99%] md:w-[95%] self-center whitespace-normal bg-white bg-opacity-10 backdrop-blur-lg shadow-lg border-white/30 border-2 rounded-lg items-center gap-5 px-3 md:px-5 text-stone-500 font-bold justify-between relative z-20 py-2">
      
      {/* Mobile Hamburger Menu (Hidden when isOpen is true) */}
      {!isOpen && (
        <div className="md:hidden">
          <RxHamburgerMenu size={24} className="text-zinc-500 cursor-pointer" onClick={toggleMenu} />
        </div>
      )}

      {/* Mobile Brand (Hidden when isOpen is true) */}
      {!isOpen && (
        <div className="text-xs md:hidden">SHAIK BALEEGHUDDIN KASHIF</div>
      )}

      {/* Desktop Brand */}
      <Link to="/">
        <div className="hidden md:block text-lg font-semibold">SBK</div>
      </Link>

      {/* Desktop Links */}
      <div className={`hidden md:flex gap-3`}>
        {['About', 'Education', 'Experience', 'Projects', 'Publications', 'Skills', 'Contact'].map((item, index) => {
          const path = `/${item.toLowerCase()}`;
          return (
            <Link key={index} to={path}>
              <div
                className={`py-1 px-2 rounded-lg transition-all duration-200 
                  ${isActive(path) ? 'bg-white bg-opacity-10 backdrop-blur-lg shadow-lg border-white/30 border-2' : 'bg-transparent border-2 border-transparent hover:bg-white hover:bg-opacity-10 hover:backdrop-blur-lg hover:shadow-lg hover:border-white/30'}
                `}
              >
                {item}
              </div>
            </Link>
          );
        })}
      </div>

      {/* Resume Button for Desktop */}
      <div className="hidden md:block px-3 py-1 bg-white bg-opacity-10 backdrop-blur-lg shadow-lg border-white/30 border-2 rounded-lg hover:bg-rose-500 hover:text-white cursor-pointer" onClick={handleDownload}>
        Download Resume
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-[8%] left-0 w-full bg-white bg-opacity-10 backdrop-blur-lg border-white/30 border-2 rounded-lg shadow-lg md:hidden z-30">
          {/* Home route (SBK) */}
          <Link to="/" onClick={toggleMenu}>
            <div
              className={`py-2 px-4 rounded-lg transition-all duration-200 
                ${isActive('/') ? 'bg-white bg-opacity-10 backdrop-blur-lg shadow-lg border-white/30 border-2' : 'bg-transparent border-2 border-transparent hover:bg-white hover:bg-opacity-10 hover:backdrop-blur-lg hover:shadow-lg hover:border-white/30'}
              `}
            >
              SBK
            </div>
          </Link>
          
          {/* Other Navigation Links */}
          {['About', 'Education', 'Experience', 'Projects', 'Publications', 'Skills', 'Contact'].map((item, index) => {
            const path = `/${item.toLowerCase()}`;
            return (
              <Link key={index} to={path} onClick={toggleMenu}>
                <div
                  className={`py-2 px-4 rounded-lg transition-all duration-200 
                    ${isActive(path) ? 'bg-white bg-opacity-10 backdrop-blur-lg shadow-lg border-white/30 border-2' : 'bg-transparent border-2 border-transparent hover:bg-white hover:bg-opacity-10 hover:backdrop-blur-lg hover:shadow-lg hover:border-white/30'}
                  `}
                >
                  {item}
                </div>
              </Link>
            );
          })}

          {/* Download Resume Button in Mobile Dropdown */}
          <div className="py-2 px-4 rounded-lg transition-all duration-200 bg-white bg-opacity-10 backdrop-blur-lg shadow-lg border-white/30 border-2 hover:bg-zinc-500 hover:text-white cursor-pointer" onClick={handleDownload}>
            Download Resume
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
