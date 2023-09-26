import React from "react";
import logo from "../assets/logo.png";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiFillGoogleCircle,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src= {logo}
          alt="Founder"
        />

        <h2>Gaurav Kumar</h2>
        <p>Vibes Never Lies...Original Never Dies</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
        <a href="https://sandeepsappal.in" target={"blank"}>
            <AiFillGoogleCircle />
          </a>
          <a href="https://youtube.com/unacademy" target={"blank"}>
            <AiFillYoutube />
          </a>
          <a href="https://instagram.com/gaurav" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/gkr" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
