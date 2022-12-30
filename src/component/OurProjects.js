import React,{useEffect} from 'react'
import '@splidejs/splide/dist/css/splide.min.css'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { Link } from "react-router-dom";
import lap from '../img/laptop.png'
import thirt from '../img/13.png'
import four from '../img/4.png'
import six from '../img/6.png'
import eleven from '../img/11.png'
import twelve from '../img/12.png'
import port from '../img/port.png'
function OurProjects () {
    useEffect(() => {
        var line1=document.getElementById("line1")
        var line2=document.getElementById("line2")
        var line3=document.getElementById("line3")
        document.getElementById("fullnav").style.right="-200px"
        line1.style.display="block"
            line2.style.bottom="15px"
            line2.style.right="0px"
            line2.style.transform="rotate(0deg)"
            line3.style.bottom="5px"
            line3.style.right="0px"
            line3.style.transform="rotate(0deg)"
    }, []);
  return (
    <div className='w-full p-2 py-10 md:p-20 flex flex-col justify-center items-center'>
        <h1 className='text-black font-bold text-xl md:text-3xl mb-5 '>Our Projects</h1>
        {/* <p className='text-gray-600 text-xl font-extrabold'>Our Projects</p> */}
        <Splide className='my-10 md:my-2' options={{
            perPage:2,
            type: "loop",
            autoScroll: {
                pauseOnHover: false,
                pauseOnFocus: false,
                rewind: false,
                speed: 1
              },
            breakpoints: {
                  900: {
                      perPage: 1,
                  },
            },
            // perMove:1,
            arrows:false,
            drag: 'free',
            snap:true,
            gap:"20px",
            pagination:false,
        }}
        extensions={{ AutoScroll }}>
              {/* <Splide
      options={{
        type: "loop",
        gap: "10px",
        drag: "free",
        arrows: false,
        pagination: false,
        perPage: 3,
        autoScroll: {
          pauseOnHover: false,
          pauseOnFocus: false,
          rewind: false,
          speed: 1
        }
      }}
      extensions={{ AutoScroll }}
    > */}
            <SplideSlide key={1}>
             <Link className=""
      state={{ currentt: 13 }}>
          <div className="w-full h-96 bg-gray-300 rounded-xl relative flex flex-col justify-center items-center">
            <img src={lap} className='w-72 md:w-96 z-2'/>
            <img src={thirt} className='w-56 h-36 md:w-72 md:h-48 z-1 absolute top-21'/>
        </div>
            <h1 className='text-black text-xl font-extrabold absolute bottom-3 left-3'>Youtube 2.0</h1>
        </Link>
        </SplideSlide>           
            <SplideSlide key={2}>
             <Link className=""
      state={{ currentt: 13 }}>
        <div className="w-full h-96 bg-gray-200 rounded-xl relative flex flex-col justify-center items-center">
            <img src={lap} alt='' className='w-72 md:w-96'/>
            <img src={eleven} alt='' className='md:w-72 md:h-48 w-56 h-36 z-1 absolute top-21'/>
        </div>
        <h1 className='text-black text-xl font-extrabold  absolute bottom-3 left-3'>E commerce Layout</h1>
        </Link>
        </SplideSlide>           
            <SplideSlide key={3}>
             <Link className=""
      state={{ currentt: 13 }}>
        <div className="w-full h-96 bg-gray-200 rounded-xl relative flex flex-col justify-center items-center">
            <img src={lap} alt='' className='w-72 md:w-96'/>
            <img src={four} alt='' className='md:w-72 md:h-48 w-56 h-36 z-1 absolute top-21'/>
        </div>
        <h1 className='text-black text-xl font-extrabold  absolute bottom-3 left-3'>News websites</h1>
        </Link>
        </SplideSlide>           
            <SplideSlide key={6}>
             <Link className=""
      state={{ currentt: 13 }}>
        <div className="w-full h-96 bg-gray-200 rounded-xl relative flex flex-col justify-center items-center">
            <img src={lap} alt='' className='w-72 md:w-96'/>
            <img src={port} alt='' className='md:w-72 md:h-48 w-56 h-36 z-1 absolute top-21'/>
        </div>
        <h1 className='text-black text-xl font-extrabold  absolute bottom-3 left-3'>Personal React Portfolios</h1>
        </Link>
        </SplideSlide>           
            <SplideSlide key={5}>
             <Link className=""
      state={{ currentt: 13 }}>
        <div className="w-full h-96 bg-gray-200 rounded-xl relative flex flex-col justify-center items-center">
            <img src={lap} alt='' className='w-72 md:w-96'/>
            <img src={twelve} alt='' className='md:w-72 md:h-48 w-56 h-36 z-1 absolute top-21'/>
        </div>
        <h1 className='text-black text-xl font-extrabold  absolute bottom-3 left-3'>FoodStation</h1>
        </Link>
        </SplideSlide>           
            <SplideSlide key={4}>
             <Link className=""
      state={{ currentt: 13 }}>
        <div className="w-full h-96 bg-gray-200 rounded-xl relative flex flex-col justify-center items-center">
            <img src={lap}  alt='' className='w-72 md:w-96'/>
            <img src={six} alt=''  className='md:w-72 md:h-48 w-56 h-36 z-1 absolute top-21'/>
        </div>
        <h1 className='text-black text-xl font-extrabold  absolute bottom-3 left-3'>Youtube 2.0</h1>
        </Link>
        </SplideSlide>           
        </Splide>
    </div>
  )
}

export default OurProjects
