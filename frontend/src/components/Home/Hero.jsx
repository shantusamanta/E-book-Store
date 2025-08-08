import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
       <div className="h-[85vh] flex flex-col md:flex-row md:items-center justify-center bg-zinc-900 text-white">
        {/* left text */}
        <div className="w-full lg:w-3/6 flex flex-col justify-center item-center lg:items-start">
        <h1 className=" text-4xl lg:text-6xl ml-6 front-semibold text-yellow-100 text-center pr-2 lg:text-left">Discover Your Next Great Read</h1>
        <p className="mt-4 ml-8 text-xl text-zinc-300 md:text-center pr-2 justify-center lg:text-left">
            Uncover captivating stories and explore a world of knowledge with our extensive collection of ebooks.  Dive into the pages of your next favorite book today!
        </p>
       <div className="mt-8 md:items-center flex justify-center lg:justify-start mb-5">
         <Link to="/all-books" className="text-yellow-100 text-xl ml-8 lg:text-2xl font-semibold border border-yellow-100 px-10 py-2 hover:bg-zinc-800 rounded-full">
            Discover Books
        </Link>
       </div>
        </div>
        {/* image */}
        <div className=" w-full lg:w-3/6 h-auto lg:h-[100%] flex justify-center items-center">
        <img  className =" h-75 lg:h-125"src="./hero.png" alt="hero" />
        </div>
       </div>
    );
}
export default Hero;