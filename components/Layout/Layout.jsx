import React from "react";
import HeaderFlowbite from "../Header/HeaderFlowbite";
import Footer from "../Footer/Footer";

const Layout = (props) => {
  return (
    <div className={props.className}>
      <header>
        <HeaderFlowbite />
      </header>
      <main>{props.children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
