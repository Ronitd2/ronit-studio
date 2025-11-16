import React from "react";
import dot from "../assets/more.png";
import line from "../assets/cable.png";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import '../style/animation.css';
import 'animate.css';

import r1 from "../assets/rice-ceremony/rc2.JPG";
import r2 from "../assets/rice-ceremony/rc3.JPG";
import r3 from "../assets/rice-ceremony/rc4.JPG";
import r4 from "../assets/rice-ceremony/rc5.JPG";
import r5 from "../assets/rice-ceremony/rc6.JPG";
import r6 from "../assets/rice-ceremony/rc7.JPG";
import r7 from "../assets/rice-ceremony/rc8.JPG";
import r8 from "../assets/rice-ceremony/rc9.JPG";
import r9 from "../assets/rice-ceremony/rc10.JPG";
import r10 from "../assets/rice-ceremony/rc11.JPG";
import r11 from "../assets/rice-ceremony/rc12.JPG";
import r12 from "../assets/rice-ceremony/rc13.JPG";


export default function RiceCeremony() {
    return (
        <>
            <div>
                <div className="bg-white shadow-lg">
                    <Navbar />
                </div>
                <div className="flex justify-center w-full h-auto mt-5 md:mt-8">
                    <div className="w-[90%] md:w-[90%] mb-5 ">
                        <p className="font-dancing-script text-4xl md:text-6xl text-[#86A788] text-center">Baby Rice Ceremony Gallery</p>
                        <AnimationOnScroll animateIn="animate-scale-up-center">
                            <div className="flex justify-center sm:mt-3 md:mt-5">
                                <img className="h-7 w-7 md:h-12 md:w-12 " src={line}></img>
                                <img className="h-7 w-7 md:h-12 md:w-12" src={dot}></img>
                                <img className="h-7 w-7 md:h-12 md:w-12" src={line}></img>
                            </div>
                        </AnimationOnScroll>
                        <div className="flex w-full justify-center">
                            <p className="text-center md:w-[50%] text-sm md:text-md text-gray-500">A baby's rice ceremony, also known as "Annaprashan," is a beautiful cultural milestone celebrating the first time a baby is fed solid food. Our studio captures the joy and significance of this moment with stunning photography, highlighting the baby’s innocence and the family's happiness. From traditional rituals to candid family moments, we ensure every emotion is preserved in timeless images. Let us help you create cherished memories of your little one's special day!</p>
                        </div>
                        <div className="mt-5 md:mt-10 bg-slate-100 p-2 md:p-5">
                            <p className="font-dancing-script text-4xl md:text-6xl text-[#86A788] text-center mb-5">Photo Gallery</p>
                            <div>
                                <div class="space-y-5 md:space-y-0 md:grid md:grid-cols-3 md:grid-rows-3 md:gap-4 ">
                                    <div className="overflow-hidden relative">
                                        <img src={r1} className=" h-full w-full rounded-lg object-cover transition-transform duration-500 hover:scale-110 "></img>
                                    </div>

                                    <div className="overflow-hidden relative">
                                        <img src={r2} className="h-full w-full rounded-lg object-cover transition-transform duration-500 hover:scale-110"></img>
                                    </div>

                                    <div className="overflow-hidden relative">
                                        <img src={r3} className="h-full w-full rounded-lg object-cover transition-transform duration-500 hover:scale-110"></img>
                                    </div>

                                    <div className="md:row-span-2 overflow-hidden relative">
                                        <img src={r4} className=" rounded-lg object-cover transition-transform duration-500 hover:scale-110 "></img>
                                        <img src={r5} className="mt-7 rounded-lg object-cover transition-transform duration-500 hover:scale-110"></img>
                                    </div>
                                    <div className="md:row-span-2 overflow-hidden relative">
                                        <img src={r6} className="h-full w-full rounded-lg object-cover transition-transform duration-500 hover:scale-110"></img>
                                    </div>
                                    {/* <div className="md:col-span-2 overflow-hidden relative">
                                        <img className="h-full w-full rounded-lg object-cover transition-transform duration-500 hover:scale-110" src={r6}></img>
                                    </div> */}
                                    <div className="md:row-span-2 overflow-hidden relative">
                                        <img src={r7} className=" rounded-lg object-cover transition-transform duration-500 hover:scale-110 "></img>
                                        <img src={r8} className="mt-7 rounded-lg object-cover transition-transform duration-500 hover:scale-110 "></img>
                                    </div>
                                    <div className="md:row-span-2 overflow-hidden relative">
                                        <img src={r9} className="h-full w-full rounded-lg object-cover transition-transform duration-500 hover:scale-110"></img>
                                    </div>
                                    <div className="md:row-span-2 overflow-hidden relative">
                                        <img src={r10} className=" rounded-lg object-cover transition-transform duration-500 hover:scale-110 "></img>
                                        <img src={r11} className="mt-7 rounded-lg object-cover transition-transform duration-500 hover:scale-110 "></img>
                                    </div>
                                    <div className="md:row-span-2 overflow-hidden relative">
                                        <img src={r12} className="h-full w-full rounded-lg object-cover transition-transform duration-500 hover:scale-110"></img>
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