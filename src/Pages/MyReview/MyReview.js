import React, { useContext, useEffect, useState } from 'react';

import { myContext } from '../../Context/AuthProvider';
import useTitle from '../../Hooks/Hooks';
import MyAllReviews from './MyAllReviews';

const MyReview = () => {
    const {user} = useContext(myContext);
    const [orders, setOrders] = useState([])



    useEffect(()=>{
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[user?.email])

    useTitle('MY Review')
    


    return (
        <div className='grid grid-cols-3 mx-5 my-5 gap-10'>
             {
            orders.map( order => <MyAllReviews key={order._id} order={order} ></MyAllReviews>
            
          
            )
        }
        </div>
    );
};

export default MyReview;