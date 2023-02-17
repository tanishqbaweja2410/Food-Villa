import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/Yellow_Illustration_Catering_Logo__1_-removebg-preview.png";

const Title = () => (
  <a href="/">
    <img className="w-24 rounded-lg" src={Logo} alt="Food Villa" />
  </a>
);

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="flex mb-2.5 items-center justify-between p-2.5 bg-[#f8f8f8]">
      <Title />
      <div className="flex items-center">
        <ul className="flex list-none">
          <li className="p-2.5 mr-2.5 no-underline text-[#333] font-semibold text-lg">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="p-2.5 mr-2.5 no-underline text-[#333] font-semibold text-lg">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="p-2.5 mr-2.5 no-underline text-[#333] font-semibold text-lg">
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li className="p-2.5 mr-2.5 no-underline text-[#333] font-semibold text-lg">
            Cart
          </li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button
          className="w-1/12 p-3 bg-[#333] text-[#fff] rounded-md hover:bg-[#555] font-semibold text-lg"
          onClick={() => {
            setIsLoggedIn(false);
          }}
        >
          Logout
        </button>
      ) : (
        <button
          className="w-1/12 p-3 bg-[#333] text-[#fff] rounded-md hover:bg-[#555] font-semibold text-lg"
          onClick={() => {
            setIsLoggedIn(true);
          }}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Header;
