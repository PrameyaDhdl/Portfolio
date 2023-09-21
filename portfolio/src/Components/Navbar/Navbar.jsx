import React, { useRef, useEffect } from "react";

const Navbar = () => {
  const headerRef = useRef(null);

  const stickyHeaderFunc = () => {
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
  };

  useEffect(() => {
    stickyHeaderFunc();

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", stickyHeaderFunc);
    };
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    const targetAttr = e.target.getAttribute("href");
    const location = document.querySelector(targetAttr);

    if (location) {
      // Use `scrollIntoView` for smooth scrolling
      location.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      ref={headerRef}
      className="w-full h-[80px] sm:h-[60px] leading-[80px] sm:leading-[60px] flex items-center"
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/*=========== logo=========*/}
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
          {/*=========== logo end =========*/}
          <div className="menu">
            <ul className="flex items-center gap-10">
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600]"
                  href="#about"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600]"
                  href="#Academics"
                >
                  Academics
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600]"
                  href="#Skills"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600]"
                  href="#portfolio"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600]"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/*========================================*/}
          <div className="flex items-center gap-4">
            <a href="https://wa.me/9840397987">
              <button className="flex items-center gap-2 text-smallTextColour font-[600] border border-solid border-smallTextColor py-1 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300">
                <i className="ri-send-plane-line"></i> Let's Talk
              </button>
            </a>
            <span className="text-2xl text-smallTextColor md:hidden cursor-pointer">
              {/* Add an icon or element for mobile menu toggle here */}
              {/* For example: <i className="ri-menu-line"></i> */}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
