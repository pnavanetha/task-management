import {BrowserRouter,Routes,Route} from "react-router-dom";

import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import CustomerDashboard from "./pages/CustomerDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import CustomerMaster from "./pages/CustomerMaster";

function App(){

return(

<BrowserRouter>

<Routes>

<Route path="/" element={<Login/>}/>

<Route
path="/admin"
element={
<ProtectedRoute role="admin">
<AdminDashboard/>
</ProtectedRoute>
}
/>

<Route
path="/employee"
element={
<ProtectedRoute role="employee">
<EmployeeDashboard/>
</ProtectedRoute>
}
/>

<Route
path="/customer"
element={
<ProtectedRoute role="user">
<CustomerDashboard/>
</ProtectedRoute>
}
/>
<Route
path="/customer-master"
element={
<ProtectedRoute role="admin">
<CustomerMaster/>
</ProtectedRoute>
}
/>


</Routes>

</BrowserRouter>

)

}

export default App;