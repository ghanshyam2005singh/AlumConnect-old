import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="text-center p-10">
            <h1 className="text-4xl font-bold">Welcome to Alumconnect</h1>
            <p className="text-lg mt-4">Connect with your college alumini and grow your network.</p>
            <Link to="/signup">
            <button className="bg-blue-500 text-white px-6 py-2 mt-4 rounded">Get Started</button>
            </Link>
        </div>
    );
};
console.log("Home page loaded");

export default Home;