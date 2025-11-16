import React from "react";
import menu from "../assets/menu.png"
import cross from "../assets/cross.png"
import logo from "../assets/logo.jpg"
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Gallery from "./Gallery";
export default function Navbar()
{
    const [navbarStatus,setNavbarStatus]=useState(false);
    return(
        <>
         
            <div className="flex justify-center w-[100%]    bg-transparent">

            {!navbarStatus &&
                <div className="p-2 sm:hidden flex justify-between items-center w-full">
                     <img className="h-14 w-14" src={logo}></img>
                     <img className="h-8 w-7sm:h-9 sm:w-8"  onClick={()=>{setNavbarStatus(true)}} src={menu} alt="menu"/>
                </div>
                }
            {navbarStatus &&
                <div className="fixed h-full top-0 right-0 p-4 w-[100%] backdrop-blur-lg z-50 ">
                <div className=" text-center h-screen  text-gray-500">
                <img  className=" h-10 w-12 " src={cross} onClick={()=>{setNavbarStatus(false)}}></img>
                <ul className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text font-semibold">
                    <NavLink to="/"><li className=" mt-10 sm:m-0 hover:text-lg"><a href="" >Home</a></li></NavLink>
                    <NavLink to="/about"><li className=" mt-10 sm:m-0 hover:text-lg"><a href="" >About</a></li></NavLink>
                    <NavLink to="/option"><li className=" mt-10 sm:m-0 hover:text-lg" >Gallary</li></NavLink>
                    <NavLink to="/filmpage"><li className=" mt-10 sm:m-0 hover:text-lg" >Films</li></NavLink>
                    <NavLink to="/faq"><li className=" mt-10 sm:m-0 hover:text-lg"><a href="" >Faq</a></li></NavLink>
                    <NavLink to="/contact"><li className=" mt-10 sm:m-0 hover:text-lg"><a href="" >Contact</a></li></NavLink>
                </ul>
                </div>
                </div> 
            } 

                <nav className="w-[80%] hidden sm:visible sm:flex justify-between items-center ">
                    <div className="flex gap-2 justify-center items-center">
                    <img className="h-20 w-20" src={logo}></img>
                    </div>
                    

                    
                    <div className="invisible sm:visible">
                        <ul className=" flex gap-5 justify-center font-semibold">
                            <NavLink to="/"><li className="cursor-pointer text-orange-400 hover:text-orange-500 hover:font-bold">Home</li></NavLink>
                            <NavLink to="/about"><li className="cursor-pointer text-orange-400 hover:text-orange-500 hover:font-bold">About</li></NavLink>
                            <Gallery />
                            <NavLink to="/faq"><li className="cursor-pointer text-orange-400 hover:text-orange-500 hover:font-bold">Faq</li></NavLink>
                            <NavLink to="/contact"><li className="cursor-pointer text-orange-400 hover:text-orange-500 hover:font-bold">Contact</li></NavLink>

                        </ul>    
                    </div>

                    

                    

                </nav>
            </div>
        </>
    )
}






// import React from "react";

// export default function Navbar()
// {
//     return (
//         <>
//             <nav className="w-full flex justify-center items-center p-6">
//                 <div className="w-[80%] flex justify-between items-center">
//                     <p className="text-2xl text-orange-500 font-semibold">Ronit Studio</p>
//                     <div className="flex justify-between items-end gap-6 text-orange-400 font-semibold text-md">
//                         <p>Home</p>
//                         <p>About</p>
//                         <p>Gallary</p>
//                         <p>Contact</p>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     )
// }