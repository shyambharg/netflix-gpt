import React from "react";
import Header from "./Header";
import { Link } from "react-router";
import FeaturedMovie from "./FeaturedMovie";

const Body = () => {
  return (
    <div>
      <div className="">
        <div className="absolute max-h-full">
          <img
            className=""
            src="https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/US-en-20250127-TRIFECTA-perspective_286fc4cf-bd17-4ad2-b6e7-6a962bacb568_large.jpg"
          ></img>
        </div>
        <div className="bg-black h-203 w-full absolute opacity-70"></div>
        <Header />
        <div className="relative">
          <p className="text-white font-bold text-6xl w-[700px] text-center mx-90 pt-40">
            Unlimited movies, TV shows, and more
          </p>
          <p className="text-white text-2xl w-[700px] text-center mx-90 pt-5">
            Starts at $7.99. Cancel anytime
          </p>

          <p className="text-white text-2xl w-[700px] text-center mx-90 pt-10">
            Ready to watch? Get started to create or restart your membership.
          </p>

          <div className="hover:cursor-pointer bg-red-600 rounded-lg text-center my-7 p-4 w-48 h-16 text-2xl text-white  mx-[600px] mt-10 ">
            <Link to={"/login"}>Get Started &rsaquo;</Link>
          </div>
        </div>
      </div>

      <div className="mt-14 absolute bg-black  h-auto w-auto rounded-t-[95px]">
        <div className="ml-28 mt-36">
          <h1 className="text-white font-bold text-3xl">Trending Now</h1>
        </div>
        <FeaturedMovie />
      </div>
    </div>
  );
};

export default Body;
