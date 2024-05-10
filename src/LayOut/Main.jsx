import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar";
import Footer from "../Pages/Footer/Footer";


const Main = () => {
    return (
        <div >
            <Navbar />
            <div>
                <Outlet></Outlet>
            </div>
            <Footer />
        </div>
    );
};

export default Main;