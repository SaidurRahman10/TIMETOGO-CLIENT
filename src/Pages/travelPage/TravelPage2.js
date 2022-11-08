import React from 'react';
import banner2 from '../../images/img1.png'
import {FaCompass ,FaDollarSign, FaUmbrellaBeach } from 'react-icons/fa';

const TravelPage2 = () => {
    return (
        <div>
             <div className="container px-6  mx-auto">
        <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg">
                    <p className=' italic font-bold text-teal-500 text-sm'>Enjoy Your Travel With</p>
                    <h1 className="text-4xl leading-tight  font-semibold text-gray-800 uppercase  ">Trusted Travel <span className='text-teal-500'>Agency</span> </h1>
                    
                    <p className="mt-2 text-gray-500 ">I travel not to go anywhere, but to go. I travel for travel's sake the great affair is to move.</p>
                    <div className='mt-6'>

                        <div className='mt-5'>
                            <h2 className='font-bold text-3xl uppercase flex gap-2 mb-5'><FaCompass className='bg-teal-500 rounded-full text-white  w-12 h-12 '></FaCompass> Tour guide</h2>
                            <h4 className='ml-9 text-slate-700'> Tour guides ensure that itineraries are met and that customers are being informed in an entertaining manner the location they are touring.</h4>
                        </div>
                        <div className='mt-5'>
                            <h2 className='font-bold text-3xl uppercase flex gap-2 mb-5'><FaDollarSign className='bg-teal-500 rounded-full text-white w-10 h-10'></FaDollarSign> Friendly price</h2>
                            <h4 className='ml-9 text-slate-700'> Tour guides ensure that itineraries are met and that customers are being informed in an entertaining manner the location they are touring.</h4>
                        </div>
                        <div className='mt-5'>
                            <h2 className='font-bold text-3xl uppercase flex gap-2 mb-5'><FaUmbrellaBeach className='bg-teal-500 rounded-full text-white w-10 h-10'></FaUmbrellaBeach> Reliable tour</h2>
                            <h4 className='ml-9 text-slate-700'> Tour guides ensure that itineraries are met and that customers are being informed in an entertaining manner the location they are touring.</h4>
                        </div>
                     

                    </div>
                  
                </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 relative  lg:w-1/2 pt-16">
              <img className=' ' src={banner2} alt="" />
            
            </div>
        </div>
    </div>
        </div>
    );
};

export default TravelPage2;