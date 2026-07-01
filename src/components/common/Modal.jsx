const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg p-5 relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-4 text-xl text-slate-500 hover:text-red-500"
        >
          ×
        </button>

        {children}
      </div>
    </div>
  );
};

export default Modal;