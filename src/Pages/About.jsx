import React from "react";
import dot from "../assets/more.png";
import line from "../assets/cable.png";
import user from "../assets/user.png";
import owner from "../assets/Baba.jpg";
import koushikda from "../assets/koushik.jpeg";
import koushikda2 from "../assets/koushik-video.jpg";
import rytam from "../assets/rytam.jpeg";
import kuttida from "../assets/kutti.jpeg";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import '../style/animation.css';
import 'animate.css';

export default function About()
{
    return(
        <>
        <div className="bg-white shadow-lg">
        <Navbar />
        </div>
            <div className="flex justify-center w-full h-auto mt-5">
                <div className="w-[90%] md:w-[85%] mb-5">
                    <p className="font-dancing-script text-4xl md:text-6xl text-[#86A788] text-center">Our Stories</p>
                        <AnimationOnScroll animateIn="animate-scale-up-center">
                        <div className="flex justify-center sm:mt-3 md:mt-5">
                            <img className="h-7 w-7 md:h-12 md:w-12 " src={line}></img>
                            <img className="h-7 w-7 md:h-12 md:w-12" src={dot}></img>
                            <img className="h-7 w-7 md:h-12 md:w-12" src={line}></img>
                        </div>
                        </AnimationOnScroll>
                        <div className="md:text-center  text-gray-600 mt-5">
                            <p className="">Ronit Studio , Expert in capturing the vibrant essence of traditional Bengali weddings, known for unique and heartfelt moments.Specialized in capturing the sacred and joyful rice ceremony (Annaprashan) for babies, preserving family traditions.Provides professional photography services for various events, including engagements, anniversaries, corporate events, and more.</p>
                            <p className="mt-5 md:mt-3">our founder , Chiranjib Das , who brings expertise and creative vision to all projects.Ronit Studio was founded in 2010, with over a decade of experience in the field of professional photography.
                            Known for its excellent quality of work and customer satisfaction.</p>
                            <p className=" mt-5 md:mt-3">Based in Sheoraphuli, Hooghly, West Bengal, making it easily accessible for clients in the region.Provides photography services across West Bengal.
                            Has worked in other states like Jharkhand, Bihar, and Tata Nagar, delivering exceptional event coverage.</p>
                        </div>
                       
                        <div className="mt-8 flex flex-col-reverse md:flex-row justify-between gap-6">
                            <div className=" w-full md:w-[60%] h-auto border-2 border-[#86A788] shadow-lg p-5 md:p-10">
                                <p className="text-2xl mt-3 md:mt-6 font-semibold">Chiranjib Das</p>
                                <p className="text-xl mt-2 md:mt-3">Freelance Photographer (Owner Of Ronit Studio)</p>
                                <p className="text-gray-600 mt-3 md:mt-6">My photography journey began in 2010 with a little Kodak camera. I started small—clicking passport photos and making framed prints. But after two years, I followed my heart, took a chance, and started Ronit Studio. Slowly, I moved into wedding photography, baby rice ceremonies, and more creative work. It’s been almost 15 years now, and photography has taught me countless lessons. I’ve explored different cameras, lenses, and techniques, and every step has made me love this art even more.</p>
                            </div>
                            <div className="w-full md:w-[40%] bg-white p-1 md:p-3 border-2 border-gray-500 shadow-2xl">
                                <div className="w-full h-full">
                                    <img className="h-full w-full " src={owner}></img>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-gray-100 h-auto w-full mt-10 flex justify-center p-5">
                            <div className="w-[90%]">
                                <p className="font-dancing-script text-4xl md:text-6xl text-[#86A788] text-center">Team Members</p>
                                <AnimationOnScroll animateIn="animate-scale-up-center">
                                <div className="flex justify-center mt-2">
                                    <img className="h-7 w-7 md:h-12 md:w-12 " src={line}></img>
                                    <img className="h-7 w-7 md:h-12 md:w-12" src={dot}></img>
                                    <img className="h-7 w-7 md:h-12 md:w-12" src={line}></img>
                                </div>
                                </AnimationOnScroll>
                                <div className="flex flex-wrap justify-center w-full gap-4 ">
                                    <AnimationOnScroll animateIn="animate-scale-up-center">
                                    <div className="p-3 bg-white">
                                        <img src={koushikda} className=" h-[160px] w-[130px] md:h-[210px] md:w-[180px] rounded-xl md:rounded-lg"></img>
                                        <p className="mt-2 text-center text-black"><span className="text-teal-500 mr-1">|</span>Koushik Sadhukhan<span className="text-teal-500 ml-1">|</span></p>
                                    </div>
                                    </AnimationOnScroll>
                                    <AnimationOnScroll animateIn="animate-scale-up-center">
                                    <div className="p-3 bg-white">
                                        <img src={koushikda2} className="h-[160px] w-[130px] md:h-[210px] md:w-[180px] rounded-xl md:rounded-lg"></img>
                                        <p className="mt-2 text-center text-black"><span className="text-teal-500 mr-1">|</span>Koushik Kundu<span className="text-teal-500 ml-1">|</span></p>
                                    </div>
                                    </AnimationOnScroll>
                                    <AnimationOnScroll animateIn="animate-scale-up-center">
                                    <div className="p-3 bg-white">
                                        <img src={kuttida} className="h-[160px] w-[130px] md:h-[210px] md:w-[180px] rounded-xl md:rounded-lg"></img>
                                        <p className="mt-2 text-center text-black"><span className="text-teal-500 mr-1">|</span>Prosenjit Adhikari<span className="text-teal-500 ml-1">|</span></p>
                                    </div>
                                    </AnimationOnScroll>
                                    <AnimationOnScroll animateIn="animate-scale-up-center">
                                    <div className="p-3 bg-white">
                                        <img src={rytam} className="h-[160px] w-[130px] md:h-[210px] md:w-[180px] rounded-xl md:rounded-lg"></img>
                                        <p className="mt-2 text-center text-black"><span className="text-teal-500 mr-1">|</span>Rytam <span className="text-teal-500 ml-1">|</span></p>
                                    </div>
                                    </AnimationOnScroll>
                                    {/* <AnimationOnScroll animateIn="animate-scale-up-center">
                                    <div className="p-3 bg-white">
                                        <img src={user} className="h-[150px] w-[150px]"></img>
                                        <p className="mt-2 text-center text-black"><span className="text-teal-500 mr-1">|</span>user name<span className="text-teal-500 ml-1">|</span></p>
                                    </div>
                                    </AnimationOnScroll> */}
                                    
                                </div>
                                
                            </div>
                        </div>
                </div>
            </div>
            <Footer />

        </>
    )
}