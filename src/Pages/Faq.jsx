import React from "react";
import dot from "../assets/more.png";
import line from "../assets/cable.png";
import question from "../assets/utils/question.png";
import inv1 from "../assets/faq/inv1.jpg";
import inv2 from "../assets/faq/inv2.jpeg";
import inv3 from "../assets/faq/inv3.jpg";
import inv4 from "../assets/faq/inv4.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useState, useEffect } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import '../style/animation.css';
import 'animate.css';

export default function Faq() {
    const steps = [
        "Digital Invitation Card",
        "Cinematic Wedding Film [Realistic]",
        "Pre & Post Wedding Photos and Videos",
        "Photo Story",
        "Canvera Album",
        "Wedding Full Video [Day/Event-wise]",
        "Canvas Print",
    ];
    const [slideHeight, setSlideHeight] = useState('400px'); // Default height

    useEffect(() => {
        const updateHeight = () => {
            if (window.innerWidth < 480) {
                setSlideHeight('40vh'); // Mobile devices
            } else if (window.innerWidth < 768) {
                setSlideHeight('300px'); // Tablets
            } else {
                setSlideHeight('400px'); // Desktops or larger screens
            }
        };

        window.addEventListener('resize', updateHeight);
        updateHeight(); // Set the initial height

        return () => window.removeEventListener('resize', updateHeight);
    }, []);

    const slideStyle = {
        height: slideHeight,
    };

    //   const slideStyle = {
    //     height: '400px', // Adjust the height as needed
    // };
    return (
        <>
            <div className="bg-white shadow-lg">
                <Navbar />
            </div>
            <div className="flex justify-center w-full h-auto mt-5">
                <div className="w-[90%] md:w-[85%] mb-5">

                        <div>
                        <p className="font-dancing-script text-4xl md:text-6xl text-[#86A788] text-center">Deliverable</p>
                        <AnimationOnScroll animateIn="animate-scale-up-center">
                            <div className="flex justify-center sm:mt-3 md:mt-3">
                                <img className="h-7 w-7 md:h-12 md:w-12 " src={line}></img>
                                <img className="h-7 w-7 md:h-12 md:w-12" src={dot}></img>
                                <img className="h-7 w-7 md:h-12 md:w-12" src={line}></img>
                            </div>
                        </AnimationOnScroll>
                        <div className="w-full md:p-5 flex justify-between flex-wrap gap-5">
                            <div className="relative flex flex-col ml-4">
                                {steps.map((step, index) => (
                                    <div key={index} className="flex items-start">
                                        {/* Circle and Line */}
                                        <div className="flex flex-col items-center">
                                            {/* Circle */}
                                            <div className="w-6 h-6 bg-teal-500 rounded-full border-4 border-white z-10"></div>
                                            {/* Line: show the line only if it's not the last step */}
                                            {index !== steps.length - 1 && (
                                                <div className="h-12 border-l-2 border-gray-500 -mt-1"></div>
                                            )}
                                        </div>
                                        {/* Step Title */}
                                        <div className="ml-4">
                                            <p className="text-gray-700 font-medium">{step}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="w-full sm:w-[40%] bg-gray-200 p-3 md:p-6">
                                <Carousel showStatus={false} showThumbs={false} autoPlay={true} infiniteLoop={true} interval={2000}>
                                    <div style={slideStyle}>
                                        <img src={inv1} alt="Slide 1" style={{ height: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <div style={slideStyle}>
                                        <img src={inv3} alt="Slide 2" style={{ height: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <div style={slideStyle}>
                                        <img src={inv2} alt="Slide 3" style={{ height: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <div style={slideStyle}>
                                        <img src={inv4} alt="Slide 3" style={{ height: '100%', objectFit: 'cover' }} />
                                    </div>
                                </Carousel>
                            </div>
                        </div>
                    </div>



                    <p className="font-dancing-script text-4xl md:text-6xl text-[#86A788] text-center mt-5">Frequently Asked Questions</p>
                    <AnimationOnScroll animateIn="animate-scale-up-center">
                        <div className="flex justify-center sm:mt-3 md:mt-5">
                            <img className="h-7 w-7 md:h-12 md:w-12 " src={line}></img>
                            <img className="h-7 w-7 md:h-12 md:w-12" src={dot}></img>
                            <img className="h-7 w-7 md:h-12 md:w-12" src={line}></img>
                        </div>
                    </AnimationOnScroll>
                    <div className="w-full h-auto">
                        <div className="bg-slate-100 border-black border-2 rounded-lg w-full p-3 mt-5">
                            <div className="flex items-center gap-2">
                                <img src={question} className="h-5 w-5"></img>
                                <p>What services do you offer?</p>
                            </div>
                            <p className="text-gray-600">We offer wedding photography, wedding films, pre-wedding shoots, candid photography, baby rice ceremony shoots, portraits, and event coverage.</p>
                        </div>

                        <div className="bg-slate-100 border-black border-2 rounded-lg w-full p-3 mt-5">
                            <div className="flex items-center gap-2">
                                <img src={question} className="h-5 w-5"></img>
                                <p> How do I book a session?</p>
                            </div>
                            <p className="text-gray-600">You can book a session through our website, by calling us directly, or visiting our studio in person. For larger projects, we recommend contacting us in advance to discuss your needs.</p>
                        </div>

                        <div className="bg-slate-100 border-black border-2 rounded-lg w-full p-3 mt-5">
                            <div className="flex items-center gap-2">
                                <img src={question} className="h-5 w-5"></img>
                                <p> How many photos do we receive?</p>
                            </div>
                            <p className="text-gray-600">You will receive all best-selected and fully edited photos. The number usually depends on the event’s duration and package.</p>
                        </div>

                        <div className="bg-slate-100 border-black border-2 rounded-lg w-full p-3 mt-5">
                            <div className="flex items-center gap-2">
                                <img src={question} className="h-5 w-5"></img>
                                <p> Do you provide raw photos or videos?</p>
                            </div>
                            <p className="text-gray-600">Yes, raw files can be provided on request.</p>
                        </div>

                        <div className="bg-slate-100 border-black border-2 rounded-lg w-full p-3 mt-5">
                            <div className="flex items-center gap-2">
                                <img src={question} className="h-5 w-5"></img>
                                <p> Can we customize a package?</p>
                            </div>
                            <p className="text-gray-600">Absolutely. We create customized packages based on your budget, event duration, and requirements.</p>
                        </div>
                    </div>


                </div>
            </div>
            <Footer />
        </>
    )
}