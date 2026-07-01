import { useState } from "react";
 import EmployeeDetails from"./pages/EmployeeDetails";
import Employees from "./pages/Employees";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

const App = () => {
  const [page, setPage] = useState("login");

  if (page === "login") {
    return <Login setPage={setPage} />;
  }

  if (page === "register") {
    return <Register setPage={setPage} />;
  }
  if (page === "employees") {
  return <Employees page={page} setPage={setPage} />;
}

if (page === "employeeDetails") {
  return <EmployeeDetails setPage={setPage} />;
}
  return <Dashboard page={page} setPage={setPage} />;
};

export default App;