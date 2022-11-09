import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const MyAllReviews = ({order}) => {
    const {_id, img , customer,placeName,message, place} = order;

    const [orderPlace, setOrderPlace] = useState({})

    useEffect(()=>{
        fetch(`http://localhost:5000/orders/${place}`)
        .then(res => res.json())
        .then(data => setOrderPlace(data))
    },[place])


   

    return (
        <div>
               <div>
            <div className="border  text-slate-500 text-md font-bold p-10">
              <div className="mx-auto">

              <img 
              className=" rounded-full mx-auto"
              style={{ height: "50px" }}
              title={placeName}
              src={img} alt="" />
              <h1 className="text-center font-bolder my-2">{customer}</h1>
              <p className="text-sm text-center">{message}</p>
             <div className='mt-3 flex justify-between'>
             <button><FaTrash></FaTrash></button>
             <button><FaEdit></FaEdit></button>
             </div>
              </div>
              
              </div>
            </div> 
        </div>
    );
};

export default MyAllReviews;