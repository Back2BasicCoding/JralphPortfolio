"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Herosection = () => {
  return (
    <section>
      <div className="grid grid-col-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white mb-4 text-4xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-purple-500 to-yellow-500">
              Hello, I&apos;m {""}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Jaron",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web Developer"          
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-yellow-200 hover:bg-slate-300 text-black">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-yellow-200 hover:bg-slate-800 mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full text-white px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0 ">
          <div className="rounded-full bg-[#222222] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] mb-4 relative">
            <Image
              className="absolute rounded-full  transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src={"/images/boy.png"}
              alt="Hero Image"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
