import React from 'react';
import { FaTripadvisor } from 'react-icons/fa';
import imgBanner from '../../../images/img2.png'

const TravelerReview = () => {
    return (
        <div>
             <div className="container px-6  mx-auto ">
                <div className=''>
               <h1 className='justify-center font-extrabold text-4xl  text-slate-600 flex'><FaTripadvisor className='mr-5 h-11 w-11'></FaTripadvisor> OUR TRAVELER REVIEW </h1>
                </div>
        <div className="items-center lg:flex">

        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 relative  lg:w-1/2 pt-16">
              <img className=' ' src={imgBanner} alt="" />
            
            </div>




            <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg">
                    <p className=' italic font-bold text-teal-500 text-sm'>Visitor</p>
                    <h1 className="text-3xl leading-tight  font-semibold text-gray-800 uppercase  ">Saidur Rahman </h1>
                    
                    <p className="mt-2 text-gray-500 ">Excellent private tour. Our guide was incredibly knowledgable and gave us a fantastic day in Riga. We learnt about history, art, culture and much more. We are well traveled and have high standards, and we were very happy with our tour guide - she was great and spoke excellent English. Time and money well invested.A must-do! A great way to kick off a trip to Riga! Our guide was very knowledgeable and friendly and we had a great time eating our way around the market. Definitely go on an empty stomach because we were in a food coma afterwards! Our guide gave recommendations for eating and drinking out in Riga, which we took and were not disappointed. Can’t recommend enough.An excellent introduction to Riga. An informative and extensive tour. Our guide was very knowledgeable and told us all about the different areas we visited (old town, art nouveau district, Freedom Monument, central market) and made excellent recommendations for foods to try. Highly recommended.</p>
                    <div className='mt-6'>

                     
                     

                    </div>
                  
                </div>
            </div>

           
        </div>
    </div>
        </div>
    );
};

export default TravelerReview;