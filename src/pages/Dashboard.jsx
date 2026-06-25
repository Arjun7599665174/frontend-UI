import { useState } from "react";
import Card from "../components/Card";
import Modal from "../components/Modal";
import { dashboardData } from "../data/mockData";

const Dashboard = ({ setPage }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 md:flex">
      <aside className="bg-sky-700 text-white p-5 md:w-60">
        <h2 className="text-2xl font-bold mb-6">Frontend UI</h2>

        <p className="mb-3 cursor-pointer">Dashboard</p>

        <p
          onClick={() => setPage("profile")}
          className="mb-3 cursor-pointer"
        >
          Profile
        </p>

        <p onClick={() => setPage("login")} className="cursor-pointer">
          Logout
        </p>
      </aside>

      <main className="flex-1">
        <header className="bg-white p-4 shadow flex justify-between items-center">
          <h1 className="text-xl font-bold">Dashboard</h1>

          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Open Modal
          </button>
        </header>

        <section className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {dashboardData.map((item, index) => (
            <Card key={index} title={item.title} value={item.value} />
          ))}
        </section>

        <section className="p-5">
          <div className="bg-white p-5 rounded-xl shadow">
            <h2 className="text-lg font-bold mb-3">Main Content Area</h2>
            <p className="text-gray-600">
              This is dummy content because APIs are not available yet.
            </p>
          </div>
        </section>
      </main>

      <Modal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default Dashboard;