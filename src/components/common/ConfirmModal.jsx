import Modal from "./Modal";
import Button from "./Button";

const ConfirmModal = ({ isOpen, title, message, onCancel, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={onCancel}>
      <h2 className="text-xl font-bold text-slate-800 mb-2">{title}</h2>
      <p className="text-sm text-slate-500 mb-5">{message}</p>

      <div className="flex justify-end gap-3">
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>

        <Button variant="danger" onClick={onConfirm}>
          Delete
        </Button>
      </div>
    </Modal>
  );
};

export default ConfirmModal;