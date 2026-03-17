// import { useRef, useState } from "react";
// import { AgGridReact } from "ag-grid-react";
// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-alpine.css";
// import Layout from "../components/Layout";
// import "../css/masters.css";

// const CustomerMaster = () => {
// const gridRef = useRef();

// const [customers,setCustomers] = useState([]);
// const [showPopup,setShowPopup] = useState(false);


// const [form,setForm] = useState({
// firstName:"",
// lastName:"",
// mobile:"",
// email:"",
// city:"",
// state:"",
// status:"Active"
// });

// const columnDefs = [
// { headerName: "ID", field: "id", sortable:true, filter:true},
// { headerName: "First Name", field: "firstName", sortable:true, filter: true},
// ];

// const defaultColDef = {
//     flex:1,
//     resizable: true
// };

// const handleChange=(e)=>{
// setForm({...form,[e.target.name]:e.target.value});
// };

// const saveCustomer=()=>{
// const newCustomer = {

// id: customers.length + 1,
// ...form
// };

// setCustomers([...customers, newCustomer]);


// setShowPopup(false);

// setForm({
// firstName:"",
// lastName:"",
// mobile:"",
// email:"",
// city:"",
// state:"",
// status:"Active"
// });

// };

// const onSearch=(e)=>{
// gridRef.current.api.setQuickFilter(e.target.value);
// };

// return(

// <Layout>

// <div className="page-header">

// <h2>Customer Master</h2>

// <button
// className="add-btn"
// onClick={()=>setShowPopup(true)}
// >
// + Add
// </button>
// </div>
// <div className="grid-top">
//     <input type="text" placeholder="Search.." className="search-box" onChange={onSearch}/>
// </div>

// <div className="ag-theme-alpine"
// style={{height:"500px", width:"100%"}}
// >
// <AgGridReact
// ref={gridRef}
// rowData={customers}
// columnDefs={columnDefs}
// defaultColDef={defaultColDef}
// pagination={true}
// paginationAutoPageSize={10}
// />


// <table>

// <thead>

// <tr>
// <th>ID</th>
// <th>First Name</th>
// <th>Last Name</th>
// <th>Mobile</th>
// <th>Email</th>
// <th>City</th>
// <th>Status</th>
// </tr>

// </thead>

// <tbody>

// {customers.map((c)=>(
// <tr key={c.id}>

// <td>{c.id}</td>
// <td>{c.firstName}</td>
// <td>{c.lastName}</td>
// <td>{c.mobile}</td>
// <td>{c.email}</td>
// <td>{c.city}</td>
// <td>{c.status}</td>

// </tr>
// ))}

// </tbody>

// </table>

// </div>

// {showPopup && (

// <div className="modal-overlay">

// <div className="modal">

// <div className="modal-header">

// <h3>Add Customer</h3>

// <button
// className="close-btn"
// onClick={()=>setShowPopup(false)}
// >
// X
// </button>

// </div>


// <div className="modal-body">

// <input name="firstName" placeholder="First Name" onChange={handleChange}/>
// <input name="lastName" placeholder="Last Name" onChange={handleChange}/>
// <input name="mobile" placeholder="Mobile" onChange={handleChange}/>
// <input name="email" placeholder="Email" onChange={handleChange}/>
// <input name="city" placeholder="City" onChange={handleChange}/>
// <input name="state" placeholder="State" onChange={handleChange}/>

// <select name="status" onChange={handleChange}>
// <option>Active</option>
// <option>Inactive</option>
// </select>

// </div>


// <div className="modal-footer">

// <button
// className="submit-btn"
// onClick={saveCustomer}
// >
// Submit
// </button>

// <button
// className="close-btn2"
// onClick={()=>setShowPopup(false)}
// >
// Close
// </button>

// </div>

// </div>

// </div>

// )}

// </Layout>

// );

// };

// export default CustomerMaster;

import { useState, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import Layout from "../components/Layout";
import "../css/masters.css";

ModuleRegistry.registerModules([AllCommunityModule]);

const CustomerMaster = () => {

const gridRef = useRef();

const [customers,setCustomers] = useState([]);
const [showPopup,setShowPopup] = useState(false);

const [form,setForm] = useState({
firstName:"",
lastName:"",
mobile:"",
email:"",
city:"",
state:"",
status:"Active"
});

const columnDefs = [

{ headerName:"ID", field:"id", sortable:true, filter:true },

{ headerName:"First Name", field:"firstName", sortable:true, filter:true },

{ headerName:"Last Name", field:"lastName", sortable:true, filter:true },

{ headerName:"Mobile", field:"mobile", sortable:true, filter:true },

{ headerName:"Email", field:"email", sortable:true, filter:true },

{ headerName:"City", field:"city", sortable:true, filter:true },

{ headerName:"Status", field:"status", sortable:true, filter:true }

];

const defaultColDef = {
flex:1,
resizable:true
};

const handleChange=(e)=>{
setForm({...form,[e.target.name]:e.target.value});
};

const saveCustomer=()=>{

const newCustomer = {
id: customers.length + 1,
...form
};

setCustomers([...customers,newCustomer]);

setShowPopup(false);

setForm({
firstName:"",
lastName:"",
mobile:"",
email:"",
city:"",
state:"",
status:"Active"
});

};

const onSearch=(e)=>{
gridRef.current.api.setQuickFilter(e.target.value);
};

return(

<Layout>

<div className="master-page">

{/* HEADER */}

<div className="master-header">

<h2>Customer Master</h2>
</div>

<div>
<button
className="add-btn"
onClick={()=>setShowPopup(true)}
>
+ Add
</button>
</div>


<div className="master-toolbar">

<input
type="text"
placeholder="Search..."
className="search-box"
onChange={onSearch}
/>

</div>

{/* GRID */}

<div
className="master-grid"
style={{height:"500px"}}
>

<AgGridReact
ref={gridRef}
rowData={customers}
columnDefs={columnDefs}
defaultColDef={defaultColDef}
pagination={true}
paginationPageSize={10}
/>

</div>

</div>

{/* POPUP */}

{showPopup && (

<div className="modal-overlay">

<div className="modal">

<div className="modal-header">

<h3>Add Customer</h3>

<button
className="close-btn"
onClick={()=>setShowPopup(false)}
>
X
</button>

</div>

<div className="modal-body">

<input name="firstName" placeholder="First Name" onChange={handleChange}/>
<input name="lastName" placeholder="Last Name" onChange={handleChange}/>
<input name="mobile" placeholder="Mobile" onChange={handleChange}/>
<input name="email" placeholder="Email" onChange={handleChange}/>
<input name="city" placeholder="City" onChange={handleChange}/>
<input name="state" placeholder="State" onChange={handleChange}/>

<select name="status" onChange={handleChange}>
<option>Active</option>
<option>Inactive</option>
</select>

</div>

<div className="modal-footer">

<button
className="submit-btn"
onClick={saveCustomer}
>
Submit
</button>

<button
className="close-btn2"
onClick={()=>setShowPopup(false)}
>
Close
</button>

</div>

</div>

</div>

)}

</Layout>

);

};

export default CustomerMaster;