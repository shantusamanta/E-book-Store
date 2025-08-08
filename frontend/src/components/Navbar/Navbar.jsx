import React from "react";
import { Link } from "react-router-dom";
import { FaGripLines } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
    const links = [
          {
            title: "Home",
            link:"/",
          },
          {
            title: "All Books",
            link:"/all-books",
          },
          {
            title: "Cart",
            link:"/cart",
          },
          {
            title: "Profile",
            link:"/profile",
          },
    ];
    const [MobileNav, setMobileNav] = useState("hidden");
    return(
        <>
        <nav className=" relative z-50 bg-zinc-800 text-white px-8 py-4 flex item-center justify-between">
            <Link to="/" className="flex" item-center>
                <img className="h-10 me-4" 
                src="https://cdn-icons-png.flaticon.com/128/10433/10433049.png" 
                alt="logo"
                 />
                <h1 className="text-3xl font-semibold py-1">Bookify</h1>
            </Link>
            <div className="nav-links-bookify block md:flex items-center gap-4">
                <div className=" hidden md:flex gap-4">
                      {links.map((items, i) => (
                    <Link
                       to={items.link}
                        key={i} 
                        className="text-white hover:text-blue-400 px-4 transition-all duration-300"
                        
                    >
                        {items.title}
                    </Link>
                ))}
                </div>
             
                <div className=" hidden md:flex gap-4">
                    <Link to={"/Login"}
                     className=" border border-blue-500 px-4 py-1 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300">
                        Login
                    </Link>
                    <Link to={"/SignUp"}
                     className="bg-blue-500 px-4 py-1 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300">
                        SignUp
                    </Link>
                </div>
                <button className="text-white text-2xl md:hidden hover:text-zinc-300"
                 onClick={() =>
                            MobileNav === "hidden"? setMobileNav("block") : setMobileNav("hidden")}
                            >
                    <FaGripLines />
                </button>
            </div>
        </nav>
         <div className={`${MobileNav} bg-zinc-800 h-screen absolute top-0 left-0 w-full z-40 flex flex-col items-center justify-center `}>
              {links.map((items, i) => (
                    <Link
                       to={items.link}
                        key={i} 
                        className={` ${MobileNav} text-white text-4xl font-semibold m-8 hover:text-blue-400 px-4 transition-all duration-300 `}
                        onClick={() =>
                            MobileNav === "hidden"? setMobileNav("block") : setMobileNav("hidden")}
                    >
                        {items.title}
                    </Link>
                ))}
                 
                  <Link to={"/Login"}
                     className={` ${MobileNav} text-3xl font-semibold border border-blue-500 mb-8 px-8 py-2 rounded text-white hover:bg-white hover:text-zinc-800 transition-all duration-300`}>
                        Login
                    </Link>
                    <Link to={"/SignUp"}
                     className={` ${MobileNav} text-3xl font-semibold bg-blue-500 px-8 py-2 mb-8 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300 `}>
                        SignUp
                    </Link>
                    
         </div>
        </>
    );
};
export default Navbar;