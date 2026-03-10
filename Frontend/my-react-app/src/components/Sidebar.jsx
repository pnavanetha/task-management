import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import "./sidebar.css"

const Sidebar = () => {

const [mastersOpen, setMastersOpen] = useState(false);

return (
<div className="sidebar">

<h2 className="logo">Utility Bank</h2>

{/* Masters */}
<div 
className="menu-title"
onClick={() => setMastersOpen(!mastersOpen)}
>

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
{/* Transactions */}
<div 
className="menu-title"
onClick={() => setTransactionsOpen(!mastersOpen)}
>

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



</div>
);
};

export default Sidebar;