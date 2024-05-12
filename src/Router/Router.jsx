import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import AllJobs from "../Pages/AllJobs";
import AddJobs from "../Pages/AddJobs";
import MyJobs from "../Pages/MyJobs";
import Blogs from "../Pages/Blogs";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import AppliedJobs from "../Pages/AppliedJobs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                
            },
            {
                path: '/All-Jobs',
                element: <AllJobs />
            },
            {
                path: '/Applied-Jobs',
                element: <PrivateRoute>
                   <AppliedJobs/>
                </PrivateRoute>
            },
            {
                path: '/Add-Job',
                element: <PrivateRoute>
                    <AddJobs />
                </PrivateRoute>
            },
            {
                path: '/My-Jobs',
                element: <PrivateRoute>
                    <MyJobs />
                </PrivateRoute>

            },
            {
                path: '/Blogs',
                element: <Blogs />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }

        ]
    },
]);

export default router;