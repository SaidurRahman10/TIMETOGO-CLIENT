import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { myContext } from '../../Context/AuthProvider';
import useTitle from '../../Hooks/Hooks';
import newForm from '../../images/newForm.png'

const AddServices = () => {
    useTitle('Add Services')
    const {user} = useContext(myContext)



    const {  _id } = useLoaderData();
  
  const [orders, setOrders] = useState([])

  useEffect(()=>{
      fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setOrders(data))
  },[user?.email])

    const handlePlaceOrder = (event) =>{
        event.preventDefault()
   
        const form = event.target;
        const title = form.name.value;
        const email = user?.email || 'Unregister';
        const message = form.message.value;
        const price = form.price.value;
        const url = form.url.value;
        // const img = user?.photoURL || 'image'
    
   
   
        const service ={
          place:_id,
          title,
          price,
          description:message,
          img:url,
          rating:null,
          time:null,
          review:null
         
   
   
        }
        fetch('http://localhost:5000/allPlace',{
         method:'POST',
         headers:{
           'content-type':'application/json'
         },
         body:JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data =>{
         
   
         if(data.acknowledged){
           alert('Post Add SuccessFully')
           form.reset();
         }
   
   
        })
        .catch(err => console.log(err))
   
     }
   





    return (
       <div className='bg-white'>
        <h1 className='text-center text-5xl font-extrabold mb-5 text-green-400  '>ADD YOUR TOUR</h1>

       
        <div className='grid md:grid-cols-2'>
          <div>
                    <img src={newForm} alt="" />
         </div>
                
         <form onSubmit={handlePlaceOrder}>
                
                    <input name="name" type="text" placeholder="Title" className="input input-ghost rounded-xl shadow-xl  h-12 w-full input-bordered mb-5 p-5 mt-12" required/>
                    <input name="price" type="text" placeholder="Tour Price" className="input input-ghost rounded-xl shadow-xl  h-12 w-full input-bordered mb-5 p-5 required:" />
                    
                    <input name="url" type="text" placeholder="URL" className="input input-ghost rounded-xl shadow-xl  h-12 w-full input-bordered mb-5 p-5 required:" />
       
                    <input name="email" type="text" defaultValue={user?.email} placeholder="Your email"  className="input input-ghost rounded-xl shadow-xl h-12 w-full  input-bordered p-5" readOnly />

                 
                
                <textarea name="message" className="p-5 textarea textarea-bordered rounded-xl shadow-xl h-24 w-full mt-5" placeholder="Add Your Message" required></textarea>

                <input className='btn text-body-color hover:border-primary hover:bg-primary inline-block rounded-xl border hover:border-black py-3 px-9 text-base font-medium transition hover:bg-white bg-teal-500 hover:px-14  hover:text-black text-white' type="submit" value="Add Your Service" />
               
            </form>

            </div>
            </div>
        
    );
};

export default AddServices;