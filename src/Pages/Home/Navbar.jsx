import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    const [theme, setTheme] = useState('light')

    // local storage
    useEffect(() => {
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');

        document.querySelector('html').setAttribute('data-theme', localTheme);
    }, [theme]);


    const toggle = (e) => {
        if (e.target.checked) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };


    const navLink = (
        <>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? 'text-green-500 bg-gray-600 p-2 rounded-lg font-bold' : 'p-2 font-bold'
                }>
                Home
            </NavLink>
            <NavLink
                to="/All-Jobs"
                className={({ isActive }) =>
                    isActive ? 'text-green-500 bg-gray-600 p-2 rounded-lg font-bold' : 'p-2 font-bold'
                }>
                All Jobs
            </NavLink>
            <NavLink
                to="/Applied-Jobs"
                className={({ isActive }) =>
                    isActive ? 'text-green-500 bg-gray-600 p-2 rounded-lg font-bold' : 'p-2 font-bold'
                }>
                Applied Jobs
            </NavLink>
            <NavLink
                to="/Add-Job"
                className={({ isActive }) =>
                    isActive ? 'text-green-500 bg-gray-600 p-2 rounded-lg font-bold' : 'p-2 font-bold'
                }>
                Add A Job
            </NavLink>
            <NavLink
                to="/My-Jobs"
                className={({ isActive }) =>
                    isActive ? 'text-green-500 bg-gray-600 p-2 rounded-lg font-bold' : 'p-2 font-bold'
                }>
                Add A Job
            </NavLink>
            <NavLink
                to="/Blogs"
                className={({ isActive }) =>
                    isActive ? 'text-green-500 bg-gray-600 p-2 rounded-lg font-bold' : 'p-2 font-bold'
                }>
                Blogs
            </NavLink>
        </>


    )
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <a href="/" className="btn btn-ghost text-xl">
                    SkillSphere
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>

            <div className="navbar-end space-x-3">
                <div className="avatar">
                    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>

                <Link to='/login' className="btn">Login</Link>

                <input onChange={toggle} type="checkbox" value="dark" className="toggle theme-controller" />
            </div>
        </div>
    );
};

export default Navbar;