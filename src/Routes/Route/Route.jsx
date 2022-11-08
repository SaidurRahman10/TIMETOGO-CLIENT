
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Blog from '../../Pages/Blog/Blog';
import ErrorPage from '../../Pages/ErrorPage/ErrorPage';
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login';
import Registration from '../../Pages/Login/Registration';





  export  const router = createBrowserRouter([
        {path:'/', element:<Main></Main>,children:[
            {path:'/', element:<Home></Home>},
            {path:'/register',element:<Registration></Registration>},
            {path:'/login',element:<Login></Login>},
            {path:'/blog', element:<Blog></Blog>}





        ]},
        {path:'*',element:<ErrorPage></ErrorPage>}

    ])
