import React from "react";
import dot from "../assets/more.png";
import line from "../assets/cable.png";
import location from "../assets/Filmpage/location.gif"
import call from "../assets/mobile.png"
import whatsapp from "../assets/phone-call.png"
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import '../style/animation.css';
import 'animate.css';
export default function Contact() {
    const [uname, setUname] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    const sendEmail = (e) => {
        e.preventDefault();

        const templateParams = {
            user_name: uname,
            user_email: email,
            message: message,
        };

        emailjs.send(
            'service_mimgxtd',   // Service ID from EmailJS dashboard
            'template_su46cco',  // Template ID from EmailJS dashboard
            templateParams,      // Parameters to be passed
            'I-mILel3NUSkeF9Aq'       // User ID from EmailJS dashboard
        )
            .then((result) => {
                console.log(result.text);
                alert('Email sent successfully!');
            }, (error) => {
                console.log(error.text);
                alert('Failed to send email.');
            });
            setEmail("");
            setMessage("");
            setUname("");
    };

    return (
        <>
            <div className="bg-white shadow-lg">
                <Navbar />
            </div>
            <div className="flex justify-center w-full h-auto mt-5">
                <div className="w-[90%] md:w-[85%] mb-5">
                    <div>
                        <p className="font-dancing-script text-4xl md:text-6xl text-[#86A788] text-center">Our Location</p>

                        <AnimationOnScroll animateIn="animate-scale-up-center">
                            <div className="flex justify-center sm:mt-3 md:mt-5">
                                <img className="h-7 w-7 md:h-12 md:w-12 " src={line}></img>
                                <img className="h-7 w-7 md:h-12 md:w-12" src={dot}></img>
                                <img className="h-7 w-7 md:h-12 md:w-12" src={line}></img>
                            </div>
                        </AnimationOnScroll>
                    </div>

                    <div className="flex  justify-center w-full">
                        <div className="md:flex  gap-4  h-[600px] md:h-[300px]  w-full md:w-[80%]">
                            <div className="max-w-sm w-full md:w-[50%] p-3 md:p-6 bg-white shadow-md rounded-lg text-center border border-gray-200">
                                {/* Icon */}
                                <div className="flex justify-center mb-4">
                                    <div className="bg-teal-500 p-3 rounded-full">
                                        <img src={location} className="h-7 w-7 rounded-full md:h-10 md:w-10"></img>
                                    </div>
                                </div>
                                {/* Location Info */}
                                <h2 className="text-teal-600 text-xl font-semibold mb-2">Kolkata</h2>
                                <p className="text-gray-700 text-sm md:text-md">
                                    Bauripara Road , Kabi Mukunda Das Pally , Sheoraphuli , Baidyabati<br />
                                    Hooghly , 712223, <br />
                                    West Bengal.
                                </p>
                            </div>
                            <div className="w-full md:w-[50%] bg-[#118B50] h-[50%] md:h-full shadow-md rounded-lg border border-gray-200 flex justify-center items-center mt-4 md:mt-0">

                                <div>
                                    <div className="flex gap-2 mb-5">
                                        <img src={whatsapp} className="h-10 w-10 items-center"></img>
                                        <p className="text-2xl md:text-4xl font-semibold text-white">+918240615250</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <img src={call} className="h-10 w-10 items-center"></img>
                                        <p className="text-2xl md:text-4xl font-semibold text-white">+919051845093</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 bg-slate-50 ">
                        <p className="font-dancing-script text-4xl md:text-6xl text-[#86A788] text-center">Contact us</p>
                        <div class="mb-6 ">
                            <input onChange={(e) => { setEmail(e.target.value) }} type="text" value={email} id="input-group-1" class="bg-transparent  border-gray-300 text-gray-600 text-sm  border  border-b-1 border-t-0 border-l-0 border-r-0 focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-[50%] mx-auto  p-2.5 placeholder-gray-400 placeholder:font-bold " placeholder="Email" />
                        </div>
                        <div >

                            <input onChange={(e) => { setUname(e.target.value) }} value={uname} type="text" id="website-admin" class="bg-transparent  border-gray-300 text-gray-600 text-sm  border  border-b-1 border-t-0 border-l-0 border-r-0 focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-[50%] mx-auto  p-2.5 placeholder-gray-400 placeholder:font-bold " placeholder="Name" />

                            <textarea onChange={(e) => { setMessage(e.target.value) }} value={message} id="message" rows="4" class=" mt-4 block p-2.5 w-full sm:w-[50%] mx-auto text-sm text-gray-600 bg-transparent rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  placeholder-gray-400 placeholder:font-bold " placeholder="Write your thoughts here..."></textarea>

                            {/* <button  className="h-10 allign border-gray-400  justify-center border-4 rounded-lg ">Send message</button> */}
                            <div className="flex justify-center mt-4">
                                <button onClick={sendEmail} className="bg-orange-500 w-auto h-auto p-3 rounded-xl text-white">Submit</button>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
            <Footer />
        </>
    )
}