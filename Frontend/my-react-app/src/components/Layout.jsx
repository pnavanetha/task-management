import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "../css/layout.css";

const Layout = ({ children }) => {

const [collapsed,setCollapsed] = useState(false);

return (

<div className={`dashboard-layout ${collapsed ? "collapsed" : ""}`}>

<Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

<div className="main-content">

<Header />

{children}

</div>

</div>

);

};

export default Layout;