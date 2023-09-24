import React from "react";
import { Navbar } from "../component/Navbar";
import Footer from "../component/Footer";
import { Outlet } from "react-router-dom";


const Layout = ({ children }) => {
    return (
      <div>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    );
  };

  export default Layout;