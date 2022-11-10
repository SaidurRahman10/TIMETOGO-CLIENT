import React, { useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import { myContext } from "../../Context/AuthProvider";
import useTitle from "../../Hooks/Hooks";
import MyAllReviews from "./MyAllReviews";

const MyReview = () => {
  const { user } = useContext(myContext);
  const [orders, setOrders] = useState([]);

  const notify = () => {
    toast("Review Add SuccessFully!");
    // window.location.reload()
  };

  useEffect(() => {
    fetch(`https://timetogo-server.vercel.app/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user?.email]);

  useTitle("MY Review");
 
  const handelDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, You Want to Delete This Review"
    );
    if (proceed) {
      fetch(`https://timetogo-server.vercel.app/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast("Review Delete SuccessFully!");
            const remaining = orders.filter((odr) => odr._id !== id);
            setOrders(remaining);
          }
        })
        .catch((error) => console.log(error));
      
    }
  };

  return (
    <div>
      {orders.length > 0 ? (
        <div className="grid  md:grid-cols-2 lg:grid-cols-3 mx-5 my-5 gap-10">
          {orders.map((order) => (
            <MyAllReviews
              key={order._id}
              order={order}
              handelDelete={handelDelete}
            ></MyAllReviews>
          ))}
        </div>
      ) : (
        <div className="text-center text-5xl font-extrabold text-red-500 mt-12 ">
          No reviews were added!!!
        </div>
      )}
    </div>
  );
};

export default MyReview;
