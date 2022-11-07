import React, { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { myContext } from '../../AuthProvider/AuthProvider';
import reg1 from '../../img/reg1.png'



const Registration = () => {
    const [error, setError] = useState('')
    const {createUser} = useContext(myContext);
    const handelSubmit = (event) =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password);
        createUser(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();

        })
        .catch(error=>{
            console.error(error)
            setError(error.message)
           })




    }
    return (
        <div className='mx-12 mt-5 '>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
        <div className="block p-8 md:p-20 rounded-lg    border ">
<form onSubmit={handelSubmit}>

<div className="form-group mb-6">
<label htmlFor="exampleInputEmail1" className="form-label inline-block mb-2 font-bold">Enter Your Full Name</label>
<input name='name' type="text" className="form-control
block
w-full
px-3
py-1.5
text-base
font-normal
text-black
bg-white bg-clip-padding
border border-solid border-gray-300
rounded
transition
ease-in-out
m-0
focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail1"
aria-describedby="emailHelp" placeholder="Enter Your Full Name"/>

</div>
<div className="form-group mb-6">
<label htmlFor="exampleInputEmail1" className="form-label inline-block mb-2 font-bold">Photo URL</label>
<input name='photo' type="text" className="form-control
block
w-full
px-3
py-1.5
text-base
font-normal
text-black
bg-white bg-clip-padding
border border-solid border-gray-300
rounded
transition
ease-in-out
m-0
focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail1"
aria-describedby="emailHelp" placeholder="URL"/>

</div>
<div className="form-group mb-6">
<label htmlFor="exampleInputEmail1" className="form-label inline-block mb-2 font-bold">Email address</label>
<input name='email' type="email" className="form-control
block
w-full
px-3
py-1.5
text-base
font-normal
text-black
bg-white bg-clip-padding
border border-solid border-gray-300
rounded
transition
ease-in-out
m-0
focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail1"
aria-describedby="emailHelp" placeholder="Enter email"/>

</div>
<div className="form-group mb-6">
<label htmlFor="exampleInputPassword1" className="form-label inline-block mb-2 font-bold">Password</label>
<input name='password' type="password" className="form-control block
w-full
px-3
py-1.5
text-base
font-normal
text-black
bg-white bg-clip-padding
border border-solid border-gray-300
rounded
transition
ease-in-out
m-0
focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword1"
placeholder="Password" />
</div>
<h1 className='font-bold text-xs mb-10'>Already have an account?<Link className='text-blue-600' to='/login'> Please Log in</Link></h1>
<h1 className='my-2 text-red-600 font-bold'>{error}</h1>
<button type="submit" className="
text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Submit</button>
</form>
</div>

    <div className='flex justify-center items-center'>
        <img className='rounded-2xl'  src={reg1} alt="" />
    </div>
</div>




    </div>
    );
};

export default Registration;