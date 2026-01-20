import React from "react";
import youtube_icon from "../../assets/youtube_icon.png";
import twitter_icon from "../../assets/twitter_icon.png";
import instagram_icon from "../../assets/instagram_icon.png";
import facebook_icon from "../../assets/facebook_icon.png";

const Footer = () => {
  return (
    <div className="px-6 py-8 mx-auto w-full max-w-6xl">
      <div className="flex gap-4 mb-6">
        <img
          src={facebook_icon}
          alt="Facebook"
          className="w-8 h-8 cursor-pointer hover:opacity-75 transition-opacity"
        />
        <img
          src={instagram_icon}
          alt="Instagram"
          className="w-8 h-8 cursor-pointer hover:opacity-75 transition-opacity"
        />
        <img
          src={twitter_icon}
          alt="Twitter"
          className="w-8 h-8 cursor-pointer hover:opacity-75 transition-opacity"
        />
        <img
          src={youtube_icon}
          alt="YouTube"
          className="w-8 h-8 cursor-pointer hover:opacity-75 transition-opacity"
        />
      </div>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-sm">
        <li>
          <a href="#" className="hover:underline">
            Audio Description
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Help Center
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Gift Cards
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Media Center
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Investor Relations
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Jobs
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Terms of Use
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Privacy
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Legal Notice
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Cookie Preferences
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
        </li>
      </ul>
      <p className="text-sm text-gray-400">© 1997-2023 Netflix, Inc.</p>
    </div>
  );
};

export default Footer;
