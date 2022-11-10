import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddServices from "../../Pages/AddServices/AddServices";
import AllPlacesShow from "../../Pages/AllPlace/AllPlacesShow";
import SingelPlace from "../../Pages/AllPlace/SingelPlace";
import Blog from "../../Pages/Blog/Blog";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";

import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Registration from "../../Pages/Login/Registration";
import MyReview from "../../Pages/MyReview/MyReview";
import Update from "../../Pages/MyReview/Update";
import PrivateRoute from "../PVR/PrivateRoutE";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('http://localhost:5000/place')
      },
      { path: "/register", element: <Registration></Registration> },
      { path: "/login", element: <Login></Login> },
      { path: "/blog", element: <Blog></Blog> },
      {path:"/allPlace",loader:()=> fetch('http://localhost:5000/allPlace'), element:<AllPlacesShow></AllPlacesShow>},
      {path:'/place/:id',loader:({params})=>  fetch(`http://localhost:5000/place/${params.id}`) ,element:<SingelPlace></SingelPlace>},
      {path:'/allPlace/:id',loader:({params})=>  fetch(`http://localhost:5000/allPlace/${params.id}`) ,element:<SingelPlace></SingelPlace>},
      {path:'/myreview',element:<PrivateRoute><MyReview></MyReview></PrivateRoute>},
      {path:'/addService',element:<AddServices></AddServices>,loader:()=> fetch('http://localhost:5000/allPlace')},
      {path:'/update/:id',element:<Update></Update>,loader:({params})=> fetch(`http://localhost:5000/orders/${params.id}`)}
    ],
  },
  { path: "*", element: <ErrorPage></ErrorPage> },
]);
