import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar";
import Footer from "../Pages/Footer/Footer";

const Main = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow min-h-[calc(100vh - 314px)]">
                <Outlet />
            </main>
 
            <Footer />
        </div>
    );
};

export default Main;
