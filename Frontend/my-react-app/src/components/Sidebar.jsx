// import { useState } from "react";
// import { FaChevronDown, FaChevronRight } from "react-icons/fa";
// import "./sidebar.css"

// const Sidebar = () => {

// const [mastersOpen, setMastersOpen] = useState(false);
// const [transactionsOpen, setTransactionsOpen] = useState(false);
// const [viewsOpen, setViewsOpen] = useState(false);
// const [reportsOpen, setReportsOpen] = useState(false);


// return (
// <div className="sidebar">

// <h2 className="logo">Utility Bank</h2>

// {/* Masters */}
// <div 
// className="menu-title"
// onClick={() => setMastersOpen(!mastersOpen)}
// >

// Masters

// <span className="arrow">
// {mastersOpen ? <FaChevronDown /> : <FaChevronRight />}
// </span>

// </div>

// {mastersOpen && (
// <div className="submenu">

// <div className="menu-item">Customer Master</div>
// <div className="menu-item">Branch Master</div>
// <div className="menu-item">Account Type Master</div>

// </div>
// )}
// {/* Transactions */}
// <div 
// className="menu-title"
// onClick={() => setTransactionsOpen(!transactionsOpen)}
// >

// Transactions

// <span className="arrow">
// {transactionsOpen ? <FaChevronDown /> : <FaChevronRight />}
// </span>

// </div>

// {transactionsOpen && (
// <div className="submenu">

// <div className="menu-item"> Customer Registration</div>
// <div className="menu-item">Account Opening</div>
// <div className="menu-item">Deposit</div>
// <div className="menu-item"> Withdrawal</div>
// <div className="menu-item">Fund Transfer</div>

// </div>

// )}
// {/* Views */}
// <div 
// className="menu-title"
// onClick={() => setViewsOpen(!viewsOpen)}
// >

// Views

// <span className="arrow">
// {viewsOpen ? <FaChevronDown /> : <FaChevronRight />}
// </span>

// </div>

// {viewsOpen && (
// <div className="submenu">

// <div className="menu-item">Customer Details</div>
// <div className="menu-item">Account Summary</div>
// <div className="menu-item">Transaction History</div>

// </div>

// )}
// {/* Reports */}
// <div 
// className="menu-title"
// onClick={() => setReportsOpen(!reportsOpen)}
// >

// Reports

// <span className="arrow">
// {reportsOpen ? <FaChevronDown /> : <FaChevronRight />}
// </span>

// </div>

// {reportsOpen && (
// <div className="submenu">

// <div className="menu-item">Account Statement</div>
// <div className="menu-item">Daily Transactions</div>
// <div className="menu-item">Customer Report</div>

// </div>

// )}



// </div>
// );
// };

// export default Sidebar;


import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import "./sidebar.css";

const Sidebar = () => {

const role = localStorage.getItem("role");

const [mastersOpen, setMastersOpen] = useState(false);
const [transactionsOpen, setTransactionsOpen] = useState(false);
const [viewsOpen, setViewsOpen] = useState(false);
const [reportsOpen, setReportsOpen] = useState(false);

const logout = () => {
localStorage.removeItem("token");
localStorage.removeItem("role");
window.location.href = "/";
};

return (
<div className="sidebar">

<h2 className="logo">Utility Bank</h2>

{/* ADMIN ONLY */}
{role === "admin" && (
<>
<div className="menu-title" onClick={() => setMastersOpen(!mastersOpen)}>
Masters
<span className="arrow">
{mastersOpen ? <FaChevronDown /> : <FaChevronRight />}
</span>
</div>

{mastersOpen && (
<div className="submenu">
<div className="menu-item">Customer Master</div>
<div className="menu-item">Branch Master</div>
<div className="menu-item">Account Type Master</div>
</div>
)}
</>
)}

{/* ADMIN + EMPLOYEE */}
{(role === "admin" || role === "employee") && (
<>
<div className="menu-title" onClick={() => setTransactionsOpen(!transactionsOpen)}>
Transactions
<span className="arrow">
{transactionsOpen ? <FaChevronDown /> : <FaChevronRight />}
</span>
</div>

{transactionsOpen && (
<div className="submenu">
<div className="menu-item">Customer Registration</div>
<div className="menu-item">Account Opening</div>
<div className="menu-item">Deposit</div>
<div className="menu-item">Withdrawal</div>
<div className="menu-item">Fund Transfer</div>
</div>
)}
</>
)}

{/* ADMIN + EMPLOYEE */}
{(role === "admin" || role === "employee") && (
<>
<div className="menu-title" onClick={() => setViewsOpen(!viewsOpen)}>
Views
<span className="arrow">
{viewsOpen ? <FaChevronDown /> : <FaChevronRight />}
</span>
</div>

{viewsOpen && (
<div className="submenu">
<div className="menu-item">Customer Details</div>
<div className="menu-item">Account Summary</div>
<div className="menu-item">Transaction History</div>
</div>
)}
</>
)}

{/* ADMIN + EMPLOYEE */}
{(role === "admin" || role === "employee") && (
<>
<div className="menu-title" onClick={() => setReportsOpen(!reportsOpen)}>
Reports
<span className="arrow">
{reportsOpen ? <FaChevronDown /> : <FaChevronRight />}
</span>
</div>

{reportsOpen && (
<div className="submenu">
<div className="menu-item">Account Statement</div>
<div className="menu-item">Daily Transactions</div>
<div className="menu-item">Customer Report</div>
</div>
)}
</>
)}

{/* CUSTOMER MENU */}
{role === "user" && (
<>
<div className="menu-item">Dashboard</div>
<div className="menu-item">Account Summary</div>
<div className="menu-item">Fund Transfer</div>
<div className="menu-item">Transaction History</div>
<div className="menu-item">Download Statement</div>
<div className="menu-item">Profile</div>
</>
)}

{/* LOGOUT */}
<div className="menu-item logout" onClick={logout}>
Logout
</div>

</div>
);
};

export default Sidebar;