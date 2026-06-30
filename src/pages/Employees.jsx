import { useMemo, useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import EmployeeForm from "../components/employee/EmployeeForm";
import DeleteModal from "../components/employee/DeleteModal";
import { employeesData } from "../data/mockData";

const Employees = ({ page, setPage }) => {
  const [employees, setEmployees] = useState(employeesData);
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [status, setStatus] = useState("All");

  const [showForm, setShowForm] = useState(false);
  const [deleteEmployee, setDeleteEmployee] = useState(null);

  const filteredEmployees = useMemo(() => {
    return employees.filter((emp) => {
      const matchSearch =
        emp.name.toLowerCase().includes(search.toLowerCase()) ||
        emp.code.toLowerCase().includes(search.toLowerCase()) ||
        emp.role.toLowerCase().includes(search.toLowerCase());

      const matchDepartment =
        department === "All" || emp.department === department;

      const matchStatus = status === "All" || emp.status === status;

      return matchSearch && matchDepartment && matchStatus;
    });
  }, [employees, search, department, status]);

  const handleAddEmployee = (newEmployee) => {
    setEmployees([newEmployee, ...employees]);
  };

  const handleDeleteEmployee = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
    setDeleteEmployee(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar page={page} setPage={setPage} />

      <main className="flex-1 min-w-0">
        <Header title="Payroll Management" setPage={setPage} />

        <section className="p-4 md:p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-slate-800">
                Employee Management
              </h1>
              <p className="text-sm text-slate-500">
                Manage your team of {employees.length} employees
              </p>
            </div>

            <button
              onClick={() => setShowForm(true)}
              className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium"
            >
              + Add Employee
            </button>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
              <input
                type="text"
                placeholder="Search by name, ID, or position..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border border-slate-200 rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-100"
              />

              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="border border-slate-200 rounded-lg px-4 py-2 text-sm outline-none"
              >
                <option value="All">All Departments</option>
                <option value="Management">Management</option>
                <option value="Marketing">Marketing</option>
                <option value="Sales">Sales</option>
                <option value="Support">Support</option>
                <option value="HR">HR</option>
                <option value="Finance">Finance</option>
                <option value="Engineering">Engineering</option>
              </select>

              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="border border-slate-200 rounded-lg px-4 py-2 text-sm outline-none"
              >
                <option value="All">All Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[850px] text-sm">
                <thead>
                  <tr className="text-left text-slate-500 border-b">
                    <th className="py-3 px-3">Employee</th>
                    <th className="py-3 px-3">Role</th>
                    <th className="py-3 px-3">Contact</th>
                    <th className="py-3 px-3">Base Salary</th>
                    <th className="py-3 px-3">Status</th>
                    <th className="py-3 px-3 text-right">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredEmployees.map((emp) => (
                    <tr key={emp.id} className="border-b last:border-b-0">
                      <td className="py-4 px-3">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
                            {emp.code}
                          </div>
                          <div>
                            <p className="font-semibold text-slate-800">
                              {emp.name}
                            </p>
                            <p className="text-xs text-slate-400">#{emp.id}</p>
                          </div>
                        </div>
                      </td>

                      <td className="py-4 px-3">
                        <p className="font-medium text-slate-700">{emp.role}</p>
                        <p className="text-xs text-slate-400">
                          {emp.department}
                        </p>
                      </td>

                      <td className="py-4 px-3">
                        <p className="text-slate-700">{emp.email}</p>
                        <p className="text-xs text-slate-400">{emp.phone}</p>
                      </td>

                      <td className="py-4 px-3 font-semibold text-slate-700">
                        Rs. {emp.salary.toLocaleString("en-IN")}
                      </td>

                      <td className="py-4 px-3">
                        <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-semibold">
                          {emp.status}
                        </span>
                      </td>

                      <td className="py-4 px-3">
                        <div className="flex justify-end gap-3">
                          <button className="text-slate-500 hover:text-sky-600">
                            View
                          </button>

                          <button className="text-slate-500 hover:text-green-600">
                            Edit
                          </button>

                          <button
                            onClick={() => setDeleteEmployee(emp)}
                            className="text-slate-500 hover:text-red-600"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}

                  {filteredEmployees.length === 0 && (
                    <tr>
                      <td colSpan="6" className="text-center py-8 text-slate-400">
                        No employee found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>

      {showForm && (
        <EmployeeForm
          onClose={() => setShowForm(false)}
          onSave={handleAddEmployee}
        />
      )}

      <DeleteModal
        employee={deleteEmployee}
        onClose={() => setDeleteEmployee(null)}
        onDelete={handleDeleteEmployee}
      />
    </div>
  );
};

export default Employees;