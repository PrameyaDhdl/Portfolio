import React, { useRef, useEffect, useState } from "react";

const NavItem = ({ text, href, onClick }) => (
  <li>
    <a
      onClick={onClick}
      className="text-smallTextColor font-[600]"
      href={href}
    >
      {text}
    </a>
  </li>
);

const Navbar = () => {
  const headerRef = useRef(null);
  const [nav, setNav] = useState(false);

  const stickyHeaderFunc = () => {
    if (headerRef.current) {
      window.addEventListener("scroll", () => {
        if (
          document.body.scrollTop > 80 ||
          document.documentElement.scrollTop > 80
        ) {
          headerRef.current.classList.add("sticky_header");
        } else {
          headerRef.current.classList.remove("sticky_header");
        }
      });
    }
  };

  useEffect(() => {
    stickyHeaderFunc();

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", stickyHeaderFunc);
    };
  }, []);

  const handleClick = (e, target) => {
    e.preventDefault();

    const location = document.querySelector(target);

    if (location) {
      location.scrollIntoView({ behavior: "smooth" });
      // Close the menu by setting nav to false
      setNav(false);
    }
  };

  const navItems = [
    { text: "About Me", href: "#about" },
    { text: "Academics", href: "#Academics" },
    { text: "Skills", href: "#Skills" },
    { text: "Portfolio", href: "#portfolio" },
    { text: "Contact", href: "#contact" },
  ];

  return (
    <div
      ref={headerRef}
      className={`w-full h-[80px] sm:h-[60px] ${
        nav ? "sticky_header" : ""
      } leading-[80px] sm:leading-[60px] flex items-center`}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <span className="w-[45px] h-[45px] bg-primaryColor text-black text-[18px] font-[500] rounded-full flex items-center justify-center">
              PD
            </span>
            <div className="leading-[20px]">
              <h2 className="text-xl sm:text-lg text-smallTextColor font-[700]">
                Prameya
              </h2>
              <p className="text-smallTextColor text-[15px] sm:text-[14px] font-[500]">
                Dhaubhadel
              </p>
            </div>
          </div>
          <div className={`menu ${nav ? "block" : "hidden"} md:flex`}>
            <ul className="md:flex items-center gap-10 hidden">
              {navItems.map((item, index) => (
                <NavItem
                  key={index}
                  text={item.text}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                />
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://wa.me/9840397987">
              <button className="flex items-center gap-2 text-smallTextColour font-[600] border border-solid border-smallTextColor py-1 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300">
                <i className="ri-send-plane-line"></i> Let's Talk
              </button>
            </a>
            <span
              onClick={() => setNav(!nav)}
              className="text-2xl text-smallTextColor md:hidden cursor-pointer"
            >
              {nav ? (
                <i className="ri-close-line"></i>
              ) : (
                <i className="ri-menu-fill"></i>
              )}
            </span>
            {nav && (
              <ul
                className="flex flex-col justify-center items-center absolute top-[80px] left-0 w-full h-screen bg-white"
                // Set the top position to the height of the navigation bar (80px)
              >
                {navItems.map((item, index) => (
                  <NavItem
                    key={index}
                    text={item.text}
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
