import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const AllPlace = ({allPlaces}) => {
  
  

 

    const  {_id , img, title, description , price, rating} = allPlaces;
    return (
       <div>


<section className="bg-[#F3F4F6]   shadow-sm mb-20">
  <div className="container mx-auto">
    <div className=" flex flex-wrap">
      <div className="w-full ">
        <div className=" overflow-hidden rounded-lg bg-white">
          
        <PhotoProvider>
      <PhotoView src={img}>
      <img src={img} className="w-full" alt="images" />
      </PhotoView>
    </PhotoProvider>
          <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
            <h3>
              <div
             
                className="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
              >
               {title}
              </div>
            </h3>
            <p className="text-slate-500 mb-7 text-base leading-relaxed">
             {description.slice(0,99)}...
            </p>
            <div className='font-bold text-xl mb-5'>Tour Price: $ {price}</div>
         <Link to={`/allPlace/${_id}`}
             
              className="text-white  hover:bg-transparent inline-block rounded-full border hover:border-teal-500 bg-teal-500 py-2 px-7 text-base font-medium transition hover:text-teal-500 "
            >
              View Details
            </Link>
          </div>
        </div>
  
   
      
      </div>
    </div>
  </div>
</section>



       </div>
    );
  }

export default AllPlace;