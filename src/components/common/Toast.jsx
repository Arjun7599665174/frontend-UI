const Toast = ({ message, type }) => {
  if (!message) return null;

  return (
    <div
      className={`fixed top-4 right-4 px-4 py-2 rounded-lg text-white ${
        type === "error" ? "bg-red-500" : "bg-green-500"
      }`}
    >
      {message}
    </div>
  );
};

export default Toast;