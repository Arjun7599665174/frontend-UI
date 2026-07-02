const Button = ({
  children,
  text,
  type = "button",
  onClick,
  loading = false,
  disabled = false,
  variant = "primary",
  fullWidth = false,
  leftIcon,
  rightIcon,
  className = "",
}) => {
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
    danger: "bg-red-600 hover:bg-red-700 text-white",
    outline:
      "bg-white border border-slate-300 hover:bg-slate-50 text-slate-700",
    ghost: "bg-transparent hover:bg-slate-100 text-slate-600",
    icon:
      "bg-transparent hover:bg-red-50 text-slate-500 hover:text-red-500",
  };

  const sizes = {
    default: "px-4 py-2 rounded-lg",
    icon: "w-9 h-9 rounded-full p-0",
  };

  const isIcon = variant === "icon";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading || disabled}
      className={`
        ${fullWidth ? "w-full" : ""}
        ${isIcon ? sizes.icon : sizes.default}
        inline-flex items-center justify-center gap-2
        font-medium transition
        disabled:opacity-60 disabled:cursor-not-allowed
        ${variants[variant] || variants.primary}
        ${className}
      `}
    >
      {loading ? (
        "Please wait..."
      ) : (
        <>
          {leftIcon && <span>{leftIcon}</span>}
          {children || text}
          {rightIcon && <span>{rightIcon}</span>}
        </>
      )}
    </button>
  );
};

export default Button;