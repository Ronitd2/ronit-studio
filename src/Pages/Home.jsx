import React from "react";
import DemoCarousel from "../utils/DemoCarousel";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import dot from "../assets/more.png";
import line from "../assets/cable.png";
import filmpiic1 from "../assets/filmpic1.jpg";
import filmpiic2 from "../assets/filmpic2.jpg";
import filmpiic3 from "../assets/filmpic3.jpg";
import filmpiic4 from "../assets/filmpic4.jpg";
import gallerypic1 from "../assets/gallerypic1.jpg";
import gallerypic2 from "../assets/gallerypic2.jpg";
import gallerypic3 from "../assets/gallerypic3.jpg";
import gallerypic4 from "../assets/gallerypic4.jpg";
import gallerypic5 from "../assets/gallerypic5.jpg";
import gallerypic6 from "../assets/gallerypic6.jpg";
import storiepic1 from "../assets/storiepic1.jpg";
import storiepic2 from "../assets/storiepic2.jpg";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import '../style/animation.css';
import 'animate.css';
import { Link } from "react-router-dom";

export default function Home()
{
    return(
        <>
        <div className="w-full h-full ">
            {/* <Navbar /> */}
            
            <DemoCarousel  />
            
            <div className="sm:h-auto md:h-screen lg:h-screen xl:h-screen  flex justify-center ">
                <div className="text-center m-4 md:m-24">
                    <div className="p-0 md:p-6">
                        <p className="text-2xl md:text-6xl font-sans text-[#86A788] animate__fadeIn animate__delay-2s ">Luxury Wedding Photography Across India: Ronit Studio Artistry and Authenticity</p>
                    </div>
                    <div>
                        <p className="p-3 text-sm md:text-md text-gray-500">At Ronit Studio, we believe every wedding is a timeless story waiting to be told. Our luxury wedding photography blends artistic vision with authentic emotions, capturing moments that feel as grand as your celebration. From intimate rituals to majestic ceremonies across India, we craft visual narratives that preserve your love with elegance, richness, and heart. Each frame reflects our commitment to artistry, precision, and unforgettable memories.</p>
                        <p className="text-gray-500 text-sm md:text-md"> At Ronit Studio, we specialize in luxury wedding photography that captures the essence of your story with authenticity and care. Whether your celebrations unfold in palaces, beaches, heritage venues, or your hometown, we document every detail with a blend of creativity and soulful storytelling.</p>
                    </div>

                    <div className="mt-5  md:mt-8">
                        <p className="font-dancing-script text-2xl md:text-6xl text-[#86A788]">Wedding Films</p>
                        <AnimationOnScroll animateIn="animate-scale-up-center">
                        <div className="flex justify-center sm:mt-3 md:mt-5">
                            <img className="h-7 w-7 md:h-12 md:w-12 " src={line}></img>
                            <img className="h-7 w-7 md:h-12 md:w-12" src={dot}></img>
                            <img className="h-7 w-7 md:h-12 md:w-12" src={line}></img>
                        </div>
                        </AnimationOnScroll>
                        <div className="flex justify-center">
                            <p className=" w-[80%] md:w-[50%] text-sm md:text-md text-gray-500">At Ronit Studio, we craft wedding films that stand the test of time. With a unique mix of traditional charm and modern artistry, we bring together captivating visuals and meaningful narratives to preserve your special moments.</p>
                        </div>
                    </div>
                </div>
            </div>
           
            <div className="sm:h-auto   flex justify-center ">
            
                <div className="flex w-[85%] md:w-[75%] flex-wrap gap-6 justify-center">
                    <AnimationOnScroll animateIn="animate-scale-up-center"><img className="md:h-[320px] w-[480px] rounded-md" src={filmpiic1}></img></AnimationOnScroll>  
                    <AnimationOnScroll animateIn="animate-scale-up-center"><img className="md:h-[320px] w-[480px] rounded-md" src={filmpiic2}></img></AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate-scale-up-center"><img className="md:h-[320px] w-[480px] rounded-md" src={filmpiic3}></img></AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate-scale-up-center"><img className="md:h-[320px] w-[480px] rounded-md" src={filmpiic4}></img></AnimationOnScroll>
                </div> 
               
            </div>
             
            <AnimationOnScroll animateIn="animate-scale-up-center">
            <div className="flex justify-center ">
                <div>
                    <Link to='/filmpage'><p className="text-center mt-5 md:text-lg block font-semibold text-gray-800">Explore+</p></Link>
                    <img className="h-6 w-28 " src={line}></img>
                </div>
            </div>
            </AnimationOnScroll>
            <div className="mt-8">
                <p className="font-dancing-script text-2xl md:text-6xl text-center text-[#86A788]">Wedding Photos gallery</p>
                <AnimationOnScroll animateIn="animate-scale-up-center">
                <div className="flex justify-center mt-3 md:mt-5">
                    <img className="h-7 w-7 md:h-12 md:w-12" src={line}></img>
                    <img className="h-7 w-7 md:h-12 md:w-12" src={dot}></img>
                    <img className="h-7 w-7 md:h-12 md:w-12" src={line}></img>
                </div>
                </AnimationOnScroll>
                <div className="flex justify-center">
                    <p className="w-[80%] md:w-[50%] text-sm md:text-md text-center text-gray-500">Explore our Wedding Photos Gallery, where every frame reflects a beautiful fusion of traditional elegance and contemporary style. Each image is thoughtfully crafted to tell your love story through creative, timeless photography.</p>
                </div>
            </div>
            <div className="sm:h-auto  flex justify-center mt-10 ">
                <div className="w-full sm:w-[90%] flex  flex-wrap gap-6 justify-center">
                    <AnimationOnScroll animateIn="animate-scale-up-center"><img className="md:h-[250px] w-[280px] md:w-[370px] object-fill" src={gallerypic1}></img></AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate-scale-up-center"><img className="md:h-[250px] w-[280px] md:w-[370px] transform scale-100" src={gallerypic2}></img></AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate-scale-up-center"><img className="md:h-[250px] w-[280px] md:w-[370px] object-center" src={gallerypic3}></img></AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate-scale-up-center"><img className="md:h-[250px] w-[280px] md:w-[370px]" src={gallerypic4}></img></AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate-scale-up-center"><img className="md:h-[250px] w-[280px] md:w-[370px]" src={gallerypic5}></img></AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate-scale-up-center"><img className="md:h-[250px] w-[280px] md:w-[370px]" src={gallerypic6}></img></AnimationOnScroll>

                </div>    
            </div>
            <AnimationOnScroll animateIn="animate-scale-up-center">
            <div className="flex justify-center ">
                <div>
                    <Link to='/gallery'><p className="text-center mt-5 md:text-lg block font-semibold text-gray-800">Explore+</p></Link>
                    <img className="h-6 w-28 " src={line}></img>
                </div>
            </div>
            </AnimationOnScroll>
            <div className="h-auto bg-slate-100 ">
                <div className="p-6">
                    <p className="font-dancing-script text-2xl md:text-6xl text-center text-[#86A788] mt-6md:mt-10">Wedding Stories</p>
                    <AnimationOnScroll animateIn="animate-scale-up-center">
                    <div className="flex justify-center mt-3 md:mt-5">
                        <img className="h-7 w-7 md:h-12 md:w-12" src={line}></img>
                        <img className="h-7 w-7 md:h-12 md:w-12" src={dot}></img>
                        <img className="h-7 w-7 md:h-12 md:w-12" src={line}></img>
                    </div>
                    </AnimationOnScroll>
                    <div className="flex justify-center">
                        <p className="w-[80%] md:w-[50%] text-sm md:text-md text-center text-gray-500">Every wedding starts with a beautiful love story. Browse our gallery of captivating wedding stories that reflect the essence of your moments through elegant and emotional storytelling.</p>
                    </div>
                </div>
                <div className="flex  flex-wrap justify-center gap-7 ">
                <AnimationOnScroll animateIn="animate-scale-up-center">
                    <div className="bg-white w-[300px] md:h-[450px] md:w-[600px] p-3 md:p-5">
                        <div className="md:h-[370px] md:w-[560px]">
                            <img className="h-[100%] w-[100%] rounded-t-lg" src={storiepic1}></img>
                            <p className="text-[#86A788] text-md font-semibold mt-2 md:mt-4">Rana weds Soumi | Grand Wedding</p>
                        </div>
                    </div>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate-scale-up-center">
                    <div className="bg-white w-[300px] md:h-[450px] md:w-[600px] p-3 md:p-5">
                        <div className="md:h-[370px] md:w-[560px]">
                            <img className="h-[100%] w-[100%] rounded-t-lg" src={storiepic2}></img>
                            <p className="text-[#86A788] text-md font-semibold mt-2 md:mt-4">Bidisha weds Amlan | Pre Wedding</p>
                        </div>
                    </div>
                    </AnimationOnScroll>
                </div>
                <AnimationOnScroll animateIn="animate-scale-up-center">
                <div className="flex justify-center ">
                <div>
                    <Link to='/filmpage'><p className="text-center mt-5 text-md md:text-lg block font-semibold text-gray-800">Explore+</p></Link>
                    <img className="h-6 w-28 " src={line}></img>
                </div>
                </div>
                </AnimationOnScroll>
            </div>
            <Footer/>
        </div>
        </>
    )
}