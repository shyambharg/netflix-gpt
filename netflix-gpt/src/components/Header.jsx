import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserSignOption from "../utils/UserSignOption";

const Header = () => {
  const { isSignIn, setIsSignIn } = useContext(UserSignOption);

  console.log(isSignIn);

  return (
    <div className="relative bg-gradient-to-b from-black flex flex-wrap  justify-between w-full p-4">
      <div className="w-[9.25rem] h-[2.5rem] my-4 mx-40 ">
        <Link to={"/"}>
          <img src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"></img>
        </Link>
      </div>
      {isSignIn ? (
        <div />
      ) : (
        <Link
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
