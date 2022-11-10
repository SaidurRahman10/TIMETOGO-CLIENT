import React, { useContext, useEffect, useState } from "react";


import { Link, useLoaderData, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { myContext } from "../../Context/AuthProvider";
import SideReview from "./SideReview";
import useTitle from "../../Hooks/Hooks";



const SingelPlace = () => {
  // const location = useLocation()
  useTitle('Booking ')
  const {user} = useContext(myContext)
  const { title, img, description, price, time , review , _id } = useLoaderData();
  
  const [orders, setOrders] = useState([])

  useEffect(()=>{
      fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setOrders(data))
  },[user?.email])

  
  
  
  const handlePlaceOrder = (event) =>{
     event.preventDefault()

     const form = event.target;
     const name = event.target.name.value;
     const email = user?.email || 'Unregister';
     const message = event.target.message.value;
     const img = user?.photoURL || 'image'
 


     const order ={
       place:_id,
       title,
       price,
       name,
       email,
       message,
       img


     }
     fetch('http://localhost:5000/orders',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(order)
     })
     .then(res => res.json())
     .then(data =>{
      

      if(data.acknowledged){
       
       
        form.reset();
      }


     })
     .catch(err => console.log(err))

  }

  
   
  

  const notify = () => {
    toast("Review Add SuccessFully!")
    window.location.reload()
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
            <p className="text-5xl font-bolder underline my-3 text-center">Description:</p>
          <p className="text-body-color mb-3 text-base leading-relaxed">
            {description}
          </p>
          </h3>
          
         <div className="flex justify-center gap-14">

          <h1 className="text-4xl font-extrabold  mb-3 mx-5 md:mx-0 text-yellow-700">
            Price: <span className="text-amber-500"> ${price}</span>
          </h1>
          <p className="font-bold text-lg text-lime-400">Tour Hours: <span className="text-2xl text-green-500">{time} H</span> </p>
         </div>
          
    <div className="flex gap-5 justify-center">

<div>

   
       
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


        <div>
          { user?.uid ?
            <div>

        
         <div>ALL Review</div>
         <div>
          
         <form onSubmit={handlePlaceOrder}>
                
                
                    <input name="name" type="text" placeholder="Name " className="input input-ghost rounded-xl shadow-xl  h-12 w-full input-bordered mb-5 p-5 mt-12" required/>
       
                    <input name="email" type="text" defaultValue={user?.email} placeholder="Your email"  className="input input-ghost rounded-xl shadow-xl h-12 w-full  input-bordered p-5" readOnly />
                
                <textarea name="message" className="p-5 textarea textarea-bordered rounded-xl shadow-xl h-24 w-full mt-5" placeholder="Add Your Review" required></textarea>

                <input  onClick={notify} className='btn text-body-color hover:border-primary hover:bg-primary inline-block rounded-xl border hover:border-black py-3 px-9 text-base font-medium transition hover:bg-white bg-teal-500 hover:px-14  hover:text-black text-white' type="submit" value="Add Review" />
                <ToastContainer />
               
            </form>

         </div>
         <div>
           {
            orders.map(order => <SideReview key={order._key} order={order}></SideReview>)
           }
         </div>
         <div>
          {
            review.map( rev => <div className="border  text-slate-500 text-md font-bold p-10">
              <div className="mx-auto">

              <img 
              className=" rounded-full mx-auto"
              style={{ height: "50px" }}
              title={rev.name}
              src={rev.img} alt="" />
              <h1 className="text-center font-bolder my-2">{rev.name}</h1>
              <p className="text-sm">{rev.review}</p>
              </div>
              
              </div>)
          }
         </div>
        </div>
        :
        <div className="">
        <h1 className="text-red-500 text-3xl text-center  font-extrabold">Please login to add a review!!!</h1>
        <Link className="flex justify-center" to='/login'>
                   <button className='w-full tracking-wider px-8 py-2.5 mt-6 text-sm text-teal-400  duration-300 transform border border-teal-500 hover:text-white rounded-md lg:w-auto hover:px-14 hover:bg-teal-500 focus:outline-none focus:bg-teal-500 ml-5'>Login</button>
                   </Link>
        </div>
        


      
      }

      </div>
    </div>
    </div>
  );
};

export default SingelPlace;
