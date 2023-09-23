import React from "react";
import { Navbar } from "../component/Navbar";
import Footer from "../component/Footer";

const Layout = ({ children }) => {
    return (
      <div>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    );
  };

  export default Layout;