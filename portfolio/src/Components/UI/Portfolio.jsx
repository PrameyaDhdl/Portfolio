import React, { useState } from "react";

const Portfolio = () => {
  const projects = [
    {
      title: "TWINDER",
      description:
        "A live Geolocation app for finding tweets and Twitter users around you.",
      photo: "/src/assets/projects/img1.png", // Add the correct image path
    },
    {
      title: "LIVENTS",
      description:
        "A video streaming app with live Geolocation, for streaming events.",
      photo: "/src/assets/projects/img2.png", // Add the correct image path
    },
    {
      title: "MOOVE",
      description:
        "Mobile app for booking instant pickup & drop-off across major cities.",
      photo: "/src/assets/projects/img3.png", // Add the correct image path
    },
    // Add more projects as needed...
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const handleAboutMeClick = (index) => {
    setSelectedProject(index);
  };

  const closeDescription = () => {
    setSelectedProject(null);
  };

  return (
    <div className=" px-7 mt-16 text-center md:px-56" id="portfolio">
      <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5 mt-5">
        My <span className="text-primaryColor">Portfolio</span>
      </h2>
      <p className="lg-mx-auto text-smallTextColor font-[500] text-[20px] leading-7 my-4">My Projects</p>
      <p className="lg-mx-auto text-smallTextColor font-[500] text-[16px] leading-7 pb-4">
        I have worked on many projects over the course of being a Web Developer,
        here are a few of my live, real-world projects
      </p>

      {/* Featured projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-6 items-center justify-center">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className="flex flex-col shadow-sm md:w-[345px] bg-smallTextColor p-4 rounded"
            >
              {/* Project card */}
              <a
                href={project.photo}
                target="_blank"
                rel="noreferrer"
                className="mb-4"
              >
                <img src={project.photo} alt={project.title} />
              </a>
              <h3 className="text-primaryColor font-[600] text-[23px]">
                {project.title}
              </h3>
              <p className=" text-white mt-1">{project.description}</p>
              <div className="mt-5">
                <button
                  className="font-[500] bg-primaryColor py-2 px-6 rounded text-smallTextColor hover:bg-white"
                  onClick={() => handleAboutMeClick(index)}
                >
                  About me
                </button>
                <button
                  className="outline py-1.5 px-9 font-[500] rounded border-none ml-5 text-primaryColor"
                  onClick={closeDescription}
                >
                  Projects
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Description pages */}
      {selectedProject !== null && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-90">
          <div className="bg-white p-4 rounded shadow-md text-center">
            <h3 className="text-primaryColor font-[600] text-[23px]">
              {projects[selectedProject].title}
            </h3>
            <img
              src={projects[selectedProject].photo}
              alt={projects[selectedProject].title}
              className="mx-auto my-4 max-w-full h-auto"
            />
            <p className="text-smallTextColor mt-1">
              {projects[selectedProject].description}
            </p>
            <button
              className="outline py-1.5 px-9 font-[500] rounded border-none mt-4 text-primaryColor"
              onClick={closeDescription}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
