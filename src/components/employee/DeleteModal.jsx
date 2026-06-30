const DeleteModal = ({ employee, onClose, onDelete }) => {
  if (!employee) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6">
        <h2 className="text-lg font-bold text-slate-800 mb-2">
          Delete Employee
        </h2>

        <p className="text-sm text-slate-500 mb-6">
          Are you sure you want to delete{" "}
          <span className="font-semibold text-slate-800">
            {employee.name}
          </span>
          ?
        </p>

        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 rounded-lg border text-sm">
            Cancel
          </button>

          <button
            onClick={() => onDelete(employee.id)}
            className="px-4 py-2 rounded-lg bg-red-600 text-white text-sm"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;