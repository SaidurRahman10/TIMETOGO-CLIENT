import React from "react";

import { Link, useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const SingelPlace = () => {
  const { title, img, description, price, time } = useLoaderData();

  const notify = () => toast("Thanks For Booking!");

  return (
    <div>
      <div className="grid lg:grid-cols-2 ">

      <div className="mb-10 overflow-hidden rounded-lg  gap-10 mx-5 mt-5">
        <div className="">
        <PhotoProvider>
      <PhotoView src={img}>
      <img src={img} className="w-full" alt="images" />
      </PhotoView>
    </PhotoProvider>
          <h3>
            <div className=" text-lg my-3 font-extrabold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-2xl text-center">
              {title}
            </div>
            <p className="text-5xl font-bolder underline my-3 text-center">Description:</p>
          <p className="text-body-color mb-3 text-base leading-relaxed">
            {description}
          </p>
          </h3>
          
         <div className="flex justify-center gap-14">

          <h1 className="text-4xl font-extrabold  mb-3 mx-5 md:mx-0 ">
            Price: <span className="text-amber-500"> ${price}</span>
          </h1>
          <p className="font-bold text-lg text-lime-400">Tour Hours: <span className="text-2xl text-green-500">{time} H</span> </p>
         </div>
          
    <div className="flex gap-5 justify-center">

<div>

    <button
            onClick={notify}
            type="button"
            className="text-body-color hover:border-primary hover:bg-primary inline-block rounded-xl border hover:border-black py-3 px-9 text-base font-medium transition hover:bg-white bg-teal-500 hover:px-14  hover:text-black text-white"
          >
            Book Now
          </button>
          <ToastContainer />
</div>
       
      
      </div>
      <div className="mx-5 md:mx-0 mt-2 flex justify-center">
         

         <Link
           className="text-body-color hover:bg-primary inline-block rounded-full border border-black py-2 px-7 text-base font-medium transition hover:text-white hover:border-white   hover:bg-amber-300 text-black "
           to={`/allPlace`}
         >
           {" "}
           Back To  Places
         </Link>
       </div>
    </div>
    </div>


        <div className="text-center text-5xl">
          Reviews
        </div>

      </div>
    </div>
  );
};

export default SingelPlace;
