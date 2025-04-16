import React from "react";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", { email, password });
  };

  return (
    <div className="p-10 text-center">
      <h2 className="text-3xl font-bold"> Login to AlumConnect</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full mb-4"
        required
        />
        <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 w-full mb-4"
        required
        />
        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounder">Login</button>
      </form>
    </div>
  );
};

export default Login;