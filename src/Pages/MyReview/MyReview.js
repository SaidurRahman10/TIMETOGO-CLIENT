import React, { useContext, useEffect, useState } from 'react';
import { myContext } from '../../Context/AuthProvider';

const MyReview = () => {
    const {user} = useContext(myContext);
    const [orders, setOrders] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/orders?email=${user.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[user?.email])





    return (
        <div className='grid grid-cols-3 mx-5 my-5 gap-10'>
             {
            orders.map( order =>
            
             <div>
            <div className="border  text-slate-500 text-md font-bold p-10">
              <div className="mx-auto">

              <img 
              className=" rounded-full mx-auto"
              style={{ height: "50px" }}
              title={order.placeName}
              src={order.img} alt="" />
              <h1 className="text-center font-bolder my-2">{order.customer}</h1>
              <p className="text-sm text-center">{order.message}</p>
              </div>
              
              </div>
            </div> 
            )
        }
        </div>
    );
};

export default MyReview;