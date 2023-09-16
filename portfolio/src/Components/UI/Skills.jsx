import React from "react";

const Skills = () => {
  const skills = [
    {
      logo: "html5",
      name: "HTML",
    },
    {
      logo: "css3",
      name: "CSS",
    },
    {
        logo: "code",
        name: "Python",
      },
    {
      logo: "reactjs",
      name: "Reactjs",
    },
    {
      logo: "quill-pen",
      name: "UI/UX Design",
    },
  ];
  
  return (
    <section id="Skills" className="mb-5 mt-5 relative">
      <div className="mt-8 text-center">
        <h3 className="text-headingColor font-[800] text-[2.4rem] mb-5 mt-1">
          My Sk<span className="text-primaryColor">i</span>lls
        </h3>
        <p className="lg-mx-auto text-smallTextColor font-[500] text-[20px] leading-7 my-4">My Knowledge</p>
        <p className=" lg-mx-auto text-smallTextColor font-[500] text-[16px] leading-7">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, ipsa. 
                            Velit laboriosam blanditiis cum illo, quas, veniam rem similique eum et quod accusantium 
                            consequuntur provident facilis. Repellendus fuga explicabo laborum.</p>
        <div data-aos='fade-up' 
            data-aos-duration='1500'
            className="flex items-center justify-center mt-12 gap-10 flex-wrap ">
          {skills.map((skill, i) => (
            <div key={i} className="border-2 shadow relative min-w-[10rem] max-w-[16rem] bg-primaryColor p-7 rounded-xl group hover:bg-smallTextColor cursor-pointer ease-in duration-150">
              <div className="w-32 h-32 flex items-center justify-center rounded-full">
                <span className="text-7xl text-smallTextColor group-hover:text-primaryColor">
                  <i className={`ri-${skill.logo}-line`}></i>
                </span>
              </div>
              <p className="text-smallTextColor text-[18px] font-[700] group-hover:text-primaryColor">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
