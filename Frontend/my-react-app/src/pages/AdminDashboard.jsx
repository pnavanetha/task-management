import Sidebar from "../components/Sidebar";
import Layout from "../components/Layout";
import "../css/dashboard.css";

const AdminDashboard = () => {

return (

<div className="dashboard-layout">

<Sidebar />
<Layout>
<div className="dashboard-content">

<h1>Dashboard</h1>


</div>
</Layout>
</div>


);

};

export default AdminDashboard;