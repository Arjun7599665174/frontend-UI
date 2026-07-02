import { X } from "lucide-react";

import Button from "../components/common/Button";
import DetailSection from "../components/common/DetailSection";
import { formatCurrency } from "../components/utils/formatCurrency";

const EmployeeDetails = ({ employee, onBack }) => {
  const personalDetails = [
    { label: "Employee ID", value: employee?.id },
    { label: "Code", value: employee?.code },
    { label: "Full Name", value: employee?.name },
    { label: "Email", value: employee?.email },
    { label: "Phone", value: employee?.phone },
    { label: "DOB", value: employee?.dob },
    { label: "Gender", value: employee?.gender },
    { label: "PAN", value: employee?.pan },
    { label: "Aadhaar", value: employee?.aadhaar },
  ];

  const jobDetails = [
    { label: "Department", value: employee?.department },
    { label: "Designation", value: employee?.role },
    { label: "Joining Date", value: employee?.joiningDate },
    { label: "Status", value: employee?.status },
    { label: "Employment Type", value: employee?.employmentType },
  ];

  const salaryBankDetails = [
    { label: "Salary", value: formatCurrency(employee?.salary) },
    { label: "HRA", value: formatCurrency(employee?.hra) },
    { label: "PF", value: formatCurrency(employee?.pf) },
    { label: "Bonus", value: formatCurrency(employee?.bonus) },
    { label: "Bank Name", value: employee?.bankName },
    { label: "Account Number", value: employee?.accountNumber },
    { label: "IFSC Code", value: employee?.ifsc },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-5xl rounded-2xl shadow-xl max-h-[90vh] overflow-y-auto">

        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between bg-white border-b border-slate-200 p-5 rounded-t-2xl">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-800">
              Employee Details
            </h2>

            <p className="text-sm text-slate-500">
              View complete employee information
            </p>
          </div>

          <Button
            type="button"
            variant="icon"
            onClick={onBack}
          >
            <X size={18} />
          </Button>
        </div>

        {/* Body */}
        <div className="p-4 md:p-6 space-y-5">
          <DetailSection
            title="PERSONAL DETAILS"
            items={personalDetails}
          />

          <DetailSection
            title="JOB DETAILS"
            items={jobDetails}
          />

          <DetailSection
            title="SALARY / BANK DETAILS"
            items={salaryBankDetails}
          />

          <div className="flex justify-end">
            <Button
              variant="secondary"
              onClick={onBack}
            >
              Close
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default EmployeeDetails;