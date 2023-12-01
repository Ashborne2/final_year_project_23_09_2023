import React from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Adminnav from "../component/Adminnav";

const AdminLayout = () => {
    return (
      <div>
        {/* <div className="container-fluid"> 
            i am admin layout
        </div> */}
        <main style={{display:"flex"}}>
        <Adminnav />
        <Outlet />
        </main>
        <Toaster position="top-center"/>
      </div>
    );
  };

  export default AdminLayout;