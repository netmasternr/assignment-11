import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../UseAuth/UseAuth";

const PrivateRoute = ({ children }) => {
 
    const { user, loading } = UseAuth()
    const location = useLocation()

    if (loading) {
        return <div className="pt-20 text-center z-10"><span className="loading loading-ball loading-xs"></span>
            <span className="loading loading-ball loading-sm"></span>
            <span className="loading loading-ball loading-md"></span>
            <span className="loading loading-ball loading-lg"></span></div>
    }

    if (!user) {
        return <Navigate to='/login' state={location?.pathname || '/'}></Navigate>
    }

    return (
        <div className="">
            {children}
        </div>
    );



};

export default PrivateRoute;