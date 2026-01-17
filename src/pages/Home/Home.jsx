import React from "react";

import Navbar from "../../components/Navbar/Navbar.jsx";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="relative">
        <img src={hero_banner} alt="" className=" w-full mask-l-from-50% mask-t-from-90%  "/>
        <div className="absolute w-full pl-20 bottom-0 ">
          <img src={hero_title} alt="" className="w-90 w-max-400 mb-3  " />
          <p className="w-200 w-max-400 text-sm mb-3 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nemo,
            excepturi tempora ipsum quia eveniet earum odit dolorem. Dicta
            exercitationem consequuntur facilis error voluptates fugiat
            voluptatum laborum, dolorum tempore! Distinctio!
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
