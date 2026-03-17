import Header from "./Header";
import Sidebar from "./Sidebar";
import "../css/layout.css";

const Layout = ({ children }) => {

return (

<div className="layout">

<Header />

<Sidebar />

<div className="main-content">

{children}

</div>

</div>

);

};

export default Layout;