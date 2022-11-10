import React, { useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa';

const MyAllReviews = ({order,handelDelete}) => {
    const {_id, img , name,title,message, place} = order;
    // console.log(place);

    const [orderPlace, setOrderPlace] = useState({})

    useEffect(()=>{
        fetch(`http://localhost:5000/allPlace/${place}`)
        .then(res => res.json())
        .then(data => setOrderPlace(data))
    },[place])

    
   

    return (
        <div>
               <div>
            <div className="border  text-slate-500 text-md font-bold p-10 shadow-2xl">
              <div className="mx-auto">

              <img 
              className=" rounded-full mx-auto"
              style={{ height: "50px" }}
              title={title}
              src={img} alt="" />
              <h1 className="text-center font-bolder my-2">{name}</h1>
              <h1 className="text-center font-bolder my-2">{title}</h1>
              <p className="text-sm text-center">{message}</p>
             <div className='mt-3 flex justify-between'>
             <button onClick={()=> handelDelete(_id)} className=''>X</button>
             <button><FaEdit></FaEdit></button>
             </div>
              </div>
              
              </div>
            </div> 
        </div>
    );
};

export default MyAllReviews;