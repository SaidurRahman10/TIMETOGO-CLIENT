import React, { useContext } from 'react';
import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'
import { myContext } from '../../../Context/AuthProvider';
import { FaUser } from "react-icons/fa";

const Header = () => {
    const [openNav, setOpenNav] = useState(false);
     const {user,logOut} = useContext(myContext)
     console.log(user?.photoURL);
     
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const handelLogOut = () =>{
    logOut()
    .then(result=>{})
    .catch(error => console.error(error))
  }
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to='/' className="flex items-center hover:text-lg duration-300 transform hover:text-amber-200 font-bold  ">
        Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
         <Link to='/blog'  className="flex items-center hover:text-lg duration-300 transform hover:text-amber-200 font-bold ">
         Blog
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link  className="flex items-center hover:text-lg duration-300 transform hover:text-amber-200 font-bold ">
       Blocks
        </Link>
      </Typography>
     
    </ul>
  );
 
  return (
    <Navbar className="mx-auto  py-2 px-4 lg:px-8 lg:py-4 bg-teal-500 text-white">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-normal"
        >
       <Link to='/'>
       <img  src={logo} alt="" />
       </Link>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex gap-6">
            <div className="hidden md:block">
              {user?.photoURL ? (
                <img
                  className=" rounded-full"
                  style={{ height: "50px" }}
                  src={user?.photoURL}
                  alt={user?.displayName}
                  title={user?.displayName}
                />
              ) : (
                <FaUser
                  className="mt-2 w-10 h-8"
                  title={user?.displayName}
                ></FaUser>
              )}
            </div>
            <div className="mt-1">
              {user?.uid ? (
                <button
                  onClick={handelLogOut}
                  type="button"
                  className=" hidden md:block text-white font-bold  bg-purple-600 rounded-lg text-base px-8 py-2 text-center mr-2 mb-2"
                >
                  Log Out
                </button>
              ) : (
                <Link to="/login">
                  <button
                    type="button"
                    className=" hidden md:block text-white font-bold  bg-slate-700  rounded-lg text-base px-8 py-2 text-center mr-2 mb-2"
                  >
                    Log In
                  </button>
                </Link>
              )}
            </div>
           
          </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        {navList}
        <Button variant="gradient" size="sm" fullWidth className="mb-2">
          <span>Buy Now</span>
        </Button>
      </MobileNav>
    </Navbar>
  );
}

export default Header;