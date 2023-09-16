import React from "react";
import pic from "../../assets/images/pic.png";

const AboutMe = () => {
  const renderHeader = () => {
    return (
      <div className="container lg:pt-10">
        <div className="text-center">
          <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5 mt-5">
            Ab<span className="text-primaryColor">o</span>ut Me
          </h2>
        </div>
      </div>
    );
  };

  const renderImage = () => {
    return (
      <div className="w-1/2 basis-1/3 mt-5 ml-3 sm:mt-0 sm:order-first">
        <img
          className="flex items-center justify-center w-96 h-96" // Increase width and height as desired
          src={pic}
          alt="pic"
        />
      </div>
    );
  };

  const renderContent = () => {
    return (
      <div className="w-1/2 sm:order-last">
        <h1
          data-aos="fade-up"
          data-aos-duration="1500"
          className="lg-mx-auto text-smallTextColor font-[500] text-[16px] leading-7"
        >
          Greetings, I'm Prameya Dhaubhadel, hailing from the picturesque land
          of Nepal. My heart beats for data, and I find boundless fascination in
          unraveling its mysteries. With an unwavering passion for all things
          data-driven, I embark on a journey to explore the intricacies of this
          dynamic realm.
          <br />
          <br />
          Beyond the world of data, I find solace and inspiration in various
          interests and hobbies. When not immersed in datasets, you can often
          find me gazing up at the celestial wonders above, sketching my
          thoughts onto paper, delving into the captivating narratives of books,
          or indulging in my love for automobiles.
          <br />
          <br />
          This portfolio is a window into my data-driven odyssey, showcasing the
          projects and endeavors that have allowed me to harness the power of
          data and transform it into valuable insights. As I share these
          experiences, I hope to convey my dedication to the ever-evolving field
          of data and my unwavering commitment to pushing the boundaries of
          what's possible.
          <br />
          <br />
          Thank you for joining me on this journey, and I look forward to the
          exciting possibilities that lie ahead in the world of data and beyond.
          <br />
          <br />
        </h1>
      </div>
    );
  };

  return (
    <section id="about">
      {renderHeader()}
      <div className="container pt-14">
        <div className="md:flex items-center justify-between flex-col-reverse sm:flex-row">
          {renderImage()}
          {renderContent()}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
