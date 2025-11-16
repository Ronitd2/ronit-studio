import React from "react";
import dot from "../assets/more.png";
import line from "../assets/cable.png"; 
import filmpic1 from "../assets/gallerypic5.jpg";
import filmpic2 from "../assets/Filmpage/filmpic2.JPG";
import filmpic3 from "../assets/Filmpage/filmpic3.JPG";
import filmpic4 from "../assets/filmpic4.JPG";
import filmpic5 from "../assets/filmpic5.jpeg";


import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import '../style/animation.css';
import 'animate.css';
import { Link } from "react-router-dom";

export default function FilmPage()
{
    return(
        <>
            <div className="bg-white shadow-lg">
                <Navbar />
            </div>
            <div className="flex justify-center w-full h-auto mt-5 md:mt-10">
                <div className="w-[90%] md:w-[85%] mb-5">
                    <p className="font-dancing-script text-4xl md:text-6xl text-[#86A788] text-center">Unique Wedding Films</p>
                        <AnimationOnScroll animateIn="animate-scale-up-center">
                        <div className="flex justify-center sm:mt-3 md:mt-5">
                            <img className="h-7 w-7 md:h-12 md:w-12 " src={line}></img>
                            <img className="h-7 w-7 md:h-12 md:w-12" src={dot}></img>
                            <img className="h-7 w-7 md:h-12 md:w-12" src={line}></img>
                        </div>
                        </AnimationOnScroll>
                        <div className="flex justify-center">
                            <p className="text-center text-gray-600 text-sm md:text-md md:w-[50%]">At Ronit Studio, we craft wedding films for couples who value both elegance and authenticity. Our storytelling approach combines cinematic visuals with emotional, meaningful narratives, ensuring every moment of your special day is captured with exceptional creativity and quality.</p>
                        </div>
                    <div className="bg-slate-100 w-full mt-7 p-2 md:p-5">
                        <div className="flex justify-center gap-4 flex-wrap ">
                            
                            <a href="https://www.facebook.com/share/v/17ibh48Cmc/">
                            <div className="md:h-[320px] md:w-[460px]">
                                <img className="h-[90%] w-[100%] rounded-t-lg" src={filmpic1}></img>
                                <p className="text-[#86A788] text-md font-semibold mt-2 md:mt-4">Rana weds Soumi | Pre Wedding </p>
                            </div>
                            </a>
                            
                            <a href="https://www.facebook.com/share/v/1D5nQ1RzjG/">
                            <div className="md:h-[320px] md:w-[460px]">
                                <img className="h-[90%] w-[100%] rounded-t-lg" src={filmpic2}></img>
                                <p className="text-[#86A788] text-md font-semibold mt-2 md:mt-4">Chiya weds Himanshu | Grand Wedding </p>
                            </div>
                            </a>

                            <a href="https://www.facebook.com/share/v/1BcqBTcREj/">
                            <div className="md:h-[320px] md:w-[460px]">
                                <img className="h-[90%] w-[100%] rounded-t-lg" src={filmpic4}></img>
                                <p className="text-[#86A788] text-md font-semibold mt-2 md:mt-4">Jony weds Bony | Pre Wedding Story </p>
                            </div>
                            </a>

                            <a href="https://www.facebook.com/share/v/15ovT36GWt/">
                            <div className="md:h-[320px] md:w-[460px]">
                                <img className="h-[90%] w-[100%] rounded-t-lg" src={filmpic5}></img>
                                <p className="text-[#86A788] text-md font-semibold mt-2 md:mt-4">Riya weds Indrajit | Pre Wedding </p>
                            </div>
                            </a>
                            
                            {/* <AnimationOnScroll animateIn="animate-scale-up-center">
                            <img src={pic3} className="md:h-[300px] md:w-[500px]"></img>
                            </AnimationOnScroll>
                            <AnimationOnScroll animateIn="animate-scale-up-center">
                            <img src={pic4} className="md:h-[300px] md:w-[500px]"></img>
                            </AnimationOnScroll> */}
                            
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}