import { useMemo, useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import Table from "../components/common/Table";
import Filters from "../components/common/Filters";
import ConfirmModal from "../components/common/ConfirmModal";
import EmployeeDetails from "./EmployeeDetails";
import { employeesData } from "../data/mockData";

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  dob: "",
  gender: "Male",
  pan: "",
  aadhaar: "",
  joiningDate: "",
  department: "",
  role: "",
  employmentType: "",
  salary: "",
  hra: "",
  pf: "",
  bonus: "",
  bankName: "",
  accountNumber: "",
  ifsc: "",
  status: "Active",
};

const formSections = [
  {
    title: "PERSONAL DETAILS",
    fields: [
      { name: "name", placeholder: "Full Name *", required: true },
      { name: "email", type: "email", placeholder: "Email *", required: true },
      { name: "phone", placeholder: "Phone Number *", required: true },
      { name: "dob", type: "date" },
      { name: "pan", placeholder: "PAN Number" },
      { name: "aadhaar", placeholder: "Aadhaar Number" },
    ],
  },
  {
    title: "EMPLOYMENT DETAILS",
    fields: [
      { name: "joiningDate", type: "date" },
      { name: "department", placeholder: "Department *", required: true },
      { name: "role", placeholder: "Designation *", required: true },
      { name: "employmentType", placeholder: "Employment Type" },
    ],
  },
  {
    title: "SALARY DETAILS",
    fields: [
      { name: "salary", type: "number", placeholder: "Basic Salary *", required: true },
      { name: "hra", type: "number", placeholder: "HRA" },
      { name: "pf", type: "number", placeholder: "PF" },
      { name: "bonus", type: "number", placeholder: "Bonus" },
    ],
  },
  {
    title: "BANK DETAILS",
    fields: [
      { name: "bankName", placeholder: "Bank Name" },
      { name: "accountNumber", placeholder: "Account Number" },
      { name: "ifsc", placeholder: "IFSC Code" },
    ],
  },
];

const Employees = ({ page, setPage }) => {
  const [employees, setEmployees] = useState(employeesData);
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");
  const [status, setStatus] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [formMode, setFormMode] = useState("add");
  const [form, setForm] = useState(emptyForm);
  const [deleteEmployee, setDeleteEmployee] = useState(null);

  const filteredEmployees = useMemo(() => {
    return employees.filter((emp) => {
      const keyword = search.toLowerCase();

      const matchSearch =
        emp.name.toLowerCase().includes(keyword) ||
        emp.code.toLowerCase().includes(keyword) ||
        emp.role.toLowerCase().includes(keyword);
     const matchDepartment =
  department === "" ||
  department === "All Departments" ||
  emp.department === department;

const matchStatus =
  status === "" ||
  status === "All Status" ||
  emp.status === status;

      return matchSearch && matchDepartment && matchStatus;
    });
  }, [employees, search, department, status]);

  const employeeColumns = [
    {
      label: "Employee",
      render: (emp) => (
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
            {emp.code}
          </div>
          <div>
            <p className="font-semibold text-slate-800">{emp.name}</p>
            <p className="text-xs text-slate-400">#{emp.id}</p>
          </div>
        </div>
      ),
    },
    {
      label: "Role",
      render: (emp) => (
        <div>
          <p className="font-medium text-slate-700">{emp.role}</p>
          <p className="text-xs text-slate-400">{emp.department}</p>
        </div>
      ),
    },
    {
      label: "Contact",
      render: (emp) => (
        <div>
          <p className="text-slate-700">{emp.email}</p>
          <p className="text-xs text-slate-400">{emp.phone}</p>
        </div>
      ),
    },
    {
      label: "Base Salary",
      render: (emp) => (
        <span className="font-semibold text-slate-700">
          Rs. {Number(emp.salary || 0).toLocaleString("en-IN")}
        </span>
      ),
    },
    {
      label: "Status",
      render: (emp) => (
        <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-semibold">
          {emp.status}
        </span>
      ),
    },
  ];

  const openAddForm = () => {
    setSelectedEmployee(null);
    setForm(emptyForm);
    setFormMode("add");
    setShowForm(true);
  };

  const openEditForm = (emp) => {
    setSelectedEmployee(null);
    setForm({ ...emptyForm, ...emp });
    setFormMode("edit");
    setShowForm(true);
  };

  const openViewDetails = (emp) => {
    setShowForm(false);
    setSelectedEmployee(emp);
  };

  const closeForm = () => {
    setShowForm(false);
    setSelectedEmployee(null);
    setForm(emptyForm);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveEmployee = (e) => {
    e.preventDefault();

    const employeeData = {
      ...form,
      salary: Number(form.salary || 0),
      hra: Number(form.hra || 0),
      pf: Number(form.pf || 0),
      bonus: Number(form.bonus || 0),
      code: form.name.slice(0, 2).toUpperCase(),
    };

    if (formMode === "edit") {
      setEmployees((prev) =>
        prev.map((emp) =>
          emp.id === form.id ? { ...employeeData, id: emp.id } : emp
        )
      );
    } else {
      setEmployees((prev) => [{ ...employeeData, id: Date.now() }, ...prev]);
    }

    closeForm();
  };

  const handleDeleteEmployee = () => {
    setEmployees((prev) => prev.filter((emp) => emp.id !== deleteEmployee.id));
    setDeleteEmployee(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar page={page} setPage={setPage} />

      <main className="flex-1 min-w-0">
        <Header title="Payroll Management" setPage={setPage} />

        <section className="p-4 md:p-6">
          {!showForm && !selectedEmployee && (
            <>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
                <div>
                  <h1 className="text-xl md:text-2xl font-bold text-slate-800">
                    Employee Management
                  </h1>
                  <p className="text-sm text-slate-500">
                    Manage your team of {employees.length} employees
                  </p>
                </div>

                <Button onClick={openAddForm}>+ Add Employee</Button>
              </div>

             <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 mb-5">
  <Filters
  search={search}
  setSearch={setSearch}
  searchPlaceholder="Search employees..."
  filters={[
    {
      name: "department",
      value: department,
      onChange: setDepartment,
      label: "Department",
      options: [
        "All Departments",
        "Management",
        "Marketing",
        "Sales",
        "Support",
        "HR",
        "Finance",
        "Engineering",
      ],
    },
    {
      name: "status",
      value: status,
      onChange: setStatus,
      label: "Status",
      options: ["All Status", "Active", "Inactive"],
    },
  ]}
/>
  

                <Table
                  columns={employeeColumns}
                  data={filteredEmployees}
                  actions={(emp) => (
                    <>
                      <button
                        onClick={() => openViewDetails(emp)}
                        className="text-slate-500 hover:text-sky-600"
                      >
                        View

                      </button>

                      <button
                        onClick={() => openEditForm(emp)}
                        className="text-slate-500 hover:text-green-600"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => setDeleteEmployee(emp)}
                        className="text-slate-500 hover:text-red-600"
                      >
                        Delete
                      </button>
                    </>
                  )}
                />
              </div>
            </>
          )}

          {selectedEmployee && (
            <EmployeeDetails
            
              employee={selectedEmployee}
              onBack={() => setSelectedEmployee(null)}
            />
          )}

          {showForm && (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 md:p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-800">
                    {formMode === "add" ? "Add New Employee" : "Edit Employee"}
                  </h2>
                  <p className="text-sm text-slate-500">
                    Fill personal, job, salary and bank details
                  </p>
                </div>

                <Button variant="secondary" onClick={closeForm}>
                  Back
                </Button>
              </div>

              <form onSubmit={handleSaveEmployee}>
                {formSections.map((section) => (
                  <div key={section.title} className="mb-6">
                    <h3 className="text-sm font-bold text-slate-500 mb-3">
                      {section.title}
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {section.fields.map((field) => (
                        <Input
                          key={field.name}
                          name={field.name}
                          type={field.type || "text"}
                          placeholder={field.placeholder}
                          value={form[field.name]}
                          onChange={handleChange}
                          required={field.required}
                        />
                      ))}

                      {section.title === "PERSONAL DETAILS" && (
                        <select
                          name="gender"
                          value={form.gender}
                          onChange={handleChange}
                          className="border border-slate-200 rounded-lg px-4 py-2 text-sm outline-none"
                        >
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      )}

                      {section.title === "EMPLOYMENT DETAILS" && (
                        <select
                          name="status"
                          value={form.status}
                          onChange={handleChange}
                          className="border border-slate-200 rounded-lg px-4 py-2 text-sm outline-none"
                        >
                          <option value="Active">Active</option>
                          <option value="Inactive">Inactive</option>
                        </select>
                      )}
                    </div>
                  </div>
                ))}

                <div className="flex justify-end gap-3">
                  <Button type="button" variant="secondary" onClick={closeForm}>
                    Cancel
                  </Button>

                  <Button type="submit">
                    {formMode === "edit" ? "Update Employee" : "Save Employee"}
                  </Button>
                </div>
              </form>
            </div>
          )}
        </section>
      </main>

      <ConfirmModal
        isOpen={!!deleteEmployee}
        title="Delete Employee"
        message={`Are you sure you want to delete ${deleteEmployee?.name}?`}
        onCancel={() => setDeleteEmployee(null)}
        onConfirm={handleDeleteEmployee}
      />
    </div>
  );
};

export default Employees;