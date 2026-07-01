const Button = ({
  children,
  text,
  type = "button",
  onClick,
  loading = false,
  variant = "primary",
  fullWidth = false,
}) => {
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
    danger: "bg-red-600 hover:bg-red-700 text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading}
      className={`
        ${fullWidth ? "w-full" : ""}
        px-4 py-2 rounded-lg font-medium transition
        ${variants[variant]}
        disabled:bg-blue-300
      `}
    >
      {loading ? "Please wait..." : children || text}
    </button>
  );
};

export default Button;