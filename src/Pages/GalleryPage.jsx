import React from "react";
import dot from "../assets/more.png";
import line from "../assets/cable.png";
import Navbar from "../Components/Navbar";
import wed1 from "../assets/wedding photos/wed1.jpg";
import wed2 from "../assets/wedding photos/wed2.jpg";
import wed3 from "../assets/wedding photos/wed3.jpg";
import wed11 from "../assets/wedding photos/wed11.jpg";
import wed4 from "../assets/wedding photos/wed4.jpg";
import wed5 from "../assets/wedding photos/wed5.jpg";
import wed10 from "../assets/wedding photos/wed10.jpg";
import wed6 from "../assets/wedding photos/wed6.jpg";
import wed7 from "../assets/wedding photos/wed7.jpg";
import wed8 from "../assets/wedding photos/wed8.jpg";
import wed13 from "../assets/wedding photos/wed13.jpg";
import wed14 from "../assets/wedding photos/wed15.jpg";
import wed15 from "../assets/wedding photos/wed14.jpg";
import wed16 from "../assets/wedding photos/wed16.jpg";
import wed17 from "../assets/wedding photos/wed17.jpg";
import wed18 from "../assets/wedding photos/wed18.jpg";
import wed19 from "../assets/wedding photos/wed19.jpg";
import wed20 from "../assets/wedding photos/wed20.jpg";
import wed21 from "../assets/wedding photos/wed21.jpg";
import wed22 from "../assets/wedding photos/wed22.jpg";

import Footer from "../Components/Footer";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import '../style/animation.css';
import 'animate.css';
export default function GalleryPage()
{
    return(
        <>
            <div>
                <div className="bg-white shadow-lg">
                    <Navbar />
                </div>
                <div className="flex justify-center w-full h-auto mt-5 md:mt-8">
                    <div className="w-[90%] md:w-[90%] mb-5 ">
                        <p className="font-dancing-script text-4xl md:text-6xl text-[#86A788] text-center">Wedding Photos</p>
                        <AnimationOnScroll animateIn="animate-scale-up-center">
                        <div className="flex justify-center sm:mt-3 md:mt-5">
                            <img className="h-7 w-7 md:h-12 md:w-12 " src={line}></img>
                            <img className="h-7 w-7 md:h-12 md:w-12" src={dot}></img>
                            <img className="h-7 w-7 md:h-12 md:w-12" src={line}></img>
                        </div>
                        </AnimationOnScroll>
                        <div className="flex w-full justify-center">
                            <p className="text-center md:w-[50%] text-sm md:text-md text-gray-500">Our wedding photography brings your special day to life with a perfect mix of artistry and timeless charm. Every photograph is thoughtfully created to capture genuine emotions, beautiful details, and the unique moments that make your celebration unforgettable. From soft bridal portraits to vibrant ceremonies, our images narrate your love story with clarity and sophistication. Whether candid or posed, we preserve each detail with care—delivering high-resolution, luxurious photographs you’ll treasure forever.</p>
                        </div>
                        <div className="mt-5 md:mt-10 bg-slate-100 p-2 md:p-5">
                            <p className="font-dancing-script text-4xl md:text-6xl text-[#86A788] text-center mb-5">Wedding day's</p>
                            <div>
                                <div class="space-y-5 md:space-y-0 md:grid md:grid-cols-3 md:grid-rows-3 md:gap-4 ">
                                    <div className="overflow-hidden relative">
                                        <img src={wed1} className=" h-full w-full rounded-lg object-cover transition-transform duration-500 hover:scale-110 "></img>
                                    </div>
                                    <div className="overflow-hidden relative">
                                        <img src={wed2} className="h-full w-full rounded-lg object-cover transition-transform duration-500 hover:scale-110"></img>
                                    </div>
                                    <div className="md:row-span-2 overflow-hidden relative">
                                    <img src={wed3} className=" rounded-lg object-cover transition-transform duration-500 hover:scale-110 "></img>
                                    <img src={wed5} className="mt-7 rounded-lg object-cover transition-transform duration-500 hover:scale-110"></img>
                                    <img src={wed10} className="mt-7  rounded-lg object-cover transition-transform duration-500 hover:scale-110 "></img>
                                    </div>
                                    <div className="md:col-span-2 overflow-hidden relative">
                                        <img className="h-full w-full rounded-lg object-cover transition-transform duration-500 hover:scale-110" src={wed11}></img>
                                    </div>
                                    <div className="md:row-span-2 overflow-hidden relative">
                                        <img src={wed4} className=" rounded-lg object-cover transition-transform duration-500 hover:scale-110 "></img>
                                        <img src={wed8} className="mt-7 rounded-lg object-cover transition-transform duration-500 hover:scale-110 "></img>

                                    </div>
                                    <div className="md:row-span-2 overflow-hidden relative">
                                        <img src={wed6} className="h-full w-full rounded-lg object-cover transition-transform duration-500 hover:scale-110"></img>
                                    </div>
                                    <div className="md:row-span-2 overflow-hidden relative">
                                        <img src={wed7} className="h-full w-full rounded-lg object-cover transition-transform duration-500 hover:scale-110"></img>
                                    </div>
                                    <div className="md:row-span-2 overflow-hidden relative">
                                        <img src={wed13} className="h-full w-full rounded-lg object-cover transition-transform duration-500 hover:scale-110"></img>
                                    </div>
                                    <div className="md:row-span-2 overflow-hidden relative">
                                        <img src={wed15} className=" rounded-lg object-cover transition-transform duration-500 hover:scale-110 "></img>
                                        <img src={wed14} className="mt-7 rounded-lg object-cover transition-transform duration-500 hover:scale-110 "></img>

                                    </div>
                                    <div className="md:row-span-2 overflow-hidden relative">
                                        <img src={wed16} className=" rounded-lg object-cover transition-transform duration-500 hover:scale-110 "></img>
                                        <img src={wed17} className="mt-7 rounded-lg object-cover transition-transform duration-500 hover:scale-110 "></img>

                                    </div>
                                    <div className="md:row-span-2 overflow-hidden relative">
                                        <img src={wed18} className=" rounded-lg object-cover transition-transform duration-500 hover:scale-110 "></img>
                                        <img src={wed19} className="mt-7 rounded-lg object-cover transition-transform duration-500 hover:scale-110 "></img>

                                    </div>
                                    <div className="md:row-span-2 overflow-hidden relative">
                                        <img src={wed20} className="h-full w-full rounded-lg object-cover transition-transform duration-500 hover:scale-110"></img>
                                    </div>
                                    <div className="md:row-span-2 overflow-hidden relative">
                                        <img src={wed21} className=" rounded-lg object-cover transition-transform duration-500 hover:scale-110 "></img>
                                        <img src={wed22} className="mt-7 rounded-lg object-cover transition-transform duration-500 hover:scale-110 "></img>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}