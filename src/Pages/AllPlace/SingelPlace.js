import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const SingelPlace = () => {
  const { title, img, description, price, rating, time } = useLoaderData();

  const notify = () => toast("Thanks For Booking!");

  return (
    <div>
      <div className="mb-10 overflow-hidden rounded-lg  grid grid-cols-1 md:grid-cols-2 gap-10 mx-5 mt-5">
        <div>
        <PhotoProvider>
      <PhotoView src={img}>
      <img src={img} className="w-full" alt="images" />
      </PhotoView>
    </PhotoProvider>
          <h3>
            <div className="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] mx-5 md:mx-0 mt-2">
              {title}
            </div>
          </h3>
          <div className="flex font-bold  mx-5 md:mx-0">
            {rating}{" "}
            <span className="flex ml-3 mt-">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf />
            </span>
            <span>({rating})</span>
          </div>
          <p className="font-bold my-2 mx-5 md:mx-0">Total Hours: {time} H</p>
          <h1 className="text-2xl font-extrabold  mb-3 mx-5 md:mx-0 ">
            Price: ${price}
          </h1>

          <button
            onClick={notify}
            type="button"
            className="items-start    text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-md rounded-lg text-md px-8 py-4 text-center  mb-2 mx-5 md:mx-0"
          >
            Book Now
          </button>
          <ToastContainer />
        </div>
        <div className="mx-5 md:mx-0">
          <p className="text-5xl font-bolder underline my-3">Description:</p>
          <p className="text-body-color mb-7 text-base leading-relaxed">
            {description}
          </p>

          <Link
            className="text-body-color hover:border-primary hover:bg-primary inline-block rounded-full border hover:border-black py-2 px-7 text-base font-medium transition hover:bg-white bg-teal-500 hover:text-black text-white"
            to={`/allPlace`}
          >
            {" "}
            Back To All Place
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingelPlace;
