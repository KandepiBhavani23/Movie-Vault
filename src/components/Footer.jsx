import { Link } from "react-router-dom";

const footerLinks = [
  {
    heading: "Navigation",
    links: [
      { id: 1, text: "Home", url: "/home" },
      { id: 2, text: "Browse", url: "/browse" },
      { id: 3, text: "Search", url: "/search" },
      { id: 4, text: "My Account", url: "/my-account" },
      { id: 5, text: "Watchlist", url: "/watchlist" },
      { id: 6, text: "Settings", url: "/settings" },
    ],
  },
  {
    heading: "Information",
    links: [
      { id: 7, text: "Help Center", url: "/help-center" },
      { id: 8, text: "Terms of Service", url: "/terms-of-service" },
      { id: 9, text: "Privacy Policy", url: "/privacy-policy" },
      { id: 10, text: "Cookie Policy", url: "/cookie-policy" },
      { id: 11, text: "About Us", url: "/about-us" },
      { id: 12, text: "Contact Us", url: "/contact-us" },
    ],
  },
  {
    heading: "Career and Policies",
    links: [
      { id: 13, text: "Careers", url: "/careers" },
      { id: 14, text: "Advertise", url: "/advertise" },
      { id: 15, text: "Accessibility", url: "/accessibility" },
      { id: 16, text: "Parental Controls", url: "/parental-controls" },
      { id: 17, text: "Content Guidelines", url: "/content-guidelines" },
      { id: 18, text: "Copyright Information", url: "/copyright-information" },
    ],
  },
  {
    heading: "Support and Rewards",
    links: [
      { id: 19, text: "FAQ", url: "/faq" },
      { id: 20, text: "Feedback", url: "/feedback" },
      { id: 21, text: "Support", url: "/support" },
      { id: 22, text: "Blog", url: "/blog" },
      { id: 23, text: "Premium", url: "/premium" },
      { id: 24, text: "Rewards", url: "/rewards" },
    ],
  },
  {
    heading: "Community and Relations",
    links: [
      { id: 25, text: "Community", url: "/community" },
      { id: 26, text: "Testimonials", url: "/testimonials" },
      { id: 27, text: "Events", url: "/events" },
      { id: 28, text: "Partnerships", url: "/partnerships" },
      { id: 29, text: "Investors", url: "/investors" },
      { id: 30, text: "Press", url: "/press" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="relative z-[2] text-white bottom-0 w-full">
      <div className="px-4 bg-gray-900 opacity-80 md:flex md:justify-between md:items-center sm:px-12 py-7">
        <h1 className="mb-6 text-3xl font-semibold lg:text-4xl md:mb-0 lg:leading-normal md:w-2/5">
          <span
            className="text-teal-400 animate-blink"
            style={{
              textShadow:
                "0 0 5px rgba(0, 255, 255, 0.8), 0 0 10px rgba(0, 255, 255, 0.8)",
            }}>
            Free
          </span>{" "}
          Until Launch Day
        </h1>
        <div>
          <input
            type="text"
            placeholder="Enter Your ph.no"
            className="text-gray-800
           sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button
            className="bg-teal-600 hover:bg-teal-800 duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-white font-bold text-xl md:w-auto w-full">
            Request Code
          </button>
        </div>
      </div>
      <div className="grid items-center justify-center grid-cols-3 px-6 py-3 space-y-3 md:py-6 md:px-10 xl:px-20 md:grid-cols-4 xl:grid-cols-5">
        {footerLinks.map((footerLink) => (
          <div className="flex flex-col" key={footerLink.heading}>
            <h1 className="text-base font-semibold text-yellow-400 md:text-lg lg:text-xl text-wrap">
              {footerLink.heading}
            </h1>
            {footerLink.links.map((link) => (
              <Link
                to={link.url}
                key={link.id}
                className=" hover:text-teal-500 duration-300 py-[2px] font-[Poppins]
                 rounded-md text-white md:w-auto w-full text-base">
                {link.text}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};
export default Footer;
