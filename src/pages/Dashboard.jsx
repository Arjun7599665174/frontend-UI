import { useState } from "react";
import Modal from "../components/Modal";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import { dashboardData } from "../data/mockData";

const Dashboard = ({ page, setPage }) => {
  const [showModal, setShowModal] = useState(false);

  const totalEmployees = dashboardData.totalEmployees;

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar page={page} setPage={setPage} />

      <main className="flex-1 min-w-0">
        <Header title="Payroll Management" setPage={setPage} />

        <section className="p-4 md:p-6 grid grid-cols-1 xl:grid-cols-3 gap-5">
          <div className="xl:col-span-2 bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-slate-800">
                Department Distribution
              </h2>
              <p className="text-sm text-slate-500">
                Employee allocation across departments
              </p>
            </div>

            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-slate-700">
                Distribution by Department
              </h3>
              <p className="text-xs text-slate-500">
                {totalEmployees} total employees
              </p>
            </div>

            <div className="space-y-5">
              {dashboardData.departments.map((dept, index) => {
                const percent = ((dept.count / totalEmployees) * 100).toFixed(1);

                return (
                  <div key={dept.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-slate-700">
                        {dept.name}
                      </span>
                      <span className="font-semibold text-slate-700">
                        {dept.count}
                        <span className="ml-2 text-xs text-slate-400">
                          ({percent}%)
                        </span>
                      </span>
                    </div>

                    <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          barColors[index % barColors.length]
                        }`}
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-5">
            <InfoBox title="Payroll Summary" icon="₹">
              <InfoRow label="Current Period" value={dashboardData.payroll.currentPeriod} />
              <InfoRow
                label="Total Amount"
                value={`Rs. ${dashboardData.payroll.totalAmount.toLocaleString(
                  "en-IN"
                )}`}
              />
              <InfoRow
                label="Per Employee"
                value={`Rs. ${dashboardData.payroll.perEmployee.toLocaleString(
                  "en-IN"
                )}`}
              />
            </InfoBox>

            <InfoBox title="Performance" icon="✓">
              <InfoRow
                label="Employee Retention"
                value={`${dashboardData.performance.employeeRetention}%`}
              />
              <InfoRow
                label="Payroll Accuracy"
                value={`${dashboardData.performance.payrollAccuracy}%`}
              />
              <InfoRow
                label="On-time Processing"
                value={`${dashboardData.performance.onTimeProcessing}%`}
              />
            </InfoBox>

            <InfoBox title="Quick Actions" icon="+">
              <button
                onClick={() => setShowModal(true)}
                className="w-full text-left px-4 py-3 rounded-xl bg-sky-50 hover:bg-sky-100 text-sm font-medium text-slate-700"
              >
                Process Payroll
              </button>

              <button
                onClick={() => setPage("employees")}
                className="w-full text-left px-4 py-3 rounded-xl bg-sky-50 hover:bg-sky-100 text-sm font-medium text-slate-700 mt-3"
              >
                Manage Employees
              </button>
            </InfoBox>
          </div>
        </section>
      </main>

      <Modal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

const InfoBox = ({ title, icon, children }) => {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
          {icon}
        </div>
        <h3 className="font-bold text-slate-800">{title}</h3>
      </div>

      <div className="space-y-3">{children}</div>
    </div>
  );
};

const InfoRow = ({ label, value }) => {
  return (
    <div className="flex justify-between items-center text-sm">
      <span className="text-slate-500">{label}</span>
      <span className="font-semibold text-slate-800">{value}</span>
    </div>
  );
};

const barColors = [
  "bg-blue-500",
  "bg-emerald-500",
  "bg-cyan-500",
  "bg-indigo-500",
  "bg-yellow-500",
  "bg-red-500",
  "bg-pink-500",
];

export default Dashboard;