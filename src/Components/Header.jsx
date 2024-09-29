import { useState } from "react";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header className="bg-pink-700 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        
        <div 
          className={`flex items-center transform transition duration-500 ${
            isHovered ? "scale-110" : "scale-100"
          }`} 
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src="https://img.icons8.com/emoji/48/000000/red-apple.png"
            alt="Fruit Gallery Logo"
            className="h-12 w-12 mr-2 transition duration-500 ease-in-out transform hover:rotate-12"
          />
          <span className="text-3xl font-bold tracking-wide">Fruit Gallery</span>
        </div>

        <nav>
          <ul className="flex space-x-8">
            <li>
              <a 
                href="#home" 
                className="hover:text-yellow-300 transition duration-300 ease-in-out transform hover:-translate-y-1"
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#gallery" 
                className="hover:text-yellow-300 transition duration-300 ease-in-out transform hover:-translate-y-1"
              >
                Gallery
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className="hover:text-yellow-300 transition duration-300 ease-in-out transform hover:-translate-y-1"
              >
                About Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
