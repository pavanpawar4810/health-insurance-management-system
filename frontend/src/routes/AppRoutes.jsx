import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../pages/Dashboard/Dashboard";
import CustomersList from "../pages/Customers/CustomersList";
import CustomerForm from "../pages/Customers/CustomerForm";
import CustomerDetails from "../pages/Customers/CustomerDetails";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/customers" element={<CustomersList />} />

      <Route
        path="/"
        element={<Navigate to="/dashboard" replace />}
      />

      <Route
        path="/customers/add"
        element={<CustomerForm />}
      />

      <Route
        path="/customers/:id"
        element={<CustomerDetails />}
      />

      <Route
        path="/customers/edit/:id"
        element={<CustomerForm />}
      />
      

    </Routes>
  );
}

export default AppRoutes;