import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar";
import Footer from "../Pages/Footer/Footer";

 
const Main = () => {
    return (
        <div>
             <Navbar/>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default Main;