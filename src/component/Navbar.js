import React, { useState, useEffect } from 'react';
import './cssfiles/NH.css'
import './cssfiles/navbar.css'
import logo from '../img/sky hacks.png' 
import styled from 'styled-components';
import {NavLink} from 'react-router-dom'
import {Link} from 'react-router-dom'
const Navbar = () => {
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
const navup = async ()=>{
    var line1=document.getElementById("line1")
    var line2=document.getElementById("line2")
    var line3=document.getElementById("line3")
    var nav=document.getElementById("fullnav")
   
    if (document.getElementById("fullnav").style.right=="-200px"){
        nav.style.right="0px"
        line1.style.display="none"
        line3.style.transform="rotate(-45deg)"
        line3.style.bottom="15px"
        line3.style.right="0px"
        line2.style.transform="rotate(45deg)"
        line2.style.bottom="15px"
        line2.style.right="0px"
    }
    else if (document.getElementById("fullnav").style.right=="0px"){
        nav.style.right="-200px"
        line1.style.display="block"
        line2.style.bottom="15px"
        line2.style.right="0px"
        line2.style.transform="rotate(0deg)"
        line3.style.bottom="5px"
        line3.style.right="0px"
        line3.style.transform="rotate(0deg)"
    }
  }
  return (
    <div id='fullnav' className='full-nav w-full h-20  flex flex-col md:flex-row'>
      <div className='bgnav fixed top-4 right-4 rounded-lg bg-[white] h-10 w-11'></div>
   <div className='conright w-4/6 h-full flex flex-row items-center px-6'>
    <Link to='/'>
   <img className='logo h-12 w-44 mx-10 rounded-md' src={logo} alt="" />
    </Link>
    <ul className='navbarul mx-5 flex flex-col md:flex-row'>
      <SLink to={'/'} onClick={window.scrollTo({top: 0, behavior: 'smooth'})} className='noSelect'><li className='text-black'>Home</li></SLink>
      <SLink to={'/Services'} onClick={window.scrollTo({top: 0, behavior: 'smooth'})} className='noSelect'><li className='text-black'>Services</li></SLink>
      <SLink to={'/About'} onClick={window.scrollTo({top: 0, behavior: 'smooth'})} className='noSelect'><li className='text-black'>About</li></SLink>
      <SLink to={'/Work'} onClick={window.scrollTo({top: 0, behavior: 'smooth'})} className='noSelect'><li className='text-black'>Works</li></SLink>
    </ul>
   </div>
   <div className=' conleft w-2/6 flex justify-center items-center'>
   <Link to={'/ContactUs'} className='noSelect'>
    <button className='touchbtn h-10 w-40 rounded-3xl bg-blue-200 font-extrabold text-blue-700'>Get in Touch</button>
    </Link>
   </div>
   <button className='noSelect navbtn middlenav z-1'  onClick={navup} >
        <div className="middlenav" id='middlenav'>
                    <div className="line3" id="line1"></div>
                    <div className="line3" id="line2"></div>
                    <div className="line3" id="line3"></div>
                </div>
            </button> 
    </div>
  )
}
const SLink = styled(NavLink)`
&.active{
    color: rgb(227, 19, 255);
}
`


export default Navbar
