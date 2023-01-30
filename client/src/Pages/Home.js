import React from "react";
import { Link } from "react-router-dom";
import powerPlan from '../assets/power-plan.jpg'

const Home = () => {
    return (
        <div style={{ 
            background: `url(${powerPlan})`, 
            backgroundSize: 'cover', 
            height: "80vh", 
            backgroundRepeat: 'no-repeat' }} 
            className='flex justify-center items-center'
            >
            <div className="text-center">
                <h2 className="text-4xl font-semibold">Welcome to</h2>
                <h1 className="text-5xl font-bold">Power Hack's Website</h1>
                <Link to='/billing-list' className="btn btn-md mt-5">Billing page</Link>

            </div>
        </div>
    );
};

export default Home;