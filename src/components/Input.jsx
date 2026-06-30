const Input = ({ label, name, type, value, onChange, placeholder }) => {
  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium text-gray-700">
        {label}
      </label>

      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
};

export default Input;