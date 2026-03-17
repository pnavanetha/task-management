import { FaPowerOff } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {

const email = localStorage.getItem("email");
const role = localStorage.getItem("role");

const navigate = useNavigate();

const logout = () => {
localStorage.clear();
window.location.href = "/";
};

const goToDashboard = () => {

if(role === "admin"){
    navigate("/admin-dashboard");
}
else if(role === "manager"){
    navigate("/employee");
}
else if(role === "user"){
    navigate("/customer");
}
else{
    navigate("/");
}

};

return (

<div className="header">

<div className="header-left">
<h2 onClick={goToDashboard} style={{cursor:"pointer"}}>
Utility Bank
</h2>
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