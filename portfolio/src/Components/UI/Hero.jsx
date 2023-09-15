import React from "react";
import pic from "../../assets/images/Group 1.png";


const Hero = () => {
    return(
        <section className=" pt-0">
            <div className=" container pt-14">
                <div className=" md:flex items-center justify-between sm:flex-col md:flex-row">
                    {/*==== hero left content====*/}
                <div className=" w-1/2">
                    <h5 data-aos='fade-right' 
                        data-aos-duration='1500' 
                        className=" text-headingColor font-[600] text-[18px]"
                        >
                        Hello Welcome
                    </h5>
                    <h1 data-aos='fade-up' 
                        data-aos-duration='1500' 
                        className=" text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
                        >
                        I'am Prameya Dhaubhadel<br/>Data Enthusiast
                    </h1>
                    <div data-aos='fade-right' 
                        data-aos-duration='1800' 
                        data-aos-delay='200'
                        className=" flex items-center gap-6 mt-7"
                        >
                            <a href="#contact">
                                <button className=" bg-primaryColor text-smallTextColor font-[500] flex items-center gap-2 hover:bg-smallTextColor  hover:text-primaryColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                                <i class="ri-mail-open-line"></i> Contact Me
                                </button>
                            </a>
                            <a href="#portfolio" className=" text-smallTextColor font-[600] text-[16px] boarder-b border-solid border-smallTextColor">
                                <button>
                                    See Portfolio
                                </button>
                            </a>
                    </div>
                        <p
                            data-aos='fade-left' 
                            data-aos-duration='1500' 
                            className=" flex gap-2 text-smallTextColor mt-10 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10"
                        >
                            <span><i class="ri-chat-quote-line"></i></span> 
                            "Embracing the power of data, I seek to transform information into innovation, numbers into narratives,
                             and raw facts into actionable insights."
                        </p> 
                        <div className="flex items-center gap-9 mt-14">
                            <span className=" text-smallTextColor text-[18px] font-[600]">
                                Follow Me:
                            </span>
                            <span>
                                <a
                                    href="https://www.linkedin.com/in/prameya-dhaubhadel/"
                                    className=" text-smallTextColor text-[30px] font-[600] hover:text-primaryColor">
                                        <i class="ri-linkedin-box-fill"></i>
                                </a>
                            </span>
                            <span>
                                <a
                                    href="https://www.instagram.com/prameya_dhdl/"
                                    className=" text-smallTextColor text-[30px] font-[600] hover:text-primaryColor">
                                        <i class="ri-instagram-line"></i>
                                </a>
                            </span>
                            <span>
                                <a
                                    href="https://github.com/PrameyaDhdl"
                                    className=" text-smallTextColor text-[30px] font-[600] hover:text-primaryColor">
                                        <i class="ri-github-fill"></i>
                                </a>
                            </span>
                            <span>
                                <a
                                    href="#facebook"
                                    className=" text-smallTextColor text-[30px] font-[600] hover:text-primaryColor">
                                        <i class="ri-facebook-circle-fill"></i>
                                </a>
                            </span>
                        </div>                      
                </div> 
                <div className="w-1/2 basis-1/3 mt-5 ml-3 sm:mt-0">
                    <image className=" flex items-center justify-center">
                        <img src={pic} alt='pic'/>
                    </image>
                </div> 
                </div>
            </div>
        </section>
    )
};

export default Hero;