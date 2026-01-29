import React from "react";

import Navbar from "../../components/Navbar/Navbar.jsx";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="relative">
        <img
          src={hero_banner}
          alt=""
          className=" w-full mask-l-from-50% mask-t-from-90%"
        />
        <div className="absolute w-full pl-20 bottom-0 ">
          <img src={hero_title} alt="" className="w-90 w-max-400 mb-3  " />
          <p className="w-200 w-max-400 text-sm mb-3 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nemo,
            excepturi tempora ipsum quia eveniet earum odit dolorem. Dicta
            exercitationem consequuntur facilis error voluptates fugiat
            voluptatum laborum, dolorum tempore! Distinctio!
          </p>
          <div className="flex gap-2 mb-10 ">
            <button className="h-10 border-0 bg-white px-4 py-1 flex items-center gap-2 text-sm rounded-sm cursor-pointer text-black hover:bg-[#ffffffbf] ">
              <img src={play_icon} alt="" className="w-5" />
              Play
            </button>
            <button className="h-10 border-0 bg-[#6d6d6eb3] px-3 py-2 flex items-center gap-2 text-sm rounded-sm cursor-pointer text-white hover:bg-[#6d6d6e66] ">
              <img src={info_icon} alt="" className="w-8" />
              More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="pl-20">
        
        <TitleCards title={"Top Rated"} category={"top_rated"}/>
        <TitleCards title={"Popular on Netflix"} category={"popular"}/>
        <TitleCards title={"Upcoming"} category={"upcoming"}/>
        <TitleCards title={"Now Playing"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
