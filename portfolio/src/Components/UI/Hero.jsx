import React from "react";
import pic from "../../assets/images/Group 1.png";

const SocialLink = ({ href, icon }) => (
  <span>
    <a
      href={href}
      className="text-smallTextColor text-[30px] font-[600] hover:text-primaryColor"
    >
      <i className={icon}></i>
    </a>
  </span>
);

const Hero = () => {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/prameya-dhaubhadel/",
      icon: "ri-linkedin-box-fill",
    },
    {
      href: "https://www.instagram.com/prameya_dhdl/",
      icon: "ri-instagram-line",
    },
    {
      href: "https://github.com/PrameyaDhdl",
      icon: "ri-github-fill",
    },
    {
      href: "https://www.facebook.com/prameya.dhaubhadel.1",
      icon: "ri-facebook-circle-fill",
    },
  ];

  return (
    <section className="pt-0 md:px-56">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between flex-col md:flex-row">
          {/*==== hero left content====*/}
          <div className="w-full md:w-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600] text-[18px]"
            >
              Hello Welcome
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
            >
              I'm Prameya Dhaubhadel<br />Data Enthusiast
            </h1>
            <div
              data-aos="fade-right"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex flex-row sm:flex-row items-center gap-6 mt-7"
            >
              <a href="#contact">
                <button className="bg-primaryColor text-smallTextColor font-[500] flex items-center gap-2 hover:bg-smallTextColor hover:text-primaryColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                  <i className="ri-mail-open-line"></i> Contact Me
                </button>
              </a>
              <a
                href="#portfolio"
                className="text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor mt-2 sm:mt-0 ml-2"
              >
                See Portfolio
              </a>
            </div>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-2 text-smallTextColor mt-10 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10"
            >
              <span>
                <i className="ri-chat-quote-line"></i>
              </span>
              "Embracing the power of data, I seek to transform information into
              innovation, numbers into narratives, and raw facts into actionable
              insights."
            </p>
            <div className="flex items-center gap-9 mt-14">
              <span className="text-smallTextColor text-[18px] font-[600]">
                Follow Me:
              </span>
              {socialLinks.map((link, index) => (
                <SocialLink key={index} href={link.href} icon={link.icon} />
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-5 md:mt-0">
            <img src={pic} alt="pic" className="mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
