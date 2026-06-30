import { useState } from "react";

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
  salary: "",
  status: "Active",
};

const EmployeeForm = ({ onClose, onSave }) => {
  const [form, setForm] = useState(emptyForm);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone || !form.department || !form.role || !form.salary) {
      alert("Please fill all required fields");
      return;
    }

    const newEmployee = {
      id: Date.now(),
      code: form.name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .slice(0, 2)
        .toUpperCase(),
      name: form.name,
      role: form.role,
      department: form.department,
      email: form.email,
      phone: form.phone,
      salary: Number(form.salary),
      status: form.status,
    };

    onSave(newEmployee);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-5 border-b">
          <h2 className="text-lg font-bold text-slate-800">
            Add New Employee
          </h2>
          <button onClick={onClose} className="text-slate-500 text-xl">
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 space-y-6">
          <div>
            <h3 className="text-sm font-bold text-slate-700 mb-4">
              PERSONAL IDENTITY
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input label="Full Name *" name="name" value={form.name} onChange={handleChange} />
              <Input label="Email *" name="email" value={form.email} onChange={handleChange} />
              <Input label="Mobile *" name="phone" value={form.phone} onChange={handleChange} />

              <Input label="Date of Birth" name="dob" type="date" value={form.dob} onChange={handleChange} />

              <Select label="Gender" name="gender" value={form.gender} onChange={handleChange}>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Select>

              <Input label="PAN Number" name="pan" value={form.pan} onChange={handleChange} />
              <Input label="Aadhaar Number" name="aadhaar" value={form.aadhaar} onChange={handleChange} />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-700 mb-4">
              EMPLOYMENT DETAILS
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input label="Date of Joining" name="joiningDate" type="date" value={form.joiningDate} onChange={handleChange} />

              <Select label="Department *" name="department" value={form.department} onChange={handleChange}>
                <option value="">Select Department</option>
                <option>Management</option>
                <option>Marketing</option>
                <option>Sales</option>
                <option>Support</option>
                <option>HR</option>
                <option>Finance</option>
                <option>Engineering</option>
              </Select>

              <Input label="Designation *" name="role" value={form.role} onChange={handleChange} />

              <Input label="Base Salary *" name="salary" type="number" value={form.salary} onChange={handleChange} />

              <Select label="Status" name="status" value={form.status} onChange={handleChange}>
                <option>Active</option>
                <option>Inactive</option>
              </Select>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-lg border text-sm"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-slate-900 text-white text-sm"
            >
              Save Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Input = ({ label, name, value, onChange, type = "text" }) => (
  <div>
    <label className="block text-xs font-semibold text-slate-600 mb-1">
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-100"
    />
  </div>
);

const Select = ({ label, name, value, onChange, children }) => (
  <div>
    <label className="block text-xs font-semibold text-slate-600 mb-1">
      {label}
    </label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-100"
    >
      {children}
    </select>
  </div>
);

export default EmployeeForm;