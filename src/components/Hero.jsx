import React from "react";
import Search from "./icon/Search";

function Hero() {
  return (
    <div className=" w-full h-[93vh]">
      <div className="w-full h-[100%] bg-hero-bg bg-cover bg-center">
        <div className=" flex justify-center items-center h-full">
            <input type="text" placeholder="Search the pokemon you love" className="w-[30%] bg-white rounded-full px-6 py-3 text-black outline-none font-light"/>
            <Search className="size-12 cursor-pointer hover:text-white transition-all ease-in duration-150"/>
        </div>
      </div>
    </div>
  );
}

export default Hero;
