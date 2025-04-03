import {Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <h1 className="text-2xl font-bold">AlumConnect</h1>
      <div>
        <Link to="/" className="px-4">Home</Link>
        <Link to="/login" className="px-4">Login</Link>
        <Login to="/signup" className="px-4">Signup</Login>
      </div>
    </nav>
  );
};

export default Navbar;
