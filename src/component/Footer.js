import React from "react";
import "./cssfiles/NH.css";
import "./cssfiles/navbar.css";
import logo from "../img/sky hacks.png";
import { Link } from "react-router-dom";
import twit from "../img/twit.png";
import link from "../img/in.png";
import email from "../img/mail.png";

function Footer() {
  return (
    <div className="bg-black flex flex-col items-center p-6 pt-14 mt-12 md:mt-0">
      <p className="text-gray-400 font-bold text-xl md:text-1xl">Contact Us</p>
      <h1 className="text-white pt-2 font-extrabold text-2xl md:text-4xl text-center">
        <span className="text-2xl md:text-4xl m-5">You,ve got this far.</span>
        <br /> Ready to get started
      </h1>
      <Link to={"/ContactUs"} className="noSelect">
        <button className="touchbtn h-10 m-6 w-36 rounded-3xl bg-blue-700 font-extrabold text-white">
          Get in Touch
        </button>
      </Link>
    </div>
  );
}

export default Footer;
