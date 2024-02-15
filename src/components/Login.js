import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_small.jpg" />
      </div>
      <form className="bg-black absolute my-36 mx-auto right-0 left-0 p-12 w-1/4 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            className="p-4 my-4 w-full  h-12 bg-gray-700 rounded-md"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          className="p-4 my-4 w-full  h-12 bg-gray-700 rounded-md"
          type="text"
          placeholder="Email or Phone Number"
        />

        <input
          className="p-4 my-4 w-full h-12 bg-gray-700 rounded-md"
          type="password"
          placeholder="Password"
        />
        <button className="bg-red-600 p-3 my-6 rounded-lg w-full">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toggleSignInForm} className="p-4 cursor-pointer">
          {isSignInForm
            ? "New to Netflix ? Sign Up"
            : "Already registered ? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
