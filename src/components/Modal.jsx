const Modal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center px-4">
      <div className="bg-white p-6 rounded-xl w-full max-w-sm text-center">
        <h2 className="text-xl font-bold mb-2">Success</h2>
        <p className="mb-4">This is reusable modal.</p>

        <button
          onClick={onClose}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;