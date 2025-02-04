import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserSignOption from "../utils/UserSignOption";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import {auth} from "../utils/firebase.js";
import { NF_LOGO, USER_LOGO } from "../utils/constant";

const Header = () => {
  const { isSignIn, setIsSignIn } = useContext(UserSignOption);
  const dispatch = useDispatch();
  const user = useSelector(store=>store.user);
  const navigate = useNavigate();

  const handleSignOut = ()=>{
    signOut(auth).then(() => {
          dispatch(removeUser())
          navigate("/")
         
      }).catch((error) => {
        // An error happened.
      });
}


useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      
      const {uid,email,displayName,photoURL} = user;
      dispatch(
                  addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL : photoURL,
                  })
                );
      navigate("/browse");
    } else {
     
      dispatch(removeUser());
      

      // User is signed out
      // ...
    }
  });
  return () => unsubscribe();
},[])



  return (
    <div className="absolute bg-gradient-to-b from-black flex flex-wrap  justify-between w-full  z-10">
      <div className="w-[9.25rem] h-[2.5rem] my-4 mx-40 ">
        <Link to={"/"}>
          <img src={NF_LOGO}></img>
        </Link>
      </div>
      {user ? (
       <div className="flex">
       <img className="p-1 my-4 rounded-2xl w-10 h-10" src={user?.photoURL} alt="" />
       <button className="cursor-pointer text-center bg-red-600 rounded-lg  w-16 h-8 my-5 mr-5 text-white font-bold " onClick={handleSignOut}>Sign out</button>
       </div>
       
      ) : (
       isSignIn ? <div/> : <Link
       to={"/login"}
       className="cursor-pointer text-center bg-red-600 rounded-lg my-7 p-2 w-30 h-auto text-white font-bold mx-14"
     >
       Sign In
     </Link>
      )}
    
    </div>
  );
};

export default Header;
