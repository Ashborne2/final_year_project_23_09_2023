import React from "react";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
    return (
      <div>
        {/* <div className="container-fluid"> 
            i am admin layout
        </div> */}
        <main>
        <Outlet />
        </main>
      </div>
    );
  };

  export default AdminLayout;