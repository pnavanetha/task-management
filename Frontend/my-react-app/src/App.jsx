import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>

      <div style={{ display: "flex" }}>

        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div style={{ padding: "20px", flex: 1 }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>

      </div>

    </Router>
  );
}

export default App;