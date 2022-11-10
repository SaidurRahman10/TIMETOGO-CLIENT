import React, { useContext, useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

import { myContext } from '../../Context/AuthProvider';
import useTitle from '../../Hooks/Hooks';
import MyAllReviews from './MyAllReviews';

const MyReview = () => {
    const {user} = useContext(myContext);
    const [orders, setOrders] = useState([])

    const notify = () => {
        toast("Review Add SuccessFully!")
        // window.location.reload()
      }

    useEffect(()=>{
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[user?.email])

    useTitle('MY Review')

    const handelDelete = id =>{
        const proceed = window.confirm('Are you sure, You Want to Delete This Review');
        if (proceed) {
            fetch(`http://localhost:5000/orders/${id}`,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                   alert('Delete Succefully')
                    const remaining = orders.filter(odr => odr._id !== id);
                    setOrders(remaining);
                }
            })
            .catch(error => console.log(error))
            // window.location.reload()
        }
    }
    


    return (
        <div className='grid grid-cols-3 mx-5 my-5 gap-10'>
             {
            orders.map( order => <MyAllReviews key={order._id} order={order} handelDelete={handelDelete}></MyAllReviews>
            
          
            )
        }
        </div>
    );
};

export default MyReview;