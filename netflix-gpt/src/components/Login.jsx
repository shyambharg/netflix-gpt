import React, { useContext, useRef, useState } from "react";
import Header from "./Header";
import { validateEmail } from "../utils/validate";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase";
import UserSignOption from "../utils/UserSignOption";
import { BG_IMG, USER_LOGO } from "../utils/constant";

const Login = () => {
  const dispatch = useDispatch();
  const [signInToggle, setSignInToggle] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);
  const { isSignIn, setIsSignIn } = useContext(UserSignOption);

  const handleSigning = () => {
    const message = validateEmail(
      emailRef.current.value,
      passwordRef.current.value
    );

    if (message != null) {
      setErrorMessage(message);
    } else {
      setErrorMessage("");
      if (!signInToggle) {
     
        createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
          .then((userCredential) => {
            const user = userCredential.user;

            updateProfile(user, {
              displayName: nameRef.current.value,
              photoURL: USER_LOGO,
            })
              .then(() => {
                const {uid, email, displayName, photoURL} = user;

                dispatch(
                  addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL : photoURL,
                  })
                );
                setIsSignIn(true);
                

              })
              .catch((error) => {
               setErrorMessage(error);
              });

            return user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
      } else {
        signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
          .then((userCredential) => {
            // Signed in

            const user = userCredential.user;
              const { uid, email, displayName, photoURL } = user;
           
            
            return user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorMessage);
          });
      }
    }
  };

  return (
    <div className="">
      <div className="absolute max-h-full">
        <img
          className=""
          src= {BG_IMG}
        ></img>
      </div>
      <div className="bg-black h-203 w-full absolute opacity-70" />

      <Header />
      <div className="absolute ">
        <form
          onSubmit={(e) => e.preventDefault()}
          className=" bg-neutral-950/75 w-100 h-150 mx-[550px] mt-28 rounded-lg text-white"
        >
          <h1 className="p-8 text-4xl font-bold">
            {signInToggle ? "Sign In" : "Sign Up"}
          </h1>

          {!signInToggle && (
            <input
              ref={nameRef}
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
