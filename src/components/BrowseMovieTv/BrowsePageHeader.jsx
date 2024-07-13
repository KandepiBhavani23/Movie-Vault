import { Link } from "react-router-dom";

const browseNavLinks = [
  {
    id: 1,
    name: "Main Page",
    path: "/",
  },
  {
    id: 2,
    name: "Home",
    path: "/browse-movie-tv",
  },
  {
    id: 3,
    name: "Movies",
    path: "/browse-movie-tv/movies",
  },
  {
    id: 4,
    name: "TV Series",
    path: "/browse-movie-tv/tvseries",
  },
  {
    id: 5,
    name: "Search",
    path: "/browse-movie-tv/search",
  },
];

import websiteLogo from "/assets/movie-logo.png";
import { useState, useEffect } from "react";
const BrowsePageHeader = () => {
  const [scrollNavbar, setScrollNavbar] = useState(false);

  const changeBackground = () => {
    setScrollNavbar(window.scrollY >= 400);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <nav
      className={`fixed text-white z-[3] w-full flex items-center justify-between px-5 lg:px-10 py-4 bg-opacity-80 ${
        scrollNavbar ? "bg-purple-800" : "bg-gray-900"
      }`}>
      <img src={websiteLogo} alt="logo" className="w-36 md:w-44 xl:w-52" />
      <ul className="hidden font-serif text-base font-semibold lg:text-lg gap-x-5 md:flex md:items-center">
        {browseNavLinks?.map((link) => (
          <li key={link.id}>
            <Link to={link?.path}>{link?.name}</Link>
          </li>
        ))}
        <li className="px-2 py-2 bg-red-700 rounded-xl">Sign In</li>
      </ul>
    </nav>
  );
};
export default BrowsePageHeader;
