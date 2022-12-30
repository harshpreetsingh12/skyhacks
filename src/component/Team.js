import React,{useEffect} from 'react'
import '@splidejs/splide/dist/css/splide.min.css'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { Link } from "react-router-dom";
import harshpreet from '../img/harshpreet.jpg'
import vansh from '../img/vansh.jpg'
import manoj from '../img/manoj.jpg'
import './cssfiles/navbar.css'
const Team = (props) => {
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
    <>
    <div className='flex md:flex-row flex-col py-10 md:py-1'>
      <div className='w-full md:w-1/2 flex flex-col justify-center items-center md:items-start px-2 md:px-20'>
      <h1 className='text-black font-bold text-xl md:text-3xl'>Our Projects</h1>
      <h1 className='my-4 text-xl  md:text-4xl font-extrabold text-black'>The Team Will Turn <br /> Your Ideas Into Reality</h1>
      <p className='my-4 font-extrabold'>We feel that in this digital age connection is required to develop an successful corporate empire. Having user focued website or mobile application that are simple to use and can increase your market competitiveness.</p>
      <Link to={'/About'} onClick={window.scrollTo({top: 0, behavior: 'smooth'})}>
        <button className='noSelect touchbtn h-10 my-4 w-36 rounded-3xl bg-gray-300 font-extrabold text-blue-700'>More About Us</button></Link>
      <div className='rounded-lg flex flex-row flex-wrap justify-center items-center px-4 border-2 border-gray-300'>
        <div className='flex flex-col w-32 m-4 justify-center items-center'> <h1 className='font-extrabold text-4xl text-black'>1+</h1> <p className='font-extrabold'>Operated Years</p></div>
        <div className='flex flex-col w-32 m-4 justify-center items-center'> <h1 className='font-extrabold text-4xl text-black'>5+</h1> <p className='font-extrabold'>Happy Clients</p></div>
        <div className='flex flex-col w-32 m-4 justify-center items-center'> <h1 className='font-extrabold text-4xl text-black'>10+</h1> <p className='font-extrabold'>Professional</p></div>
        <div className='flex flex-col w-32 m-4 justify-center items-center'> <h1 className='font-extrabold text-4xl text-black'>20</h1> <p className='font-extrabold'>Amazing Projects</p></div>
      </div>
      </div>
      <div className='w-full md:w-1/2 my-8 md:my-1 flex justify-center items-center'>
        <img className='h-4/5 w-4/5 rounded-lg' src="https://images.unsplash.com/photo-1526657782461-9fe13402a841?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1384&q=80" alt="" />
    </div>
    </div>

<div className=' mb-10 px-5  md:px-20'>
<Splide className='' options={{
            perPage: 2,
            type: "loop",
            autoScroll: {
                pauseOnHover: false,
                pauseOnFocus: false,
                rewind: false,
                speed: 1
              },
            breakpoints: {
                  900: {
                      perPage: 2,
                  },
                  600:{
                    perPage:1,
                  }
            },
            // perMove:1,
            arrows:false,
            paginations: false,
            drag: 'free',
            snap:true,
            gap:"20px",
            pagination:false,
        }}
        extensions={{ AutoScroll }}>
          <SplideSlide key={1}>
          <Link className="flex flex-col justify-center items-center"
      state={{ currentt: 13 }}>
          <div className="w-full h-80 rounded-xl bg-gray-300 relative flex flex-col justify-center items-center">
            <img src={harshpreet} className='md:w-56 h-full z-2'/>
        </div>
            <h1 className='text-black text-xl font-extrabold'>Harshpreet singh</h1>
            <h1 className='text-black text-xl font-extrabold'>Full Stack Engineer</h1>
        </Link>
        </SplideSlide>      
          <SplideSlide key={2}>
          <Link className="flex flex-col  justify-center items-center"
      state={{ currentt: 13 }}>
          <div className="w-full h-80  rounded-xl bg-gray-300 relative flex flex-col justify-center items-center">
            <img src={manoj} className=' md:w-56 h-full z-2'/>
        </div>
            <h1 className='text-black text-xl font-extrabold'>Manoj Kumar</h1>
            <h1 className='text-black text-xl font-extrabold'>Front end Engineer</h1>
        </Link>
        </SplideSlide>      
          <SplideSlide key={3}>
             <Link className="flex flex-col  justify-center items-center"
      state={{ currentt: 13 }}>
          <div className="w-full h-80 rounded-xl bg-gray-300 relative flex flex-col justify-center items-center">
            <img src={vansh} className='h-full md:w-56 z-2'/>
        </div>
            <h1 className='text-black text-xl font-extrabold'>Vansh Mittal</h1>
            <h1 className='text-black text-xl font-extrabold'>Node js Backend Engineer</h1>
        </Link>
        </SplideSlide>      
          </Splide>
</div>
    </>
  )
}

export default Team