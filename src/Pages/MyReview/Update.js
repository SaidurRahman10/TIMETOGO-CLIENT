import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const oldReview = useLoaderData();

  const [user,setUser] = useState(oldReview)
  
//   console.log(oldReview._id);

  const handleUpdateReview = (event) => {
    event.preventDefault();
    // console.log(user);

    fetch(`http://localhost:5000/orders/${oldReview._id}`,{
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
        if (data.modifiedCount > 0){
            alert('Review Updated')
            console.log(data);
        }
        
    })
}

  const handelInputChange = event => {
    const field = event.target.name;
    const value = event.target.value;
    const newUser = {...user}
    newUser[field] = value;
    setUser(newUser)

  }




  return (
    <div className="mx-5">
        <h1 className="text-center text-5xl">{oldReview?.name}</h1>
      <form onSubmit={handleUpdateReview}>
        <input
      
          name="name"
          type="text"
          defaultValue={oldReview?.name}
          placeholder="Name "
          className="input input-ghost rounded-xl shadow-xl  h-12 w-full input-bordered mb-5 p-5 mt-12"
          required
          readOnly
        />

        <input
          name="email"
          type="text"
          defaultValue={oldReview?.email}
          placeholder="Your email"
          className="input input-ghost rounded-xl shadow-xl h-12 w-full  input-bordered p-5"
          readOnly
        />

        <textarea
          onChange={handelInputChange}
          name="message"
          defaultValue={oldReview?.message}
          className="p-5 textarea textarea-bordered rounded-xl shadow-xl h-24 w-full mt-5"
          placeholder="Update Your Review"
          required
        ></textarea>

        <input
          className="mb-5 btn text-body-color hover:border-primary hover:bg-primary inline-block rounded-xl border hover:border-black py-3 px-9 text-base font-medium transition hover:bg-white bg-teal-500 hover:px-14  hover:text-black text-white"
          type="submit"
          value="Update Review"
        />
      </form>
    </div>
  );
};

export default Update;
