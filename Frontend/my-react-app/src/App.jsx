import {BrowserRouter,Routes,Route} from "react-router-dom";

import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import CustomerDashboard from "./pages/CustomerDashboard";

import ProtectedRoute from "./components/ProtectedRoute";

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

</Routes>

</BrowserRouter>

)

}

export default App;