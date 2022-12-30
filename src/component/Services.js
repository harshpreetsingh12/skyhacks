import React,{useEffect} from 'react'

const Services = () => {
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
    <div className='w-full flex justify-center items-center my-5'>
        <div className='innerdiv rounded-3xl bg-black flex justify-center  p-5 py-10 md:py-10 md:my-1 my-14 items-center flex-col'>
      <h1 className='text-gray-500 text-lg font-extrabold mb-5'>Our Services</h1>
      <h1 className='text-white text-xl md:text-5xl font-extralight'>We Help Buisness To Help There {"\n"} Product Grow World Wide</h1>
      <div className='flex flex-col md:flex-row px-5 justify-center items-center my-2'>
        <img className='h-full w-96 m-5 rounded-xl mt-10' src="https://assets.justinmind.com/wp-content/uploads/2019/10/best-20-web-development-blogs.png" alt="" />
        <div className='flex-col flex py-3 md:p-5'>
        <h1 className='text-white text-2xl my-3 font-extralight'>Static Website Development</h1>
        <h1 className='text-white text-2xl my-2 font-extralight flex flex-col'>Starting from ₹500 <span className='text-sm'>[According to type of website]</span></h1>

        <p className='text-white'>Website and E commerce do not have to be expensive or complicated in order to be <br/>effective. We deal with a wide spectrum of clients with varrying budgets and need. <br/>We make professional portfolios and static websites in affordable rates</p>
        </div>
      </div>
      <div className='flex flex-col md:flex-row px-5 justify-center items-center my-2'>
        <img className='h-full w-96 m-5 rounded-xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwvCwJUnGIFcDX_QOd3m-qFjUbmXoIHvM4yA&usqp=CAU" alt="" />
        <div className='flex-col flex py-3 md:p-5'>
        <h1 className='text-white text-2xl my-3 font-extralight'>Web App Development</h1>
        <h1 className='text-white text-2xl my-2 font-extralight flex flex-col'>Starting from ₹1200 <span className='text-sm'>[According to type of web app]</span></h1>

        <p className='text-white'>We Provide web Applications on a variety of open source platform to enable optimal <br/> budget management.</p>
        </div>
      </div>
      <div className='flex flex-col md:flex-row px-5 justify-center items-center my-2'>
        <img className='h-full w-96 m-5 rounded-xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlS6BYevby2D8r-htao0Bb3IK-i3WxwCFk5Q&usqp=CAU" alt="" />
        <div className='flex-col flex py-3 md:p-5'>
        <h1 className='text-white text-2xl my-3 font-extralight'>Mobile App Development</h1>
        <h1 className='text-white text-2xl my-2 font-extralight flex flex-col'>Starting from ₹1500 <span className='text-sm'>[According to type of Application]</span></h1>
        <p className='text-white'>Website and E commerce do not have to be expensive or complicated in order to be <br/>effective. We deal with a wide spectrum of clients with varrying budgets and need.</p>
        </div>
      </div>
        </div>
    </div>
  )
}

export default Services
