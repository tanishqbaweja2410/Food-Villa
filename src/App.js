import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

// ------------------ Composing Components ------------------------------->

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

// ------------------ Rendering ------------------------------->
const root = ReactDOM.createRoot(document.getElementById("root"));

// passing a react element inside the root
root.render(<AppLayout />);
