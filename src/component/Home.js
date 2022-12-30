import React,{useEffect} from 'react'
import one from '../img/two.jpg' 
import {Link} from 'react-router-dom';
import './cssfiles/navbar.css'
const Home = () => {
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
    <div className='w-full flex flex-col md:flex-row items-center px-1 pt-16 md:pt-1 md:pr-10 '>
      <div className='homeimg relative mx-5 w-full md:w-4/6'>
     <img src={one} alt="" className='w-full rounded-3xl h-full'/>
     <div className='absolute bottom-0 w-full flex flex-col md:flex-row md:items-center md:py-0 py-5 items-start'>
      <div className='flex flex-col py-10 px-5 md:pl-20  w-full md:w-4/6 '>
        <p  className='text-white text-sm py-2'>SOFTWARE DEVELOPMENT SERVICE</p>
        <h1 className='text-white text-xl md:text-3xl font-extrabold'>We are website & app development agency</h1>
      </div>
      <div className='w-full md:w-2/6 flex justify-center md:justify-end items-end mr-10 md:mr-20'>
        <Link to={'/ContactUs'} className='noSelect'>
      <button className=' touchbtn h-10 w-36 rounded-3xl bg-white font-extrabold text-blue-700'>Get in Touch</button>
        </Link>
      </div>
     </div>
      </div>
      <div className='w-full md:w-2/6 px-10'>
      <img className='rounded-3xl h-72 w-full' src="https://images.news18.com/ibnlive/uploads/2021/07/1627463937_windows-11.jpg" alt="" />
      <div className='relative flex justify-center flex-col'>
      <h1 className='text-gray-400 font-extrabold text-base'>About Our Team</h1>
      <h1 className='font-extrabold text-black text-3xl'>About</h1>
      <Link to={'/About'}>
      <button className='roundbtn rounded-full h-10 w-10 absolute right-2 bottom-0 bg-gray-400 text-xl font-extrabold'>&rarr;</button>
      </Link>
      </div>
      </div>
    </div>
  )
}

export default Home
