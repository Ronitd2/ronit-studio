import React from "react";
import facebook from "../assets/Filmpage/facebook.png";
import insta from "../assets/Filmpage/insta.png";
import location from "../assets/Filmpage/location2.png";
import { Link } from "react-router-dom";
export default function Footer()
{
    return(
        <>
            <div>
                <div className="bg-[#1E201E] h-auto w-full md:flex md:justify-center">
                    <div className=" md:w-[90%] mx-auto flex flex-wrap md:justify-center gap-10 p-6">
                        <div className="">
                            <h3 className="text-teal-500 font-semibold mb-4 text-2xl">| Site Map</h3>
                            <ul className="space-y-2 text-gray-400  text-sm ">
                                <Link to='/'><li className="hover:text-teal-500 hover:cursor-pointer">HOME</li></Link>
                                <Link to='/about'><li className="hover:text-teal-500 hover:cursor-pointer">ABOUT</li></Link>
                                <Link to='/gallery'><li className="hover:text-teal-500 hover:cursor-pointer">GALLARY</li></Link>
                                <Link to='/filmpage'><li className="hover:text-teal-500 hover:cursor-pointer">FILMS</li></Link>
                                <Link to='/contact'><li className="hover:text-teal-500 hover:cursor-pointer">CONTACT US</li></Link>
                            </ul>
                        </div>

                        {/* For Client */}
                        <div>
                            <h3 className="text-teal-500 font-semibold mb-4 text-2xl">| For Client</h3>
                            <ul className="space-y-2 text-gray-400  text-sm">
                                <Link to='/faq'><li className="hover:text-teal-500 hover:cursor-pointer">FAQ</li></Link>
                                <li className="hover:text-teal-500 hover:cursor-pointer">Blog</li>
                                <li className="hover:text-teal-500 hover:cursor-pointer">Write Your Review</li>
                            </ul>
                        </div>

                        {/* Wedding Locations */}
                        <div>
                            <h3 className="text-teal-500 font-semibold mb-4 text-2xl">| Wedding Locations</h3>
                            <ul className="space-y-2 text-gray-400  text-sm">
                                <li>Kolkata</li>
                                <li>Bhubaneswar</li>
                                <li>Jharkhand</li>
                                <li>Tata Nagar</li>
                                <li>Patna</li>
                                <li>Ranchi</li>
                            </ul>
                        </div>

                        {/* Locations and Contacts */}
                        <div className="md:w-[20%]">
                            <h3 className="text-teal-400 font-semibold mb-4 text-2xl">| Locations</h3>
                            <div className="mb-6 text-gray-400  text-sm">
                                <div className="flex justify-start gap-2">
                                <img src={location} className="h-7 w-7"></img>
                                <h4 className="">STUDIO LOCATION</h4>
                                </div>
                                <p>Bauripara Road, Kabi Mukunda Das Pally, Sheoraphuli, Hooghly, Pin-712223, West Bengal.</p>
                            </div>
                            
                        </div>
                

                        {/* Contact Section */}
                        <div className="text-gray-400  text-sm">
                            <div>
                                <h3 className="text-teal-500 font-semibold mb-4 text-2xl">| Contacts</h3>
                                <p><span className="font-semibold hover:text-teal-500">Phone:</span> +91-8240615250 , +91-9051845093 </p>
                                <p><span className="font-semibold hover:text-teal-500">WhatsApp:</span> +91-8240615250</p>
                            </div>

                            <div className="mt-3 flex gap-2">
                                <a href="https://www.facebook.com/share/1DQFYbpQTJ/"><img  src={facebook} className="w-10 h-10 cursor-pointer"></img></a>
                                <a href="https://www.instagram.com/ronitstudio?igsh=MXhic3NidjFqN2RxYQ=="><img src={insta} className="w-10 h-10 cursor-pointer"></img></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}