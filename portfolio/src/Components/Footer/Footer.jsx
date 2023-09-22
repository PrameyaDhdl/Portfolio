import React from "react";

const SocialLink = ({ href, icon }) => (
  <span className="px-2"> {/* Add margin-right for the gap */}
    <a
      href={href}
      className="text-[30px] font-[500] text-primaryColor"
    >
      <i className={icon}></i>
    </a>
  </span>
);

const Footer = () => {
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
    <div className=" py-5 bg-smallTextColor text-center">
        <div className=" text-primaryColor font-[500] text-[20px]">Prameya Dhaubhadel</div>
         {socialLinks.map((link, index) => (
        <SocialLink key={index} href={link.href} icon={link.icon} />
        ))}
    </div>
  );
};

export default Footer;
