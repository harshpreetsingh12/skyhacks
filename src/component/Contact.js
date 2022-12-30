import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import twit from '../img/twit.png' 
import link from '../img/in.png' 
import email from '../img/mail.png' 
import '../component/cssfiles/NH.css'
function Contact () {
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
    <div className='flex flex-col md:flex-row w-11/12 md:w-5/6 bg-black m-auto py-20 my-16 md:my-10 rounded-xl'>
    <div className='flex flex-col justify-center items-center md:w-1/2 w-full my-6'>
        <div className='flex flex-row bg-white w-4/5 px-5 my-3 rounded-lg transition duration-500 hover:bg-blue-400'>
            <a className='text-black font-extrabold flex flex-row h-12 w-full justify-center items-center relative' href='https://twitter.com/Harsh39208506'> 
            <img className='w-7 h-7 absolute left-3' src={twit} alt="" />Twitter Account</a>
        </div>
        <div className='flex flex-row bg-white w-4/5 px-5 my-3 rounded-lg transition duration-500 hover:bg-blue-400'>
            <a className='text-black font-extrabold flex flex-row h-12 w-full justify-center items-center relative' href='https://www.linkedin.com/in/harshpreet-singh-bca-230513221'> 
            <img className='w-7 h-7 absolute left-3' src={link} alt="" />Linkdin Account</a>
        </div>
        <div className='flex flex-row bg-white w-4/5 px-5 my-3 rounded-lg transition duration-500 hover:bg-blue-400'>
            <a className='text-black font-extrabold flex flex-row h-12 w-full justify-center items-center relative' href='mailto:harshpreets362@gmail.com?subject=For our esteemed customers'> 
            <img className='w-7 h-7 absolute left-3' src={email} alt="" /> Email us</a>
        </div>
    </div>  
    <div className='conright w-full md:w-1/2'> 
    <form  action="https://formspree.io/f/xdojybqp"  method="POST" className="mlogin">

        <input type="Name" className="smallinput" placeholder="Name" name="Name" id="Name" />
   
        <input type="emaill" className="smallinput" placeholder="Email" name="emaill" id="emaill" />

        <textarea name="Message" id="Message" className="texta" placeholder='Message'></textarea>

      <button type="submit" className="closebb">Submit</button>
      </form>
    </div>
    </div>
  )
}

export default Contact
