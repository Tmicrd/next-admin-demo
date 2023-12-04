import React from "react";
import Sidebar from "../ui/dashboard/sidebar/page";
import Navbar from "../ui/dashboard/navbar/page";

const Layout = ({ children }) => {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
