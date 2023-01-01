import React, { useEffect } from "react";
import './cssfiles/navbar.css'

const Services = () => {
  return (
    <div className="w-full flex justify-center items-center my-5" id="services">
      <div
        className="innerdiv rounded-3xl flex justify-center  p-5 py-10 md:py-10 md:my-1 my-14 items-center flex-col"
        style={{
          background: "linear-gradient(to right, #1d212c 20%, #ff0279 100%)"
        }}
      >
        <h1 className="text-black-900 text-lg font-extrabold mb-5">
          Our Services
        </h1>
        <h1 className="text-white text-xl md:text-5xl font-extralight">
          We Help Buisness To Help There {"\n"} Product Grow World Wide
        </h1>
        <div className="flex flex-col md:flex-row px-5 justify-center items-center my-2">
          <img
            className="h-full w-96 m-5 rounded-xl mt-10 img1"
            src="https://assets.justinmind.com/wp-content/uploads/2019/10/best-20-web-development-blogs.png"
            alt=""
          />
          <div className="flex-col flex py-3 md:p-5">
            <h1 className="text-white text-4xl my-3 font-extralight">
              Static Website Development
            </h1>
            <h1 className="text-white text-2xl my-2 font-extralight flex flex-col">
              Starting from ₹499{" "}
              <span className="text-sm">[According to type of website]</span>
              
            </h1>

            <p className="text-white">
              Website and E commerce do not have to be expensive or complicated
              in order to be <br />
              effective. We deal with a wide spectrum of clients with varrying
              budgets and need. <br />
              We make professional portfolios and static websites in affordable
              rates
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row px-5 justify-center items-center my-2">
          <img
            className="h-full w-96 m-5 rounded-xl img1"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwvCwJUnGIFcDX_QOd3m-qFjUbmXoIHvM4yA&usqp=CAU"
            alt=""
          />
          <div className="flex-col flex py-3 md:p-5">
            <h1 className="text-white text-4xl my-3 font-extralight">
              Web App Development
            </h1>
            <h1 className="text-white text-2xl my-2 font-extralight flex flex-col">
              Starting from ₹1197{" "}
              <span className="text-sm">[According to type of web app]</span>
            </h1>
            <p className="text-white">
              We Provide web Applications on a variety of open source platform
              to enable optimal <br /> budget management.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row px-5 justify-center items-center my-2">
          <img
            className="h-full w-96 m-5 rounded-xl img1"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlS6BYevby2D8r-htao0Bb3IK-i3WxwCFk5Q&usqp=CAU"
            alt=""
          />
          <div className="flex-col flex py-3 md:p-5">
            <h1 className="text-white text-4xl my-3 font-extralight">
              Mobile App Development
            </h1>
            <h1 className="text-white text-2xl my-2 font-extralight flex flex-col">
              Starting from ₹1490{" "}
              <span className="text-sm">
                [According to type of Application]
              </span>
            </h1>
            <p className="text-white">
              Website and E commerce do not have to be expensive or complicated
              in order to be <br />
              effective. We deal with a wide spectrum of clients with varrying
              budgets and need.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
