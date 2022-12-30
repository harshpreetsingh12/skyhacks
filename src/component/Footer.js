import React from 'react'
import './cssfiles/NH.css'
import './cssfiles/navbar.css'
import logo from '../img/sky hacks.png' 
import {Link} from 'react-router-dom'
import twit from '../img/twit.png' 
import link from '../img/in.png' 
import email from '../img/mail.png' 

function Footer () {
  return (
    <div className='bg-black flex flex-col items-center p-6 pt-14 mt-12 md:mt-0'>
      <p className='text-gray-400 font-bold text-xl md:text-1xl'>Contact Us</p>
      <h1 className='text-white pt-2 font-extrabold text-2xl md:text-4xl text-center'><span className='text-2xl md:text-4xl m-5'>You,ve got this far.</span><br /> Ready to get started</h1>   
      <Link to={'/ContactUs'} className='noSelect'>
      <button className='touchbtn h-10 m-6 w-36 rounded-3xl bg-blue-700 font-extrabold text-white'>Get in Touch</button>
      </Link> 
      <div className='w-full flex flex-row mt-5'>
   <div className='w-4/6 h-full flex flex-col md:flex-row items-start md:items-center px-6 justify-between'>

    <img className='h-12 w-44 md-5 md:mx-10 rounded-md' src={logo} alt="" />
    <ul className='navbarul  mx-5 flex flex-col md:flex-row'>
      <Link to={'/'} className='noSelect'><li className='text-white'>Home</li></Link>
      <Link to={'/Services'} className='noSelect'><li className='text-white'>Services</li></Link>
      <Link to={'/About'} className='noSelect'><li className='text-white'>About</li></Link>
      <Link to={'/Work'} className='noSelect'><li className='text-white'>Works</li></Link>
    </ul>
   </div>
   <div className='w-2/6 flex flex-col md:flex-row justify-center items-center'>
    <a href='https://twitter.com/Harsh39208506'  className='noSelect'><img src={twit} alt=""  className='w-8 h-8 m-3'/></a> 
       <a href='mailto:harshpreets362@gmail.com?subject=For our esteemed customers' className='noSelect'><img src={email} alt=""  className='w-8 h-8 m-3'/></a>
    <a href='https://www.linkedin.com/in/harshpreet-singh-230513221/' className='noSelect'><img src={link} alt=""  className='w-8 h-8 m-3'/></a>
       </div>
    </div>
      </div>
  )
}

export default Footer
