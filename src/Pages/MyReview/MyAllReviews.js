import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";


const MyAllReviews = ({ order, handelDelete }) => {
  const { _id, img, name, title, message, place } = order;
  // console.log(place);

  const [orderPlace, setOrderPlace] = useState({});

  useEffect(() => {
    fetch(`https://timetogo-server.vercel.app/allPlace/${place}`)
      .then((res) => res.json())
      .then((data) => setOrderPlace(data));
  }, [place]);
 

  return (
    <div>
      {
        <div>
          <div className="border  text-md  p-10 shadow-2xl">
            <div className="mx-auto">
              <img
                className=" rounded-full mx-auto"
                style={{ height: "50px" }}
                title={title}
                src={img}
                alt=""
              />
              <h1 className="text-center  my-2 font-extrabold uppercase">
                {name}
              </h1>
              <h1 className="text-center font-bolder mt-2 mb-5 font-bold text-green-400">
                {title}
              </h1>
              <p className="text-center font-bold underline">Review</p>
              <p className="text-sm text-center h-24 text-slate-500 border rounded-lg shadow-lg border-slate-400 p-2">
                {message}
              </p>
              <div className="mt-3 flex justify-between">
                <button>
                  <FaTrash
                    className="h-8 w-8 hover:text-red-500"
                    onClick={() => handelDelete(_id)}
                    
                  ></FaTrash>
                   <ToastContainer />
                
                </button>
                
                <Link to={`/update/${_id}`}>
                  <button>
                    <FaEdit className="h-9 w-9 hover:text-green-500"></FaEdit>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default MyAllReviews;
