import React, { useState } from "react";
import uni from "../../assets/images/uni.png";
import paws from "../../assets/images/paws.png"
import hms from "../../assets/images/hms.png"
import "tailwindcss/tailwind.css";

const Portfolio = () => {
  const projects = [
    {
      title: "PAWS",
      summary: "An Innovative twist on traditional collars to making pethood a breeze and relaxation the norm",
      description:
        (<p>PAWS - The Smart Pet Collar redefines pet ownership with its all-in-one solution. 
          It's not just a smart collar; it's a comprehensive answer to pet tracking and care.<br/><br/>
        At its core, PAWS MVP uses advanced technology like the ESP32 microcontroller and NEO-6M 
        GPS module to provide precise real-time GPS tracking. But it doesn't stop there. PAWS also
         monitors your pet's activity levels and heart rate, ensuring you're always aware of their well-being.<br/><br/>
        Safety is a top priority with an inbuilt LED light for visibility in low-light conditions.
         But the innovation doesn't end there. PAWS has plans to integrate a PPG sensor for advanced health insights, 
         develop a user-friendly app interface, introduce vet care illness alerts, and implement a robust database system.<br/><br/>
        PAWS offers peace of mind, enhances pet care, and strengthens the bond between pets and their owners. It's the 
        ultimate smart pet collar, combining GPS tracking, activity monitoring, safety features, and health insights in 
        one streamlined package.</p>),
      photo: paws,
      link:'https://drive.google.com/file/d/15d2c3x3KAdj1zHZk7QlwCalRZBhslDCr/view?usp=sharing', 
    },
    {
      title: "UK UniGalore",
      summary: 'An Algorithm designed to locate and analyze the UK Universities according to the preference',
      description:
        (
          <p>In this technological study, an algorithm designed to help Times Higher Education writers quickly locate
          and analyze survey data from UK universities as students are pressing educational institutions for more
          (Woodall et al., 2012). The algorithm is a useful tool that enables reporters to easily access and evaluate
          survey data, assisting their reporting efforts and assisting students in making educated judgments when
          choosing universities.<br/><br/>
          The study begins by emphasizing the significance of choosing the appropriate data structure and algorithm
          to ensure efficiency and performance. A list of dictionaries was chosen as the data structure to allow for
          structured storage and quick retrieval of university data via key-value pairs. For sorting and searching, the
          method employs quicksort and binary search, respectively. Quicksort efficiently sorts the dataset by
          separating it into smaller portions, whereas binary search searches sorted datasets quickly and effectively.
          When interacting with survey data, these algorithms lead to enhanced performance and a better user
          experience.<br/><br/>
          Quick Sort: O(n log n) average time complexity, efficient for large data sets.
          Bubble Sort & Insertion Sort: O(n^2) average time complexity, less efficient.
          Binary Search: O(log n) time complexity, quick and efficient for sorted data.<br/><br/>
          The algorithm proved to be working fully and correctly by completing an assertion table and testing with
          a respective assert statement.</p>
        ),
      photo: uni,
      link:'https://drive.google.com/file/d/17bpFkH11d4dZjVawXus2qdwWQqAYPWK7/view?usp=sharing', 
    },
    {
      title: "Hospital Management System",
      summary: 'A healthcare system designed to maintain real-time data for effective management and updates.',
      description:
        (
          <p>This Hospital Management code and algorithm has been intricately tailored to meet the specific 
          needs of healthcare institutions. It serves as a versatile tool for administrators, doctors,
           and nurses, providing them with the capability to seamlessly add, remove, and allocate patients, 
           ensuring optimal resource utilization. Furthermore, the system enables hospitals to maintain a real-time 
           overview of their patient population, facilitating efficient care delivery and resource management.<br/><br/>
           With the ability to track both current inpatients and discharged individuals, the system empowers healthcare 
           providers to maintain comprehensive patient records, enhancing the continuity of care and improving patient outcomes. 
           It's not just about managing data; it's about optimizing healthcare operations while prioritizing data security and accuracy. 
           This code and algorithm stand as a pillar of support for hospital administrators, enabling them to provide high-quality 
           healthcare services while keeping patient information safe and up-to-date.<br/><br/>
           In conclusion, this meticulously designed Hospital Management code and algorithm serve as a vital tool for healthcare facilities. 
           It streamlines patient management, optimizes resource allocation, and ensures data accuracy, ultimately contributing to improved patient 
           care and operational efficiency. This robust system stands at the forefront of modern healthcare administration, empowering hospitals to 
           provide top-notch medical services while safeguarding patient information.</p>
          ),
      photo: hms, 
      link:'https://github.com/PrameyaDhdl/HMS', 
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
    <div className="px-7 mt-16 text-center md:px-56" id="portfolio">
      <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5 mt-5">
        My <span className="text-primaryColor">Portfolio</span>
      </h2>
      <p className="lg-mx-auto text-smallTextColor font-[500] text-[20px] leading-7 my-4">My Projects</p>
      <p className="lg-mx-auto text-smallTextColor font-[500] text-[16px] leading-7 pb-4">
        Below, you'll find a selection of the works and projects that I have undertaken, 
        each representing a significant facet of my academic journey.
      </p>

      {/* Featured projects */}
      <div  data-aos='fade-up' 
            data-aos-duration='1500'
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-6 items-center justify-center">
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
                <img src={project.photo} alt={project.title} className="max-w-[100%] h-auto" />
              </a>
              <h3 className="text-primaryColor font-[600] text-[23px]">
                {project.title}
              </h3>
              <p className="text-white mt-1">{project.summary}</p>
              <div className="mt-5">
                <button
                  className="font-[500] bg-primaryColor py-2 px-6 rounded text-smallTextColor hover:bg-white"
                  onClick={() => handleAboutMeClick(index)}
                >
                  About It
                </button>
                <a key={index} href={project.link}>
                  <button
                    className="outline py-1.5 px-9 font-[500] rounded border-none ml-5 text-primaryColor"
                  >
                    Projects
                  </button>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Description pages */}
      {selectedProject !== null && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-90">
          <div className="bg-white p-4 rounded shadow-md text-center max-w-[90%] md:max-h-[80%] max-h-[75%] overflow-y-auto">
            <h3 className="text-primaryColor font-[600] text-[23px]">
              {projects[selectedProject].title}
            </h3>
            <div className=" flex md:flex-row flex-col">
              <img
                src={projects[selectedProject].photo}
                alt={projects[selectedProject].title}
                className="mx-auto my-4 max-w-[90%] h-auto"
              />
              <p className="text-smallTextColor mt-1 p-4 font-[500] text-[16px] text-justify">
                {projects[selectedProject].description}
              </p>
            </div>
            
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
