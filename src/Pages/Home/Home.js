
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import banner from  '../../images/HeroBanner2.png'
import shape1 from  '../../images/shape1.png'
import shape2 from  '../../images/shape2.png'
import shape3 from  '../../images/shape3.png'
import TravelPage2 from '../travelPage/TravelPage2';
import FreePage from './FreePage';



const Home = () => {
    const [light, setLight] = useState([])

    useEffect(()=>{
        fetch('data.json')
    .then(res => res.json())
    .then(data => {
        setLight(data)
    })
   
    },[])
    return (
        <div>
        <div className="container px-6  mx-auto">
        <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg">
                    <p className=' italic font-bold text-teal-500'>Enjoy Your Travel With</p>
                    <h1 className="text-6xl leading-tight  font-semibold text-gray-800 uppercase  ">Trusted Travel <span className='text-teal-500'>Agency</span> </h1>
                    
                    <p className="mt-2 text-gray-500 ">Select a popular travel destination below to discover exclusive trips backed by our low price guarantee.</p>
                    
                    <button className="w-full tracking-wider px-6 py-2.5 mt-6 text-sm text-white  duration-300 transform bg-yellow-500 rounded-md lg:w-auto hover:bg-teal-500 focus:outline-none focus:bg-teal-500">Shop Now</button>
                   <Link to='/login'>
                   <button className='w-full tracking-wider px-8 py-2.5 mt-6 text-sm text-teal-400  duration-300 transform border border-teal-500 hover:text-white rounded-md lg:w-auto hover:bg-teal-500 focus:outline-none focus:bg-teal-500 ml-5'>Login</button>
                   </Link>
                </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 relative  lg:w-1/2 pt-16">
              <img className='w-4/5 ' src={banner} alt="" />
              <img className='absolute top-24 right-1 ' src={shape1} alt="" />
              <img className='absolute  top-14 left-1' src={shape2} alt="" />
              <img className='absolute bottom-20 left-1 hover:' src={shape3} alt="" />
              
            </div>
        </div>
    </div>

        <TravelPage2></TravelPage2>
       
    </div>
   
    );
};

export default Home;