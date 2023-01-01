import React, { useEffect } from "react";
import one from "../img/two.jpg";
import { Link } from "react-router-dom";
import "./cssfiles/navbar.css";
import Typewriter from "typewriter-effect";
const Home = () => {
  return (
    <div
      className="w-full flex flex-col md:flex-row items-center px-1 pt-16 md:pt-1 md:pr-10"
      id="home"
    >
      <div className="homeimg relative mx-5 w-full">
        {/* <img src={one} alt="" className="w-full rounded-3xl h-full" /> */}
        <div
          className="absolute top-10 w-full flex flex-col md:flex-row md:items-center md:py-0 py-5 items-start"
          style={{ marginTop: "9vmax",marginLeft:"-1.5vmax" }}
        >
          <div className="flex flex-col py-10 px-5 md:pl-20  w-full md:w-4/6 ">
            <h1 className="text-white text-xl md:text-3xl font-extrabold">
              We Provide the best
            </h1>
            <h1 className="text-white text-xl md:text-3xl font-extrabold typ">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 20,
                  strings: [
                    "Website creation services!",
                    "App creation services!",
                    "Software creation services!",
                  ],
                }}
              />
            </h1>
          </div>
          <div className="w-full md:w-2/6 flex justify-center md:justify-end items-end  md:mr-20">
            <Link to={"/ContactUs"} className="noSelect">
              <button className=" touchbtn h-10 w-36 rounded-3xl bg-white font-extrabold text-blue-700 butn">
                Request Order
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
