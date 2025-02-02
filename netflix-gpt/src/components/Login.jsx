import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateEmail } from "../utils/validate";
import { createUser, signInUser } from "../utils/firebaseUser";


const Login = () => {

  const [signInToggle, setSignInToggle] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);



  const handleSigning = () => {
    const message = validateEmail(
      emailRef.current.value,
      passwordRef.current.value
    );

    console.log("hello123")
    if (message != null) {
      setErrorMessage(message);
    } else {
      setErrorMessage("");
      if(!signInToggle)
      {
       
        console.log("inside signup")
         const user = createUser(emailRef.current.value, passwordRef.current.value)
         console.log(user);
      }
      else{
        console.log("inside signin")
         const user = signInUser(emailRef.current.value, passwordRef.current.value)
         console.log(user)
      }
    }

  };

  return (
    <div className="">
      <div className="absolute max-h-full">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/US-en-20250127-TRIFECTA-perspective_286fc4cf-bd17-4ad2-b6e7-6a962bacb568_large.jpg"
        ></img>
      </div>
      <div className="bg-black h-203 w-full absolute opacity-70" />

      <Header />
      <div className="relative ">
        <form
          onSubmit={(e) => e.preventDefault()}
          className=" bg-neutral-950/75 w-100 h-150 mx-[550px] mt-10 rounded-lg text-white"
        >
          <h1 className="p-8 text-4xl font-bold">
            {signInToggle ? "Sign In" : "Sign Up"}
          </h1>

          {!signInToggle && (
            <input
              className="w-10/12 mx-8 mt-6 p-4 rounded-sm border h-14 text-white"
              placeholder="Full Name"
              type="text"
            ></input>
          )}
          <input
            ref={emailRef}
            className="w-10/12 mx-8 mt-6 p-4 rounded-sm border h-14 text-white"
            placeholder="Email or mobile number"
            type="email"
          ></input>
          <input
            ref={passwordRef}
            className="w-10/12 mx-8 mt-6 p-4 border  h-14"
            placeholder="Password"
            type="password"
          ></input>
          <p className=" mx-4 mt-1 p-4  text-red-600 ">{errorMessage}</p>
          <button
            onClick={handleSigning}
            className="  hover:cursor-pointer bg-red-600 rounded-lg text-center mt-6 p-2 w-10/12 h-12 text-lg mx-8 "
          >
            {signInToggle ? "Sign In" : "Sign Up"}
          </button>

          <p className="w-10/12 mx-4 mt-6 p-4 rounded-sm  h-14 text-lg text-gray-400">
            {" "}
            {signInToggle ? "New to Netflix?" : "Already a member?"}{" "}
            <a
              className="font-bold hover:underline hover:cursor-pointer text-white"
              onClick={() => {
                setSignInToggle(!signInToggle);
              }}
            >
              {signInToggle ? "Sign up now." : "Sign In"}
            </a>
          </p>

          <p className="w-10/12 mx-4 p-4 rounded-sm  h-14 text-xs text-gray-400">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
            <a className="text-blue-600 hover:underline hover:cursor-pointer">
              Learn more.
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
