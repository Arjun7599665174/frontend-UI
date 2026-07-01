import Button from "../components/common/Button";

const DetailItem = ({ label, value }) => (
  <div>
    <p className="text-xs font-semibold text-slate-400 uppercase">{label}</p>
    <p className="mt-1 text-sm font-medium text-slate-800">
      {value || "Not Available"}
    </p>
  </div>
);

const EmployeeDetails = ({ employee, onBack }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between border-b border-slate-200 p-5">
          <div>
            <h2 className="text-xl font-bold text-slate-800">
              Employee Details
            </h2>
            <p className="text-sm text-slate-500">
              View employee information
            </p>
          </div>

          <button
            onClick={onBack}
            className="text-2xl text-slate-500 hover:text-red-500"
          >
            ×
          </button>
        </div>

        <div className="p-5 space-y-6">
          <div>
            <h3 className="text-sm font-bold text-slate-500 mb-4">
              PERSONAL DETAILS
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <DetailItem label="Employee ID" value={employee.id} />
              <DetailItem label="Code" value={employee.code} />
              <DetailItem label="Full Name" value={employee.name} />
              <DetailItem label="Email" value={employee.email} />
              <DetailItem label="Phone" value={employee.phone} />
              <DetailItem label="DOB" value={employee.dob} />
              <DetailItem label="Gender" value={employee.gender} />
              <DetailItem label="PAN" value={employee.pan} />
              <DetailItem label="Aadhaar" value={employee.aadhaar} />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-500 mb-4">
              JOB DETAILS
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <DetailItem label="Department" value={employee.department} />
              <DetailItem label="Designation" value={employee.role} />
              <DetailItem label="Joining Date" value={employee.joiningDate} />
              <DetailItem label="Status" value={employee.status} />
              <DetailItem label="Employment Type" value={employee.employmentType} />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-500 mb-4">
              SALARY / BANK DETAILS
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <DetailItem label="Salary" value={`Rs. ${employee.salary || 0}`} />
              <DetailItem label="HRA" value={`Rs. ${employee.hra || 0}`} />
              <DetailItem label="PF" value={`Rs. ${employee.pf || 0}`} />
              <DetailItem label="Bonus" value={`Rs. ${employee.bonus || 0}`} />
              <DetailItem label="Bank Name" value={employee.bankName} />
              <DetailItem label="Account Number" value={employee.accountNumber} />
              <DetailItem label="IFSC Code" value={employee.ifsc} />
            </div>
          </div>

          <div className="flex justify-end">
            <Button variant="secondary" onClick={onBack}>
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;