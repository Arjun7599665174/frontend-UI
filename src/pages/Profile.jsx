import { userData } from "../data/mockData";

const Profile = ({ setPage }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md text-center">
        <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
          A
        </div>

        <h1 className="text-2xl font-bold">{userData.name}</h1>
        <p className="text-gray-600">{userData.role}</p>

        <div className="mt-5 text-left space-y-2">
          <p>
            <b>Email:</b> {userData.email}
          </p>
          <p>
            <b>Mobile:</b> {userData.mobile}
          </p>
          <p>
            <b>Location:</b> {userData.location}
          </p>
        </div>

        <button
          onClick={() => setPage("dashboard")}
          className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default Profile;