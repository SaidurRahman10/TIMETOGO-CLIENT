import React, { useEffect, useState } from 'react';

const SideReview = ({order}) => {
    const {place} = order;
    // const [orderPlace, setOrderPlace] = useState({})
 

    // useEffect(()=>{
    //     fetch(`http://localhost:5000/orders/${place}`)
    //     .then(res => res.json())
    //   .then(data => setOrderPlace(data))
    //   console.log('OrderPlace',orderPlace);

    // },[place])
    return (
       
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
         
       
    );
};

export default SideReview;