import React from "react";

const Navbar = () => {
    return(
        <div className="w-full h-[80px] leading-[80px] flex items-center">
            <div className="container">
                <div className="flex items-center justify-between ">
                    {/*=========== logo=========*/}
                    <div className="flex items-center gap-[10px]">
                        <span className="w-[45px] h-[45px] bg-primaryColor text-black text-[18px] font-[500] rounded-full flex items-center justify-center">
                            PD
                        </span>
                        <div className="leading-[20px]">
                            <h2 className="text-xl text-smallTextColor font-[700]">Prameya</h2>
                            <p className=" text-smallTextColor text-[15px] font-[500]">Dhaubhadel</p>
                        </div>
                    </div>
                    {/*=========== logo end =========*/}
                    <div className="menu">
                        <ul className=" flex items-center gap-10">
                            <li><a className=" text-smallTextColor font-[600]" href="#about">About Me</a></li>
                            <li><a className=" text-smallTextColor font-[600]" href="#Skills">Skills</a></li>
                            <li><a className=" text-smallTextColor font-[600]" href="#portfolio">Portfolio</a></li>
                            <li><a className=" text-smallTextColor font-[600]" href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    {/*========================================*/}
                    <div className=" flex items-center gap-4">
                        <button className=" flex items-center gap-2 text-smallTextColour font-[600] border border-solid border-smallTextColor py-1 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300">
                            <i class="ri-send-plane-line" ></i> Let's Talk
                        </button>

                        <span className=" text-2xl text-smallTextColor md:hidden cursor-pointer"></span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Navbar;