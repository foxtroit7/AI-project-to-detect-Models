import React, {  useState } from "react";
import { Outlet} from "react-router-dom";
import Sidebar from "./Sidebar";


const Layout = () => {
  const [collapsed, setCollapsed] = useState(false);

 

  return (
    <div className={`d-flex`} style={{ height: "100vh"}}>
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      <main style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
        <div className="d-flex justify-content-between mb-3">

         
        </div>

        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
