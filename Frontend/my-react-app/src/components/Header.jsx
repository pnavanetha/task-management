import { FaPowerOff } from "react-icons/fa";

const Header = () => {

const email = localStorage.getItem("email");

const logout = () => {
localStorage.clear();
window.location.href = "/";
};

return (

<div className="header">

<div className="header-left">
<h2>Utility Bank</h2>
</div>

<div className="header-right">

<span className="user-email">{email}</span>

<FaPowerOff
className="logout-icon"
title="Logout"
onClick={logout}
/>

</div>

</div>

);

};

export default Header;