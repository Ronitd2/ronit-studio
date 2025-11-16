import React from "react";
import riceceremony from "../assets/rice-ceremony/rc1.jpg";
import gallerypic from "../assets/gallerypic1.jpg"
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link, NavLink } from "react-router-dom";
export default function Option()
{
    return(
        <>
        <div className="bg-white shadow-lg">
            <Navbar />
        </div>
            <div className="w-full h-auto flex justify-center items-center mt-10 mb-10">
            
                <div className=" sm:flex sm:flax-wrap sm:justify-center gap-7 w-[90%] bg-gray-200 p-3 md:p-10">
                    
                <NavLink to="/gallery" >
                    <div className="bg-white w-full md:h-[450px] md:w-[600px] p-3 md:p-5">
                        <div className="md:h-[370px] md:w-[560px] overflow-hidden relative">
                            <img className="h-[100%] w-[100%] rounded-t-lg object-cover transition-transform duration-500 hover:scale-110" src={gallerypic}></img>
                            
                        </div>
                        <p className="text-[#86A788] text-2xl font-semibold hover:font-bold mt-2 md:mt-4">Wedding Photo Gallery</p>
                    </div>
                </NavLink>
                <NavLink to="/riceceremony-gallery">
                    <div className="bg-white w-full md:h-[450px] md:w-[600px] p-3 md:p-5 mt-5 md:mt-0">
                        <div className="md:h-[370px] md:w-[560px] overflow-hidden relative">
                            <img className="h-[100%] w-[100%] rounded-t-lg object-cover transition-transform duration-500 hover:scale-110" src={riceceremony}></img>
                           
                        </div>
                        <p className="text-[#86A788] text-2xl font-semibold hover:font-bold mt-2 md:mt-4">Baby Rice Ceremony Photo Gallery</p>
                    </div>
                </NavLink>
                </div>
                
            </div>
            <Footer />
        </>
    )
}