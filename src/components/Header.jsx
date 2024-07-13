import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

import websiteLogo from "/assets/movie-logo.png";
import { useState, useEffect } from "react";
const Header = () => {
  const [scrollNavbar, setScrollNavbar] = useState(false);

  const changeBackground = () => {
    setScrollNavbar(window.scrollY >= 10);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <nav
      className={`relative text-white mx-auto z-[2] flex items-center justify-between px-5 lg:px-10 py-4 bg-opacity-80 ${
        scrollNavbar ? "bg-purple-800" : "bg-gray-900"
      }`}>
      <LazyLoadImage
        src={websiteLogo}
        alt="logo"
        className="w-36 md:w-44 xl:w-52"
      />
      <ul className="hidden font-serif text-base font-semibold lg:text-lg gap-x-5 md:flex md:items-center">
        <li>Home</li>
        <li>
          <Link to="/browse-movie-tv">Movies</Link>
        </li>
        <li className="px-2 py-2 bg-red-700 rounded-xl">Sign In</li>
      </ul>
    </nav>
  );
};
export default Header;
