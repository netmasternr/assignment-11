import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import AllJobs from "../Pages/AllJobs";
import AppliedJobs from "../Pages/AppliedJobs";
import AddJobs from "../Pages/AddJobs";
import MyJobs from "../Pages/MyJobs";
import Blogs from "../Pages/Blogs";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement:<ErrorPage/>,
      children:[
        {
            path:'/',
            element:<Home/> 
        },
        {
            path:'/All-Jobs',
            element:<AllJobs/> 
        },
        {
            path:'/Applied-Jobs',
            element:<AppliedJobs/> 
        },
        {
            path:'/Add-Job',
            element:<AddJobs/> 
        },
        {
            path:'/My-Jobs',
            element:<MyJobs/> 
        },
        {
            path:'/Blogs',
            element:<Blogs/> 
        },
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:'/register',
            element:<Register/>
        }
        
      ]
    },
  ]);

export default router;