import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllPlace from './AllPlace';

const AllPlacesShow = () => {
    const allPlacesShow = useLoaderData()


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5 gap-5 mt-10 mb-20'>
            {
                allPlacesShow.map(places => <AllPlace key={places._id} newKey={places.newId} allPlaces={places}></AllPlace>)
            }
        </div>
    );
};

export default AllPlacesShow;