import { useState } from "react";

const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
      alt="Food Villa"
    />
  </a>
);

export const Header = () => {
  // let title = "Food Villa";
  // const [title, setTitle] = useState("Food Villa"); 
  // console.log("render()");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      {/* <h1>{title}</h1> */}
      {/* <button onClick={() => setTitle("New Food App")}>Change Title</button> */}
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      {
        // any js code
        // Expression => Accepted
        // ((a = 10), console.log(a))
        // Statements => Not Accepted
        // if() {

        // }

        // similarly, ternary ? operator is an expression whereas if else is a statement
        (isLoggedIn ? <button className="login" onClick={() => {setIsLoggedIn(false)}}>Logout</button> : <button className="login" onClick={() => {setIsLoggedIn(true)}}>Login</button>)
      }
      
      
    </div>
  );
};

export default Header;
