import React, { useContext, useEffect, useState } from "react";

import { Link, useLoaderData, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { myContext } from "../../Context/AuthProvider";
import SideReview from "./SideReview";
import useTitle from "../../Hooks/Hooks";

const SingelPlace = () => {
  // const location = useLocation()
  useTitle("Booking ");
  const { user , loading} = useContext(myContext);
  const { title, img, description, price, time, review, _id } = useLoaderData();
  const [replace, setReplace] = useState(true)
  const [orders, setOrders] = useState([]);

  
  useEffect(() => {
    fetch(`https://timetogo-server.vercel.app/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user?.email , replace]);



  const handlePlaceOrder = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = event.target.name.value;
    const email = user?.email || "Unregister";
    const message = event.target.message.value;
    const img = user?.photoURL || "image";

    const order = {
      place: _id,
      title,
      price,
      name,
      email,
      message,
      img,
    };
    fetch("https://timetogo-server.vercel.app/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          form.reset();
          setReplace(!replace)
        }
      })
      .catch((err) => console.log(err));
  };

  const notify = () => {
    toast("Review Add SuccessFully!");
  };

  if (loading) {
    return <div className="flex justify-center mt-32">
        
<div role="status">
    <svg aria-hidden="true" className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path>
    </svg>
    <span className="sr-only">Loading...</span>
</div>

    </div>
  }

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
              <p className="text-5xl font-bolder underline my-3 text-center">
                Description:
              </p>
              <p className="text-body-color mb-3 text-base leading-relaxed">
                {description}
              </p>
            </h3>

            <div className="flex justify-center gap-14">
              <h1 className="text-4xl font-extrabold  mb-3 mx-5 md:mx-0 text-yellow-700">
                Price: <span className="text-amber-500"> ${price}</span>
              </h1>
              <p className="font-bold text-lg text-lime-400">
                Tour Hours:{" "}
                <span className="text-2xl text-green-500">{time} H</span>{" "}
              </p>
            </div>

            <div className="flex gap-5 justify-center">
              <div></div>
            </div>
            <div className="mx-5 md:mx-0 mt-2 flex justify-center">
              <Link
                className="text-body-color hover:bg-primary inline-block rounded-full border border-black py-2 px-7 text-base font-medium transition hover:text-white hover:border-white   hover:bg-amber-300 text-black "
                to={`/allPlace`}
              >
                {" "}
                Back To Places
              </Link>
            </div>
          </div>
        </div>

        <div>
          {user?.uid ? (
            <div>
              <div>ALL Review</div>
              <div>
                <form onSubmit={handlePlaceOrder}>
                  <input
                    name="name"
                    type="text"
                    placeholder="Name "
                    className="input input-ghost rounded-xl shadow-xl  h-12 w-full input-bordered mb-5 p-5 mt-12"
                    required
                  />

                  <input
                    name="email"
                    type="text"
                    defaultValue={user?.email}
                    placeholder="Your email"
                    className="input input-ghost rounded-xl shadow-xl h-12 w-full  input-bordered p-5"
                    readOnly
                  />

                  <textarea
                    name="message"
                    className="p-5 textarea textarea-bordered rounded-xl shadow-xl h-24 w-full mt-5"
                    placeholder="Add Your Review"
                    required
                  ></textarea>

                  <input
                    onClick={notify}
                    className="btn text-body-color hover:border-primary hover:bg-primary inline-block rounded-xl border hover:border-black py-3 px-9 text-base font-medium transition hover:bg-white bg-teal-500 hover:px-14  hover:text-black text-white"
                    type="submit"
                    value="Add Review"
                  />
                  <ToastContainer />
                </form>
              </div>
              <div>
                {orders.map((order) => (
                  <SideReview key={order._key} order={order}></SideReview>
                ))}
              </div>
              <div>
                {review.map((rev) => (
                  <div className="border  text-slate-500 text-md font-bold p-10">
                    <div className="mx-auto">
                      <img
                        className=" rounded-full mx-auto"
                        style={{ height: "50px" }}
                        title={rev.name}
                        src={rev.img}
                        alt=""
                      />
                      <h1 className="text-center font-bolder my-2">
                        {rev.name}
                      </h1>
                      <p className="text-sm">{rev.review}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="">
              <h1 className="text-red-500 text-3xl text-center  font-extrabold">
                Please login to add a review!!!
              </h1>
              <Link className="flex justify-center" to="/login">
                <button className="w-full tracking-wider px-8 py-2.5 mt-6 text-sm text-teal-400  duration-300 transform border border-teal-500 hover:text-white rounded-md lg:w-auto hover:px-14 hover:bg-teal-500 focus:outline-none focus:bg-teal-500 ml-5">
                  Login
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingelPlace;
