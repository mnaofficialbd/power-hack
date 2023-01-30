import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';

const Navbar = () => {
    
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    };

    return (
        <div className="navbar bg-base-100 border-2">
            <div className="flex-1">
                <Link to='/' className="flex items-center font-bold text-xl">
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-12"
                    />
                    POWER HACK
                </Link>
            </div>
            <div className="flex-none">
                <ul className="flex px-1">
                    <li className="mr-6">Paid Total: 0</li>
                    <li className="mr-4"><Link to='/'>Home</Link></li>
                    <li>
                        <button onClick={handleLogout}>Logout</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;