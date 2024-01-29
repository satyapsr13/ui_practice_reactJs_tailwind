import React from "react";
import loginImage from "../assets/bg1.jpg";

const Login = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 bg-amber-300 h-screen w-full">
      <div className="hidden sm:block">
        <img className="w-full h-full object-cover" src={loginImage} alt="" />
      </div>
      <div className="bg-gray-800 flex flex-col justify-center">
        <form
          action=""
          className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg"
        >
          <h2 className="text-4xl dark:text-white font-bold text-center">
            Sign In
          </h2>
          <div className="flex  flex-col text-gray-400 py-2 ">
            <label>User Name</label>
            <input
              className="rounded-lg bg-gray-700 focus:border-blue-500 focus:bg-gray-800 mt-2 p-2 focus:outline-none"
              type="text"
            />
          </div>
          <div className="flex  flex-col text-gray-400 py-2 ">
            <label>Password</label>
            <input
              className="rounded-lg bg-gray-700 focus:border-blue-500 focus:bg-gray-800 mt-2 p-2 focus:outline-none"
              type="password"
            />
          </div>
          <div className="flex justify-between text-gray-400 py-2">
            <p className="flex items-center">
              <input type="checkbox" />
              Remember Me
            </p>
            <p>Forgot Password</p>
          </div>
          <button className="w-full   bg-teal-500 my-5 py-2 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/30 rounded-lg text-white font-semibold">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
