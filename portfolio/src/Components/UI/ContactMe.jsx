import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import toast, { Toaster } from "react-hot-toast";

const ContactMe = () => {
    const form = useRef();
    const contact_info = [
        {
          logo: "mail-open",
          text: "prameyadhaubhadel@gmail.com",
          link: "mailto:prameyadhaubhadel@gmail.com",
        },
        {
            logo: "whatsapp",
            text: "+977 904-0397987",
            link: "https://wa.me/9840397987",
          },
          {
            logo: "instagram",
            text: "prameya_dhdl",
            link: "https://www.instagram.com/prameya_dhdl/",
          },
      ];
      // Sending Email
      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_m4xsxo4', 'template_3t0s1mw', form.current, 'b2ERwpEGcaCXsH2N_')
          .then((result) => {
              console.log(result.text);
              // clear all inputs filled by user
              form.current.reset();
              //Sucess toast message
              toast.success('Email Sent Sucessfully');
          }, (error) => {
              console.log(error.text);
              //error toast message
              toast.error(error.text);
          });
      };
    return(
        <section id='contact' className=" py-8 text-smallTextColor">
            <Toaster />
            <div className=" text-center mt-8">
                <h3 className="text-headingColor font-[800] text-[2.4rem] mb-5 mt-5">Contact <span className="text-primaryColor">Me</span></h3>

                <div className=" mt-16 flex md:flex-row flex-col gap-6 max-w-5xl md:p-6 p-2 rounded-lg mx-auto bg-primaryColor">
                    <form ref={form} onSubmit={sendEmail} className=" flex flex-col flex-1 gap-5 ">
                        <input type='text' name="from_name" placeholder="Your Name" className="bg-white p-4 rounded shadow"/>
                        <input type="Email" name="user_email" placeholder="Your Email Address" className="bg-white p-4 rounded shadow"/>
                        <textarea placeholder="Your Message" name='message' rows={10} className="bg-white p-4 rounded shadow"/>
                        <button className=" text-white bg-smallTextColor font-[500] flex items-center gap-2 rounded-[8px] py-2 px-4 w-fit">Send Message</button>
                    </form>
                    <div className=" felx flex-col">
                        {
                            contact_info.map((contact, i) => (
                                <div key={i} className=" flex gap-4 w-fit items-center p-2">
                                    <a href={contact.link} className=" flex gap-4 w-fit items-center p-2">
                                        <div className="min-w-[3.5rem] min-h-[3.5rem] text-3xl flex items-center justify-center bg-smallTextColor text-white rounded-full">
                                            <i className={`ri-${contact.logo}-line`}></i>
                                        </div>
                                        <p className=" font-[500] text-[18px] text-smallTextColor">{contact.text}</p>
                                    </a>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;