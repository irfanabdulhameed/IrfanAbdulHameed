import React from "react";
import logo from "../assets/irfanwhite.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";

1;
const Navbar = () => {
  return (
    <nav className="mb-5 flex items-center lg:justify-between justify-center py-5 px-8">
      <div className="hidden flex-shrink=0 lg:flex items-center">
        <a href="#">
          <img className="mx-5 w-20" src={logo} />
        </a>
      </div>
      <div className="m-8 flex iems-center justify-center md:gap-20 gap-10 text-2xl">
        <a href="https://www.linkedin.com/in/irfan-abdulhameed-a81b98230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <FaLinkedin />
        </a>
        <a href="https://github.com/irfanabdulhameed">
          <FaGithub />
        </a>
        <a href="https://x.com/iirrffaaannn?t=OD1CkUmIb6c8Y0IzqYgcZw&s=35">
          <FaSquareXTwitter />
        </a>
        <a href="https://www.instagram.com/irfan_a_hameed?utm_source=qr&igsh=NjN1ZzdiaHZuNHow">
          <FaInstagram />
        </a>
        <a href="https://www.upwork.com/freelancers/~01aa30810d60a4cd38">
          <FaSquareUpwork />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
