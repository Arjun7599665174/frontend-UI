import { forwardRef } from "react";

const Input = forwardRef(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className="mb-4">
        <label className="block mb-1 font-medium text-gray-700">
          {label}
        </label>

        <input
          ref={ref}
          {...props}
          className={`w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500 ${className}`}
        />

        {error && (
          <p className="text-red-500 text-sm mt-1">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;