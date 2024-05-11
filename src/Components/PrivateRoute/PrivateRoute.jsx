import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../UseAuth/UseAuth";

const PrivateRoute = ({ children }) => {
    const { user, loading } = UseAuth();
    const location = useLocation();

    if (loading) {
        return <span className="loading loading-ring loading-xs"></span>

    }

    // private route navigate
    if (!user) {
        return <Navigate to='/login' state={location?.pathname || '/'} />
    }

    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;