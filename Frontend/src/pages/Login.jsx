import React, { useState } from "react";
import Loginlogo from "../assets/login.webp";
import { Link } from "react-router-dom";

export const Login = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log("user logined ", {email,password})
  }
  return (
    <section className=" container mx-auto flex">
      {/* Left side - Login form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <form onSubmit={handleSubmit} className="w-full max-w-md p-8 border rounded-lg shadow-lg text-center">
          <div className="mb-6">
            <h2 className="text-md font-medium">Rabbit</h2>
            <p className="text-2xl font-bold mt-2">
              Hey there <span className="inline-block animate-wave">👋</span>
            </p>

            <p className="text-sm mt-2">
              Enter your email and password to login
            </p>
          </div>

          <div className="text-left space-y-4">
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="text"
                className="w-full border px-3 py-2 rounded"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Password</label>
              <input
                type="password"
                className="w-full border px-3 py-2 rounded"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="text-center mt-1">
              <button className="bg-blue-500 w-full py-3 text-white text-xl rounded-lg  hover:bg-blue-600">
                Login
              </button>
            </div>
            <div className="text-center text-black">
              <span>
                if you are new User ?
                <Link
                  to="/register"
                  className="text-blue-400 hover:text-blue-600 px-2"
                >
                  Sign up
                </Link>
              </span>
            </div>
          </div>
        </form>
      </div>

      {/* Right side - Image (hidden on small screens) */}
      <div className="hidden md:block md:w-1/2  ">
        <img
          src={Loginlogo}
          alt="Login Visual"
          className="w-full h-[600px] object-cover"
        />
      </div>
    </section>
  );
};
