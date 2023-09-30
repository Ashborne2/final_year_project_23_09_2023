import React from "react";
import { Navbar } from "../component/Navbar";
import Footer from "../component/Footer";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";


const Layout = ({ children }) => {
    return (
      <div>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
        <Toaster position="top-center"/>
      </div>
    );
  };

  export default Layout;