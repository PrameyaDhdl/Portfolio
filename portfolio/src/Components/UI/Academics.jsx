import React from "react";

const AcademicCard = ({ title, institution, date, icon, align }) => (
  <div className={`mt-6 sm:mt-0 sm:mb-12 ${align === "left" ? "flex justify-start" : "flex justify-end"} w-full mx-auto items-center`}>
    <div className={`w-full sm:w-1/2 ${align === "left" ? "sm:pr-8" : "sm:pl-8"}`}>
      <div
        data-aos={`fade-${align}`}
        data-aos-delay="50"
        data-aos-duration="1300"
        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
      >
        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl text-center">
          {title}
        </h3>
        <p className="text-[18px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
          {institution}
        </p>
        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
          {date}
        </p>
      </div>
    </div>
    <div className="rounded-full bg-primaryColor text-smallTextColor text-[20px] w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 sm:flex items-center justify-center hidden">
      <span>
        <i className={icon}></i>
      </span>
    </div>
  </div>
);

const Academics = () => {
  const academicEntries = [
    {
      title: "Undergraduate",
      institution: "Sunway College",
      date: "2022-present",
      icon: "ri-graduation-cap-line",
      align: "left",
    },
    {
      title: "High School",
      institution: "Khwopa Secondary School",
      date: "2020-2022",
      icon: "ri-building-line",
      align: "right",
    },
    {
      title: "Schooling",
      institution: "Genuine Secondary School",
      date: "2020-2006",
      icon: "ri-school-line",
      align: "left",
    },
  ];

  return (
    <section id="Academics">
      <div className="container lg:pt-7 md:px-56">
        <div className="text-center">
          <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5 mt-5">
            My <span className="text-primaryColor">Academics</span>
          </h2>
          <p className="lg-mx-auto text-smallTextColor font-[500] text-[16px] leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            ipsa. Velit laboriosam blanditiis cum illo, quas, veniam rem
            similique eum et quod accusantium consequuntur provident facilis.
            Repellendus fuga explicabo laborum.
          </p>
        </div>
        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              <div className="hidden absolute w-1 sm:block bg-primaryColor h-full left-1/2 transform -translate-x-1/2"></div>
              {academicEntries.map((entry, index) => (
                <AcademicCard key={index} {...entry} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academics;
