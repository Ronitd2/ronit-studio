import React from "react"
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Gallery(){
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return(
        <>
        <div>
            <li className="cursor-pointer text-orange-400" onMouseEnter={()=>{setIsDropdownOpen(true)}} ><a href="#skills">Gallary</a></li>
                            {isDropdownOpen && 
                            <div className=" h-auto w-32 bg-white rounded-lg shadow-gray-700 z-50 absolute p-6 flex justify-center" onMouseLeave={()=>{setIsDropdownOpen(false)}}>
                                <ul className="text-orange-400 font-semibold ">
                                    <NavLink to="/option" ><li className="cursor-pointer mb-2 hover:text-orange-500 hover:font-bold">Photoes</li></NavLink>
                                    <NavLink to="/filmpage"><li className="cursor-pointer mb-2 hover:text-orange-500 hover:font-bold">Films</li></NavLink>
                                    {/* <li className="cursor-pointer mb-2">Stories</li> */}
                                </ul>
                            </div>
                            }
        </div>
        </>
    )
}